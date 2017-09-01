
var VertexBuffer = function(gl){
    var buffer = gl.createBuffer();
    var bufferItemSize, bufferItemType;
    var dataLength;

    this.setData = function(bufferData, itemType, itemSize){
        //<code>{{#if opts.minify}}
        if (!bufferData) throw 'can not set data to buffer: bufferData not specified';
        if (!itemType) throw 'can not set data to buffer: itemType not specified';
        if (!itemSize) throw 'can not set data to buffer: itemSize not specified';
        //<code>{{/if}}
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bufferData), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        bufferItemSize = itemSize;
        bufferItemType = itemType;
        dataLength = bufferData.length;
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
    };

    this.getBufferLength = function(){
        return dataLength;
    };

};

module.exports = VertexBuffer;