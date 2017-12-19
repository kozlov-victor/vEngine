/*global DEBUG:true*/

const compileShader = (gl, shaderSource, shaderType)=> {
    if (DEBUG) {
        if (!shaderSource) throw `can not compile shader: shader source not specified for type ${shaderType}`;
    }
    // Create the shader object
    let shader = gl.createShader(shaderType);

    // Load the shader source
    gl.shaderSource(shader, shaderSource);

    // Compile the shader
    gl.compileShader(shader);

    // Check the compile status
    let compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
        // Something went wrong during compilation; get the error
        let lastError = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        if (DEBUG) {
            throw 'Error compiling shader ' + shader + ':' + lastError;
        } else {
            throw lastError;
        }

    }

    return shader;
};


const createProgram = (gl, shaders)=> {
    let program = gl.createProgram();
    shaders.forEach(function(shader) {
        gl.attachShader(program, shader);
    });
    gl.linkProgram(program);

    // Check the link status
    let linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        // something went wrong with the link
        let lastError = gl.getProgramInfoLog(program);
        gl.deleteProgram(program);
        if (DEBUG) {
            throw "Error in program linking:" + lastError;
        } else {
            throw lastError;
        }

    }
    return program;
};

const mapType = (gl, type)=> {

    let GL_TABLE = null;

    let GL_TO_GLSL_TYPES = {
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
        let typeNames = Object.keys(GL_TO_GLSL_TYPES);

        GL_TABLE = {};

        for (let i = 0; i < typeNames.length; ++i) {
            let tn = typeNames[i];
            GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn];
        }
    }

    return GL_TABLE[type];
};

const extractUniforms = (gl, program)=> {
    let uniforms = {};

    let totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

    for (let i = 0; i < totalUniforms; i++) {
        let uniformData = gl.getActiveUniform(program, i);
        let name = uniformData.name.replace(/\[.*?]/, "");
        let type = mapType(gl, uniformData.type);

        uniforms[name] = {
            type: type,
            size: uniformData.size,
            name: name,
            location: gl.getUniformLocation(program, name),
            setter: getUniformSetter(uniformData.size,type)
        };
    }

    return uniforms;
    
};


const getUniformSetter = function(size,type){
    if (size===1) {
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

export default class ShaderProgram {

    static currentProgram = null;

    constructor(gl,sources) {
        let vShader = compileShader(gl, sources[0], gl.VERTEX_SHADER);
        let fShader = compileShader(gl, sources[1], gl.FRAGMENT_SHADER);
        this.program = createProgram(gl, [vShader, fShader]);
        this.uniforms = extractUniforms(gl, this.program);
        this.gl = gl;
        this.name = '';
    }

    getProgram () {
        return this.program;
    }

    bind(){
        this.gl.useProgram(this.program);
        ShaderProgram.currentProgram = this;
    }

    setUniform(name, value) {
        let uniform = this.uniforms[name];
        if (DEBUG && !uniform) throw 'no uniform with name ' + name + ' found!';
        //if (uniformValuesCache[name]===value) return;
        //this.gl.enableVertexAttribArray(uniform.location);
        uniform.setter(this.gl, uniform.location, value);
        //uniformValuesCache[name] = value;
    }

    bindBuffer(buffer, uniformLocationName) {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer.getGlBuffer());
        let uniformLocation = this.gl.getAttribLocation(this.program, uniformLocationName);

        if (DEBUG) {
            if (!uniformLocationName) throw "can not found uniform location: uniformLocationName not defined";
            if (uniformLocation < 0) throw "can not found uniform location for " + uniformLocationName;
        }

        this.gl.enableVertexAttribArray(uniformLocation);
        this.gl.vertexAttribPointer(
            uniformLocation,
            buffer.getItemSize(),
            buffer.getItemType(), // type of data
            false,  // if the content is normalized vectors
            0,      // number of bytes to skip in between elements
            0       // offsets to the first element
        );
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    }

}