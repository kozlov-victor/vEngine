

const IndexBuffer = function(gl){
    let buffer = gl.createBuffer();
    let dataLength;

    this.setData = function(bufferData){
        //<code>{{#if opts.minify}}
        if (!bufferData) throw 'can not set data to buffer: bufferData not specified';
        //<code>{{/if}}
        dataLength = bufferData.length;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(bufferData), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    };

    this.getGlBuffer = function(){
        return buffer;
    };

    this.bind = function(){
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
    };

    this.unbind = function(){
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    };

    this.getBufferLength = function(){
       return dataLength;
    };

    this.getGlBuffer = function(){
        return buffer;
    };

};

module.exports = IndexBuffer;