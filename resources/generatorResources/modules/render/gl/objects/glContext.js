
var mat4 = require('mat4');
var utils = require('utils');
var ShaderProgram = require('shaderProgram').ShaderProgram;
var VertexBuffer = require('vertexBuffer').VertexBuffer;
var Texture = require('texture').Texture;
var MatrixStack = require('matrixStack').MatrixStack;
var FrameBuffer = require('frameBuffer').FrameBuffer;
var bundle = require('bundle');
var cache = require('resourceCache');
var SCALE_STRATEGY = require('consts').SCALE_STRATEGY;

var getCtx = function(el){
    if (!el) el = document.createElement('canvas');
    if (!el) return null;
    return el.getContext("webgl",{ alpha: false });
};

exports.GlContext = require('class').Class.extend(function(it){

    var gl;
    var mScaleX = 1, mScaleY = 1;
    var commonShaderPrg;
    var posVertexBuffer;
    var texVertexBuffer;
    var matrixStack = new MatrixStack();
    var frameBuffer;
    var gameProps;
    var colorBGDefault = [255,255,255];
    var scene = null;

    it.init = function(canvas){

        gameProps = bundle.gameProps;
        gl = getCtx(canvas);
        window.gl = gl;
        commonShaderPrg = new ShaderProgram(gl, [
            bundle.shaders.basic['vertex.vert'],
            bundle.shaders.basic['fragment.frag']
        ]);
        commonShaderPrg.bind();
        commonShaderPrg.setUniform('u_alpha',1);

        posVertexBuffer = new VertexBuffer(gl,commonShaderPrg.getProgram());
        posVertexBuffer.bind([
            0, 0,
            0, 1,
            1, 0,
            1, 0,
            0, 1,
            1, 1
        ],2,'a_position');

        texVertexBuffer = new VertexBuffer(gl,commonShaderPrg.getProgram());
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

    it.setScene = function(_scene){
        scene = _scene;
    };

    it.setAlpha = function(alpha) {
        commonShaderPrg.setUniform('u_alpha',alpha);
    };

    it.getError = function(){
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

    it.drawImage = function(
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

        // Set the texture matrix.
        commonShaderPrg.setUniform("u_textureMatrix",makeTextureMatrix(srcX,srcY,srcWidth,srcHeight,texWidth,texHeight));

        // Set the matrix.
        commonShaderPrg.setUniform("u_matrix",makePositionMatrix(
                dstX,dstY,srcWidth,srcHeight,
                gameProps.width,gameProps.height,1,1
            )
        );

        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendFunc(gl.ONE, gl.ONE);

        // draw the quad (2 triangles, 6 vertices)
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    it.clear = function() {
        //gl.colorMask(false, false, false, true);
        var col = scene.useBG?scene.colorBG:colorBGDefault;
        gl.clearColor(col[0]/255,col[1]/255,col[2]/255,1);
        gl.clear(gl.COLOR_BUFFER_BIT);
    };

    it.fillRect = function (x, y, w, h, color) {

        // Set the matrix.
        commonShaderPrg.setUniform("u_matrix",makePositionMatrix(
                x,y,w,h,
                gameProps.width,gameProps.height,1,1
            )
        );

        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendFunc(gl.ONE, gl.ONE);

        // draw the quad (2 triangles, 6 vertices)
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    //it.strokeRect = function (x, y, w, h, color) {
    //    this.fillRect(x, y, w, 1, color);
    //    this.fillRect(x, y + h, w, 1, color);
    //    this.fillRect(x, y, 1, h, color);
    //    this.fillRect(x + w, y, 1, h, color);
    //};
    //
    //it.point = function (x, y, color) {
    //    this.fillRect(x, y, 1, 1, color);
    //};

    it.save = function() {
        matrixStack.save();
    };

    it.scale = function(x,y) {
        matrixStack.scale(x,y);
    };

    it.rotateZ = function(angleInRadians) {
        matrixStack.rotateZ(angleInRadians);
    };

    it.rotateY = function(angleInRadians) {
        matrixStack.rotateY(angleInRadians);
    };

    it.translate = function(x,y){
        matrixStack.translate(x,y);
    };

    it.restore = function(){
        matrixStack.restore();
    };

    it.rescaleView = function(scaleX,scaleY){
        mScaleX = scaleX;
        mScaleY = scaleY;
    };

    it.beginFrameBuffer = function(){
        this.save();
        gl.viewport(0, 0, gameProps.width, gameProps.height);
        frameBuffer.bind();
    };

    it.flipFrameBuffer = function(){
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
            commonShaderPrg.setUniform('u_matrix',
                makePositionMatrix(
                    gameProps.globalScale.left,gameProps.globalScale.top,
                    gameProps.width, gameProps.height,
                    gameProps.canvasWidth,gameProps.canvasHeight,
                    mScaleX,mScaleY
                )
            );
        } else {
            commonShaderPrg.setUniform('u_matrix',
                makePositionMatrix(
                    0,0,
                    gameProps.width, gameProps.height,
                    gameProps.canvasWidth,gameProps.canvasHeight,
                    mScaleX,mScaleY
                )
            );
        }

        commonShaderPrg.setUniform('u_textureMatrix',
            makeTextureMatrix(
                0,0,gameProps.canvasWidth,gameProps.canvasHeight,
                gameProps.canvasWidth,gameProps.canvasHeight
            )
        );

        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        this.restore();
    };

},{
    isAcceptable: function(){
        return !!getCtx();
    },
    loadTextureInfo:function(url,opts,progress,callBack) {
        if (cache.has(url)) {
            callBack(cache.get(url));
            return;
        }

        var img = new Image();
        //<code><%if (opts.debug){%>img.onerror=function(e){throw 'can not load image with url '+ url};<%}%>
        var texture = new Texture(gl, img);

        if (opts.type == 'base64') {
            url = utils.getBase64prefix('image', opts.fileName) + url;
            img.src = url;
            texture.apply(img);
            callBack(texture);
            return;
        }

        utils.loadBinary(url, progress, function (buffer) {
            if (window.Blob && window.URL) {
                var blob = new Blob([buffer], {type: 'application/octet-binary'});
                img.src = URL.createObjectURL(blob);
            } else {
                var base64String = utils.arrayBufferToBase64(buffer);
                base64String = utils.getBase64prefix('image', opts.fileName) + base64String;
                img.src = base64String;
            }
            img.onload = function () {
                texture.apply(img);
                callBack(texture);
            };

        });
    }
});




