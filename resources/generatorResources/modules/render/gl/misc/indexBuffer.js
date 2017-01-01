

var IndexBuffer = function(gl){
    var buffer = gl.createBuffer();
    var dataLength;

    this.setData = function(bufferData){
        dataLength = bufferData.length;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(bufferData), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    };

    this.getGlBuffer = function(){
        return buffer;
    };

    this.bindBuffer = function(){
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
    };

    this.getBufferLength = function(){
       return dataLength;
    };

    this.getGlBuffer = function(){
        return buffer;
    };

};

module.exports = IndexBuffer;