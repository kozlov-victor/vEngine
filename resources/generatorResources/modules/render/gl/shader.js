module.exports.Shader = function(gl,vShader, fShader){

    var glUtils = require('glUtils');

    var program;
    var uniforms;

    (function(){
        if (!(vShader && fShader)) throw 'can not create GlShader: vertex and fragment shader source must be specified!';
        program = glUtils.createProgram(gl, vShader, fShader);
        if (!program) throw 'can not create webgl program';
        uniforms = glUtils.extractUniforms(gl,program);
    })();

    this.bind = function(){
        gl.useProgram(program);
    };

    this.setUniform = function(name,value){
        var uniform = uniforms[name];
        if (!uniform) throw 'no uniform with name '+ name + ' found!';
        var setter = glUtils.getUniformSetter(uniform);
        setter(gl,uniform.location,value);
    };

    this.getProgram = function(){
        return program;
    };


};