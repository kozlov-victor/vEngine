
var glUtils = require('glUtils');

var GlContext = function(){

    var gl;
    var mCanvas;
    var mScaleX = 1, mScaleY = 1;
    var matrixLocation;
    var textureMatrixLocation;

    var vShader = [
            'attribute vec4 a_position; ',
            'attribute vec2 a_texcoord; ',

            'uniform mat4 u_matrix; ',
            'uniform mat4 u_textureMatrix; ',

            'varying vec2 v_texcoord; ',

            'void main() { ',
                'gl_Position = u_matrix * a_position; ',
                'v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy; ',
            '}'
        ].join('');


    var fShader =
            [
            'precision mediump float; ',

            'varying vec2 v_texcoord;',

            'uniform sampler2D texture;',

            'void main() { ',
            '    gl_FragColor = texture2D(texture, v_texcoord);',
            '} '
            ].join('');


    this.init = function(canvas){

        mCanvas = canvas;
        gl = canvas.getContext("webgl",{ alpha: false });
        var program = glUtils.createProgramFromSources(gl, [vShader, fShader]);
        gl.useProgram(program);

        // look up where the vertex data needs to go.
        var positionLocation = gl.getAttribLocation(program, "a_position");
        var texcoordLocation = gl.getAttribLocation(program, "a_texcoord");

        // lookup uniforms
        matrixLocation = gl.getUniformLocation(program, "u_matrix");
        textureMatrixLocation = gl.getUniformLocation(program, "u_textureMatrix");

        // Create a buffer.
        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);

        // Put a unit quad in the buffer
        var positions = [
            0, 0,
            0, 1,
            1, 0,
            1, 0,
            0, 1,
            1, 1
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        // Create a buffer for texture coords
        buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.enableVertexAttribArray(texcoordLocation);
        gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);

        // Put texcoords in the buffer
        var texcoords = [
            0, 0,
            0, 1,
            1, 0,
            1, 0,
            0, 1,
            1, 1
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);

    };



    this.loadTextureInfo = function(url,opts,callBack) {
        if (opts.type=='base64') {
            url = ve.utils.getBase64prefix('image',opts.fileName) + url;
        }
        var tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, tex);
        // Fill the texture with a 1x1 blue pixel.
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
            new Uint8Array([0, 0, 255, 255]));

        // let's assume all images are not a power of 2
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

        var textureInfo = {
            width: 1,   // we don't know the size until it loads
            height: 1,
            texture: tex
        };
        var img = new Image();
        img.onload = function() {
            textureInfo.width = img.width;
            textureInfo.height = img.height;

            gl.bindTexture(gl.TEXTURE_2D, textureInfo.texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
            callBack(textureInfo);
        };
        //<code><%if (opts.debug){%>img.onerror=function(e){throw 'can not load image with url '+ url};<%}%>
        img.src = url;
        document.body.appendChild(img);
    };

    this.drawImage = function(
        textureInfo,
        srcX, srcY, srcWidth, srcHeight,
        dstX, dstY, dstWidth, dstHeight) {

        var tex = textureInfo.texture;
        var texWidth = textureInfo.width;
        var texHeight = textureInfo.height;


        if (dstX === undefined) {
            dstX = srcX;
        }
        if (dstY === undefined) {
            dstY = srcY;
        }
        if (srcWidth === undefined) {
            srcWidth = texWidth;
        }
        if (srcHeight === undefined) {
            srcHeight = texHeight;
        }
        if (dstWidth === undefined) {
            dstWidth = srcWidth;
        }
        if (dstHeight === undefined) {
            dstHeight = srcHeight;
        }

        gl.bindTexture(gl.TEXTURE_2D, tex);

        // this matirx will convert from pixels to clip space
        var projectionMatrix = glUtils.make2DProjection(mCanvas.width, mCanvas.height, 1);

        // this matrix will scale our 1 unit quad
        // from 1 unit to dstWidth, dstHeight units
        var scaleMatrix = glUtils.makeScale(dstWidth*mScaleX, dstHeight*mScaleY, 1);

        // this matrix will translate our quad to dstX, dstY
        var translationMatrix = glUtils.makeTranslation(dstX*mScaleX, dstY*mScaleY, 0);

        // multiply them all togehter
        var matrix = glUtils.matrixMultiply(scaleMatrix, translationMatrix);
        matrix = glUtils.matrixMultiply(matrix, projectionMatrix);

        // Set the matrix.
        gl.uniformMatrix4fv(matrixLocation, false, matrix);

        // Because texture coordinates go from 0 to 1
        // and because our texture coordinates are already a unit quad
        // we can select an area of the texture by scaling the unit quad
        // down
        var texScaleMatrix = glUtils.makeScale(srcWidth / texWidth, srcHeight / texHeight, 1);
        var texTranslationMatrix = glUtils.makeTranslation(srcX / texWidth, srcY / texHeight, 0);

        // multiply them together
        var texMatrix = glUtils.matrixMultiply(texScaleMatrix, texTranslationMatrix);

        // Set the texture matrix.
        gl.uniformMatrix4fv(textureMatrixLocation, false, texMatrix);

        // draw the quad (2 triangles, 6 vertices)
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    this.clear = function() {
        //gl.colorMask(false, false, false, true);
        gl.clearColor(1, 1, 1, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
    };

    this.scale = function(scaleX,scaleY){
        mScaleX = scaleX;
        mScaleY = scaleY;
        gl.viewport(0, 0, mCanvas.width, mCanvas.height);
    };

};

var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new GlContext();
    return instance;
};