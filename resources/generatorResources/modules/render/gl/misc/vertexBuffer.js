
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

    this.bind = function(program, uniformLocationName){
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        var uniformLocation = gl.getAttribLocation(program, uniformLocationName);
        gl.enableVertexAttribArray(uniformLocation);
        gl.vertexAttribPointer(
            uniformLocation,
            bufferItemSize,
            bufferItemType,
            false,  // if the content is normalized vectors
            0,  // number of bytes to skip in between elements
            0   // offsets to the first element
        );
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