/*global DEBUG:true*/
declare const DEBUG:boolean;

export const compileShader = (gl, shaderSource, shaderType)=> {
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
            console.log(shaderSource);
            throw `Error compiling shader: ${lastError}`;
        } else {
            throw lastError;
        }

    }

    return shader;
};


export const createProgram = (gl, vertexShader,fragmentShader)=> {
    let program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    // Check the link status
    let linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        // something went wrong with the link
        gl.deleteProgram(program);
        let lastError = gl.getProgramInfoLog(program);
        if (DEBUG) {
            let status = gl.getProgramParameter( program, gl.VALIDATE_STATUS);
            console.error('VALIDATE_STATUS',status);
            throw `Error in program linking ${lastError}`;
        } else {
            throw lastError;
        }

    }
    return program;
};

let GL_TABLE = null;

export const GL_TYPE = {
    FLOAT:      'float',
    FLOAT_VEC2: 'vec2',
    FLOAT_VEC3: 'vec3',
    FLOAT_VEC4: 'vec4',

    INT:        'int',
    INT_VEC2: 'ivec2',
    INT_VEC3: 'ivec3',
    INT_VEC4: 'ivec4',

    BOOL:       'bool',
    BOOL_VEC2: 'bvec2',
    BOOL_VEC3: 'bvec3',
    BOOL_VEC4: 'bvec4',

    FLOAT_MAT2: 'mat2',
    FLOAT_MAT3: 'mat3',
    FLOAT_MAT4: 'mat4',

    SAMPLER_2D: 'sampler2D'
};

const mapType = (gl, type)=> {

    if (!GL_TABLE) {
        let typeNames = Object.keys(GL_TYPE);

        GL_TABLE = {};

        for (let i = 0; i < typeNames.length; ++i) {
            let tn = typeNames[i];
            GL_TABLE[gl[tn]] = GL_TYPE[tn];
        }
    }

    return GL_TABLE[type];
};

export const extractUniforms = (gl, program)=> {
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


const TypeNumber = {
    check: (val)=>{
        if (isNaN(val))
            throw `can not set uniform with value ${val}: expected argument of type number`;
    }
};

const TypeInt = {
    check: (val)=>{
        TypeNumber.check(val);
        if (val!==~~val)
            throw `can not set uniform with value ${val}: expected argument of integer type, but ${val} found`;
    }
};

const TypeArray = (ElType,size?)=>{
    return {
        check: (val)=>{
            if (!val.splice)
                throw `can not set uniform with value ${val}: expected argument of type Array`;
            if (size!==undefined && val.length!==size)
                throw `can not set uniform with value ${val}: expected array with size ${size}, but ${val.length} found`;
            for (let i=0;i<val.length;i++) {
                try {
                    ElType.check(val[i]);
                } catch (e){
                    throw `can not set uniform with value ${val}: unexpected array element type: ${val[i]}`;
                }
            }
        }
    }
};

const expect = (value,typeChecker)=>{
    typeChecker.check(value);
};

export const getUniformSetter = function(size,type){
    if (size===1) {
        switch (type) {
            case 'float': return (gl,location,value)=> {
                DEBUG && expect(value,TypeNumber);
                gl.uniform1f(location, value);
            };
            case 'vec2':  return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeNumber,2));
                gl.uniform2f(location, value[0], value[1]);
            };
            case 'vec3':  return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeNumber,3));
                gl.uniform3f(location, value[0], value[1], value[2]);
            };
            case 'vec4':  return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeNumber,4));
                gl.uniform4f(location, value[0], value[1], value[2], value[3]);
            };
            case 'int':   return (gl,location,value)=> {
                DEBUG && expect(value,TypeInt);
                gl.uniform1i(location, value);
            };
            case 'ivec2': return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeInt,2));
                gl.uniform2i(location, value[0], value[1]);
            };
            case 'ivec3': return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeInt,3));
                gl.uniform3i(location, value[0], value[1], value[2]);
            };
            case 'ivec4': return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeInt,4));
                gl.uniform4i(location, value[0], value[1], value[2], value[3]);
            };
            case 'bool':  return (gl,location,value)=> {
                DEBUG && expect(value,TypeInt);
                gl.uniform1i(location, value);
            };
            case 'bvec2': return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeInt,2));
                gl.uniform2i(location, value[0], value[1]);
            };
            case 'bvec3': return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeInt,3));
                gl.uniform3i(location, value[0], value[1], value[2]);
            };
            case 'bvec4': return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeInt,4));
                gl.uniform4i(location, value[0], value[1], value[2], value[3]);
            };
            case 'mat2':  return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeNumber,2*2));
                gl.uniformMatrix2fv(location, false, value); // location, transpose (Must be false), value
            };
            case 'mat3':  return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeNumber,3*3));
                gl.uniformMatrix3fv(location, false, value);
            };
            case 'mat4':  return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeNumber,4*4));
                gl.uniformMatrix4fv(location, false, value);
            };
            case 'sampler2D':return (gl,location,value)=> {
                DEBUG && expect(value,TypeInt);
                gl.uniform1i(location, value);
            };
        }
    } else {
        switch (type) { // ie uniform vec2 u_someVec2[3]
            case 'float': return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeNumber));
                gl.uniform1fv(location, value);
            };
            case 'vec2':  return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeNumber));
                gl.uniform2fv(location, value);
            };
            case 'vec3':  return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeNumber));
                gl.uniform3fv(location, value);
            };
            case 'vec4':  return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeNumber));
                gl.uniform4fv(location, value);
            };
            case 'int':   return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeInt));
                gl.uniform1iv(location, value);
            };
            case 'ivec2': return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeInt));
                gl.uniform2iv(location, value);
            };
            case 'ivec3': return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeInt));
                gl.uniform3iv(location, value);
            };
            case 'ivec4': return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeInt));
                gl.uniform4iv(location, value);
            };
            case 'bool':  return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeInt));
                gl.uniform1iv(location, value);
            };
            case 'bvec2': return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeInt));
                gl.uniform2iv(location, value);
            };
            case 'bvec3': return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeInt));
                gl.uniform3iv(location, value);
            };
            case 'bvec4': return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeInt));
                gl.uniform4iv(location, value);
            };
            case 'sampler2D':return (gl,location,value)=> {
                DEBUG && expect(value,TypeArray(TypeInt));
                gl.uniform1iv(location, value);
            };
        }
    }
};
