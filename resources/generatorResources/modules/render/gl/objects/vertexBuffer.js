
var VertexBuffer = function(gl,program){
    var buffer = gl.createBuffer();

    this.bind = function(bufferData, itemSize, uniformLocationName){
        var uniformLocation = gl.getAttribLocation(program, uniformLocationName); // todo cache locations
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.enableVertexAttribArray(uniformLocation);
        gl.vertexAttribPointer(
            uniformLocation,
            itemSize,
            gl.FLOAT,
            false,  // if the content is normalized vectors
            0,  // number of bytes to skip in between elements
            0
        ); // offsets to the first element
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bufferData), gl.STATIC_DRAW);
    };
};

module.exports = VertexBuffer;