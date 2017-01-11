
var VertexBuffer = function(gl){
    var buffer = gl.createBuffer();
    var bufferItemSize, bufferItemType;

    this.setData = function(bufferData, itemType, itemSize){
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bufferData), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        bufferItemSize = itemSize;
        bufferItemType = itemType;
    };

    this.getGlBuffer = function(){
        return buffer;
    };

    this.getGlBuffer = function(){
        return buffer;
    };

    this.getItemSize = function(){
        return bufferItemSize;
    };

    this.getItemType = function(){
        return bufferItemType;
    }

};

module.exports = VertexBuffer;