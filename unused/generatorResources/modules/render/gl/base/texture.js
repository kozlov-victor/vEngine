
const isPowerOf2 = function(value) {
    return (value & (value - 1)) == 0;
};

const Texture = function(gl){

    let tex;
    let size;

    this.isPowerOfTwo = false;

    /**
     * @param img - if image is null, width and height must be specified
     * @param width -unused if image specified
     * @param height -unused if image specified
     */
    this.setImage = function(img,width,height){
        //<code>{{#if opts.minify}}
        if (!(img || width || height)) throw "texture.setImage: if image is null, width and height must be specified: tex.setImage(null,w,h)";
        //<code>{{/if}}

        if (img) size = {width:img.width,height:img.height};
        this.bind();
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        if (img) {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        } else {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }
        this.isPowerOfTwo = img && isPowerOf2(img.width) && isPowerOf2(img.height);
        // Check if the image is a power of 2 in both dimensions.
        if (this.isPowerOfTwo) {
            gl.generateMipmap(gl.TEXTURE_2D);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        } else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        }
        gl.bindTexture(gl.TEXTURE_2D, null);

    };

    this.bind = function(i) {
        //gl.activeTexture(gl.TEXTURE0+i);
        gl.bindTexture(gl.TEXTURE_2D, tex);
        // gl.uniform1i(uName, i);
    };

    this.unbind = function(i) {
        gl.bindTexture(gl.TEXTURE_2D, null);
    };

    this.getSize = function(){
        return size;
    };

    this.getGlTexture = function(){
        return tex;
    };

    (function(){
        //<code>{{#if opts.minify}}
        if (!gl) throw "can not create texture, gl context not passed to constructor, expected: Texture(gl)";
        //<code>{{/if}}
        tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, tex);
        // Fill the texture with a 1x1 blue pixel.
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
            new Uint8Array([0, 0, 255, 255]));
        gl.bindTexture(gl.TEXTURE_2D, tex);
    })();

};


module.exports = Texture;
