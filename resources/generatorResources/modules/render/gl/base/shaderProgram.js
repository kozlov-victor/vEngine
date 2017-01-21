function compileShader(gl, shaderSource, shaderType) {
    //<code>{{#if opts.debug}}
    if (!shaderSource) throw 'can not compile shader: shader source not specified for type ' + shaderType;
    //<code>{{/if}}
    // Create the shader object
    var shader = gl.createShader(shaderType);

    // Load the shader source
    gl.shaderSource(shader, shaderSource);

    // Compile the shader
    gl.compileShader(shader);

    // Check the compile status
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
        // Something went wrong during compilation; get the error
        var lastError = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw 'Error compiling shader ' + shader + ':' + lastError;
    }

    return shader;
}


function createProgram(gl, shaders) {
    var program = gl.createProgram();
    shaders.forEach(function(shader) {
        gl.attachShader(program, shader);
    });
    gl.linkProgram(program);

    // Check the link status
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        // something went wrong with the link
        var lastError = gl.getProgramInfoLog(program);
        gl.deleteProgram(program);
        throw "Error in program linking:" + lastError;
    }
    return program;
}

var extractUniforms = function (gl, program) {
    var uniforms = {};

    var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

    for (var i = 0; i < totalUniforms; i++) {
        var uniformData = gl.getActiveUniform(program, i);
        var name = uniformData.name.replace(/\[.*?]/, "");
        var type = mapType(gl, uniformData.type);

        uniforms[name] = {
            type: type,
            size: uniformData.size,
            name: name,
            location: gl.getUniformLocation(program, name),
            setter: getUniformSetter(uniformData.size,type)
        };
    }

    return uniforms;


    function mapType(gl, type) {

        var GL_TABLE = null;

        var GL_TO_GLSL_TYPES = {
            'FLOAT': 'float',
            'FLOAT_VEC2': 'vec2',
            'FLOAT_VEC3': 'vec3',
            'FLOAT_VEC4': 'vec4',

            'INT': 'int',
            'INT_VEC2': 'ivec2',
            'INT_VEC3': 'ivec3',
            'INT_VEC4': 'ivec4',

            'BOOL': 'bool',
            'BOOL_VEC2': 'bvec2',
            'BOOL_VEC3': 'bvec3',
            'BOOL_VEC4': 'bvec4',

            'FLOAT_MAT2': 'mat2',
            'FLOAT_MAT3': 'mat3',
            'FLOAT_MAT4': 'mat4',

            'SAMPLER_2D': 'sampler2D'
        };

        if (!GL_TABLE) {
            var typeNames = Object.keys(GL_TO_GLSL_TYPES);

            GL_TABLE = {};

            for (var i = 0; i < typeNames.length; ++i) {
                var tn = typeNames[i];
                GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn];
            }
        }

        return GL_TABLE[type];
    }
};


var getUniformSetter = function(size,type){
    if (size==1) {
        switch (type) {
            case 'float':       return  function(gl,location,value) {gl.uniform1f(location, value)};
            case 'vec2':        return  function(gl,location,value) {gl.uniform2f(location, value[0], value[1])};
            case 'vec3':        return  function(gl,location,value) {gl.uniform3f(location, value[0], value[1], value[2])};
            case 'vec4':        return  function(gl,location,value) {gl.uniform4f(location, value[0], value[1], value[2], value[3])};
            case 'int':         return  function(gl,location,value) {gl.uniform1i(location, value)};
            case 'ivec2':       return  function(gl,location,value) {gl.uniform2i(location, value[0], value[1])};
            case 'ivec3':       return  function(gl,location,value) {gl.uniform3i(location, value[0], value[1], value[2])};
            case 'ivec4':       return  function(gl,location,value) {gl.uniform4i(location, value[0], value[1], value[2], value[3])};
            case 'bool':        return  function(gl,location,value) {gl.uniform1i(location, value)};
            case 'bvec2':       return  function(gl,location,value) {gl.uniform2i(location, value[0], value[1])};
            case 'bvec3':       return  function(gl,location,value) {gl.uniform3i(location, value[0], value[1], value[2])};
            case 'bvec4':       return  function(gl,location,value) {gl.uniform4i(location, value[0], value[1], value[2], value[3])};
            case 'mat2':        return  function(gl,location,value) {gl.uniformMatrix2fv(location, false, value)};
            case 'mat3':        return  function(gl,location,value) {gl.uniformMatrix3fv(location, false, value)};
            case 'mat4':        return  function(gl,location,value) {gl.uniformMatrix4fv(location, false, value)};
            case 'sampler2D':   return  function(gl,location,value) {gl.uniform1i(location, value)};
        }
    } else {
        switch (type) {
            case 'float':       return  function(gl,location,value) {gl.uniform1fv(location, value)};
            case 'vec2':        return  function(gl,location,value) {gl.uniform2fv(location, value)};
            case 'vec3':        return  function(gl,location,value) {gl.uniform3fv(location, value)};
            case 'vec4':        return  function(gl,location,value) {gl.uniform4fv(location, value)};
            case 'int':         return  function(gl,location,value) {gl.uniform1iv(location, value)};
            case 'ivec2':       return  function(gl,location,value) {gl.uniform2iv(location, value)};
            case 'ivec3':       return  function(gl,location,value) {gl.uniform3iv(location, value)};
            case 'ivec4':       return  function(gl,location,value) {gl.uniform4iv(location, value)};
            case 'bool':        return  function(gl,location,value) {gl.uniform1iv(location, value)};
            case 'bvec2':       return  function(gl,location,value) {gl.uniform2iv(location, value)};
            case 'bvec3':       return  function(gl,location,value) {gl.uniform3iv(location, value)};
            case 'bvec4':       return  function(gl,location,value) {gl.uniform4iv(location, value)};
            case 'sampler2D':   return  function(gl,location,value) {gl.uniform1iv(location, value)};
        }
    }
};


var ShaderProgram = function(gl,sources){

    var program;
    var uniforms;

    //var uniformValuesCache = {};

    (function(){

        var vShader = compileShader(gl,sources[0],gl.VERTEX_SHADER);
        var fShader = compileShader(gl,sources[1],gl.FRAGMENT_SHADER);
        program = createProgram(gl,[vShader,fShader]);
        uniforms = extractUniforms(gl,program);

    })();

    this.getProgram = function(){
        return program;
    };

    this.bind = function(){
        gl.useProgram(program);
    };

    this.setUniform = function(name,value){
        var uniform = uniforms[name];
        if (!uniform) throw 'no uniform with name '+ name + ' found!';
        //if (uniformValuesCache[name]===value) return;
        uniform.setter(gl,uniform.location,value);
        //uniformValuesCache[name] = value;
    };

    this.bindBuffer = function(buffer,uniformLocationName){
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer.getGlBuffer());
        var uniformLocation = gl.getAttribLocation(program, uniformLocationName);

        //<code>{{#if opts.debug}}
        if (!uniformLocationName) throw "can not found uniform location: uniformLocationName not defined";
        if (uniformLocation<0) throw "can not found uniform location for " + uniformLocationName;
        //<code>{{/if}}

        gl.enableVertexAttribArray(uniformLocation);
        gl.vertexAttribPointer(
            uniformLocation,
            buffer.getItemSize(),
            buffer.getItemType(),
            false,  // if the content is normalized vectors
            0,      // number of bytes to skip in between elements
            0       // offsets to the first element
        );
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    };

};

module.exports = ShaderProgram;