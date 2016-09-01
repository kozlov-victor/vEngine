var mat4 = require('mat4');

function compileShader(gl, shaderSource, shaderType) {
    // Create the shader object
    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);

    // Check the compile status
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}


module.exports.createProgram = function (gl, vShaderSource, fShaderSource) {
    var program = gl.createProgram();
    var vShader = compileShader(gl, vShaderSource, gl.VERTEX_SHADER);
    var fShader = compileShader(gl, fShaderSource, gl.FRAGMENT_SHADER);
    if (!(vShader && fShader)) {
        console.error('Could not compile shader');
        return null;
    }
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);

    // Check the linking status
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Could not initialize shader');
        console.error('gl.VALIDATE_STATUS', gl.getProgramParameter(program, gl.VALIDATE_STATUS));
        console.error('gl.getError()', gl.getError());
        // if there is a program info log, log it
        if (gl.getProgramInfoLog(program) !== '') {
            console.warn('Warning: gl.getProgramInfoLog()', gl.getProgramInfoLog(program));
        }

        gl.deleteProgram(program);
        program = null;
        return null;
    }
    return program;
};


module.exports.extractUniforms = function (gl, program) {
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
            location: gl.getUniformLocation(program, name)
            //value:defaultValue(type, uniformData.size)
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


module.exports.getUniformSetter = function(uniform){
    if (uniform.size==1) {
        switch (uniform.type) {
            case 'float':       return function(gl,location,value) {gl.uniform1f(location, value)};
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
        switch (uniform.type) {
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



module.exports.MatrixStack = function () {
    var self = this;
    this.stack = [];

    this.restore = function () {
        this.stack.pop();
        // Never let the stack be totally empty
        if (this.stack.length < 1) {
            this.stack[0] = mat4.makeIdentity();
        }
    };

    this.save = function () {
        this.stack.push(this.getCurrentMatrix());
    };

    this.getCurrentMatrix = function () {
        return this.stack[this.stack.length - 1].slice();
    };

    this.setCurrentMatrix = function (m) {
        return this.stack[this.stack.length - 1] = m;
    };

    this.translate = function (x, y, z) {
        if (z === undefined) {
            z = 0;
        }
        var t = mat4.makeTranslation(x, y, z);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
    };

    this.rotateZ = function (angleInRadians) {
        var t = mat4.makeZRotation(angleInRadians);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
    };

    this.rotateY = function (angleInRadians) {
        var t = mat4.makeYRotation(angleInRadians);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
    };

    this.scale = function (x, y, z) {
        if (z === undefined) {
            z = 1;
        }
        var t = mat4.makeScale(x, y, z);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
    };

    (function () {
        self.restore();
    })();

};
