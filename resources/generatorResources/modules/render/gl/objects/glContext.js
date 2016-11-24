
var mat4 = require('mat4');
var utils = require('utils');
var Shader = require('shader').Shader;
var VertexBuffer = require('vertexBuffer').VertexBuffer;
var Texture = require('texture').Texture;
var MatrixStack = require('matrixStack').MatrixStack;
var FrameBuffer = require('frameBuffer').FrameBuffer;
var bundle = require('bundle').instance();
var cache = require('resourceCache');
var SCALE_STRATEGY = require('consts').SCALE_STRATEGY;

var GlContext = function(){

    var gl;
    var mScaleX = 1, mScaleY = 1;
    var shader;
    var posVertexBuffer;
    var texVertexBuffer;
    var matrixStack = new MatrixStack();
    var frameBuffer;
    var gameProps;
    this.DEFAULT_COLOR_BG = [255,255,255];
    this.colorBG = this.DEFAULT_COLOR_BG;

    this.init = function(canvas){

        gameProps = bundle.gameProps;
        gl = canvas.getContext("webgl",{ alpha: false });
        window.gl = gl;
        shader = new Shader(gl, [
            bundle.shaders.basic['vertex.vert'],
            bundle.shaders.basic['fragment.frag']
        ]);
        shader.bind();
        shader.setUniform('u_alpha',1);

        posVertexBuffer = new VertexBuffer(gl,shader.getProgram());
        posVertexBuffer.bind([
            0, 0,
            0, 1,
            1, 0,
            1, 0,
            0, 1,
            1, 1
        ],2,'a_position');

        texVertexBuffer = new VertexBuffer(gl,shader.getProgram());
        posVertexBuffer.bind([
            0, 0,
            0, 1,
            1, 0,
            1, 0,
            0, 1,
            1, 1
        ],2,'a_texcoord');

        frameBuffer = new FrameBuffer(gl,gameProps.canvasWidth,gameProps.canvasHeight);

        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);

    };


    this.setAlpha = function(alpha) {
        shader.setUniform('u_alpha',alpha);
    };

    var arrayBufferToBase64 = function(buffer) {
        var bytes = new Uint8Array(buffer);
        var rawArr = [];
        for (var i=0;i<bytes.length;i++){
            var b = bytes[i];
            rawArr.push(b);
        }
        return require('base64').fromByteArray(rawArr);
    };

    this.loadTextureInfo = function(url,opts,progress,callBack) {
        if (cache.has(url)) {
            callBack(cache.get(url));
            return;
        }

        var img = new Image();
        var texture = new Texture(gl,img);

        if (opts.type=='base64') {
            url = utils.getBase64prefix('image',opts.fileName) + url;
            img.src = url;
            texture.apply(img);
            callBack(texture);
            return;
        }

        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';

        request.setRequestHeader('Accept-Ranges', 'bytes');
        request.setRequestHeader('Content-Range', 'bytes');
        request.onload = function() {
            var base64String = arrayBufferToBase64(request.response);
            base64String = utils.getBase64prefix('image',opts.fileName) + base64String;
            img.onload = function(){
                texture.apply(img);
                callBack(texture);
            };
            img.src = base64String;

        };
        request.onprogress = function(e){
            progress(url,e.loaded/ e.total);
        };
        //<code><%if (opts.debug){%>request.onerror=function(e){throw 'can not load image with url '+url};<%}%>
        request.send();
    };

    this.getError = function(){
        return 0;
        var err = gl.getError();
        return err==gl.NO_ERROR?0:err;
    };

    var makePositionMatrix = function(dstX,dstY,dstWidth,dstHeight,viewWidth,viewHeight,scaleX,scaleY){
        // this matirx will convert from pixels to clip space
        var projectionMatrix = mat4.make2DProjection(viewWidth,viewHeight, 1);

        // this matrix will scale our 1 unit quad
        // from 1 unit to dstWidth, dstHeight units
        var scaleMatrix = mat4.makeScale(dstWidth*scaleX, dstHeight*scaleY, 1);

        // this matrix will translate our quad to dstX, dstY
        var translationMatrix = mat4.makeTranslation(dstX*scaleX, dstY*scaleY, 0);

        // multiply them all togehter
        var matrix = mat4.matrixMultiply(scaleMatrix, translationMatrix);
        matrix = mat4.matrixMultiply(matrix, matrixStack.getCurrentMatrix());
        matrix = mat4.matrixMultiply(matrix, projectionMatrix);
        return matrix;
    };

    var makeTextureMatrix = function(srcX,srcY,srcWidth,srcHeight,texWidth,texHeight){
        // Because texture coordinates go from 0 to 1
        // and because our texture coordinates are already a unit quad
        // we can select an area of the texture by scaling the unit quad
        // down
        var texScaleMatrix = mat4.makeScale(srcWidth / texWidth, srcHeight / texHeight, 1);
        var texTranslationMatrix = mat4.makeTranslation(srcX / texWidth, srcY / texHeight, 0);

        // multiply them together
        return mat4.matrixMultiply(texScaleMatrix, texTranslationMatrix);
    };
    
    var currTex = null;

    this.drawImage = function(
        texture,
        srcX, srcY, srcWidth, srcHeight,
        dstX, dstY) {

        var texWidth = texture.getSize().width;
        var texHeight = texture.getSize().height;


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

        if (currTex!=texture){
            texture.bind();
            currTex = texture;
        }


        // Set the matrix.
        //console.log(gameProps);
        shader.setUniform("u_matrix",makePositionMatrix(
                dstX,dstY,srcWidth,srcHeight,
                gameProps.width,gameProps.height,1,1
            )
        );

        // Set the texture matrix.
        shader.setUniform("u_textureMatrix",makeTextureMatrix(srcX,srcY,srcWidth,srcHeight,texWidth,texHeight));

        if (texWidth==64) {
            //gl.blendFunc(gl.ONE, gl.ONE);
        } else {
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        }

        // draw the quad (2 triangles, 6 vertices)
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    this.clear = function() {
        //gl.colorMask(false, false, false, true);
        gl.clearColor(this.colorBG[0]/255,this.colorBG[1]/255,this.colorBG[2]/255,1);
        gl.clear(gl.COLOR_BUFFER_BIT);
    };

    this.save = function() {
        matrixStack.save();
    };

    this.scale = function(x,y) {
        matrixStack.scale(x,y);
    };

    this.rotateZ = function(angleInRadians) {
        matrixStack.rotateZ(angleInRadians);
    };

    this.rotateY = function(angleInRadians) {
        matrixStack.rotateY(angleInRadians);
    };

    this.translate = function(x,y){
        matrixStack.translate(x,y);
    };

    this.restore = function(){
        matrixStack.restore();
    };

    this.rescaleView = function(scaleX,scaleY){
        mScaleX = scaleX;
        mScaleY = scaleY;
    };

    this.beginFrameBuffer = function(){
        this.save();
        gl.viewport(0, 0, gameProps.width, gameProps.height);
        frameBuffer.bind();
    };

    this.flipFrameBuffer = function(){
        currTex = null;
        this.restore();
        this.save();
        this.translate(0,gameProps.canvasHeight);
        this.scale(1,-1);
        frameBuffer.unbind();
        this.clear();
        gl.viewport(0, 0, gameProps.canvasWidth,gameProps.canvasHeight);
        gl.bindTexture(gl.TEXTURE_2D, frameBuffer.getGlTexture());

        if (gameProps.scaleStrategy==SCALE_STRATEGY.HARDWARE_PRESERVE_ASPECT_RATIO) {
            shader.setUniform('u_matrix',
                makePositionMatrix(
                    gameProps.globalScale.left,gameProps.globalScale.top,
                    gameProps.width, gameProps.height,
                    gameProps.canvasWidth,gameProps.canvasHeight,
                    mScaleX,mScaleY
                )
            );
        } else {
            shader.setUniform('u_matrix',
                makePositionMatrix(
                    0,0,
                    gameProps.width, gameProps.height,
                    gameProps.canvasWidth,gameProps.canvasHeight,
                    mScaleX,mScaleY
                )
            );
        }

        shader.setUniform('u_textureMatrix',
            makeTextureMatrix(
                0,0,gameProps.canvasWidth,gameProps.canvasHeight,
                gameProps.canvasWidth,gameProps.canvasHeight
            )
        );

        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        this.restore();
    };




};

var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new GlContext();
    return instance;
};