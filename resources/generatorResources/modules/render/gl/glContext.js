
var mat4 = require('mat4');
var utils = require('utils');
var shaderSources = require('shaderSources');
var Shader = require('shader').Shader;
var VertexBuffer = require('vertexBuffer').VertexBuffer;
var Texture = require('texture').Texture;
var MatrixStack = require('matrixStack').MatrixStack;
var FrameBuffer = require('frameBuffer').FrameBuffer;
var bundle = require('bundle').instance();
var SCALE_STRATEGY = require('consts').SCALE_STRATEGY;

var GlContext = function(){

    var gl;
    var mScaleX = 1, mScaleY = 1;
    var shader;
    var posVertexBuffer;
    var texVertexBuffer;
    var matrixStack = new MatrixStack();
    var frameBuffer;
    this.colorBG = [0,0,0];

    this.init = function(canvas){

        gl = canvas.getContext("webgl",{ alpha: false });
        shader = new Shader(gl, shaderSources.SRC.TEXTURE_SHADER);
        shader.bind();

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

        frameBuffer = new FrameBuffer(gl,bundle.gameProps.canvasWidth,bundle.gameProps.canvasHeight);

        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);

    };


    var cache = {};

    this.loadTextureInfo = function(url,opts,callBack) {
        if (cache.url) {
            callBack(cache[url]);
            return;
        }
        if (opts.type=='base64') {
            url = utils.getBase64prefix('image',opts.fileName) + url;
        }

        var img = new Image();
        var texture = new Texture(gl,img);

        img.onload = function() {
            texture.apply(img);
            callBack(texture);
        };
        //<code><%if (opts.debug){%>img.onerror=function(e){throw 'can not load image with url '+ url};<%}%>
        img.src = url;
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
                bundle.gameProps.width,bundle.gameProps.height,1,1
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
        gl.viewport(0, 0, bundle.gameProps.width, bundle.gameProps.height);
        frameBuffer.bind();
    };

    this.flipFrameBuffer = function(){
        currTex = null;
        this.restore();
        this.save();
        this.translate(0,bundle.gameProps.canvasHeight);
        this.scale(1,-1);
        frameBuffer.unbind();
        this.clear();
        gl.viewport(0, 0, bundle.gameProps.canvasWidth,bundle.gameProps.canvasHeight);
        gl.bindTexture(gl.TEXTURE_2D, frameBuffer.getGlTexture());

        var gameProps = bundle.gameProps;
        if (gameProps.scaleStrategy==SCALE_STRATEGY.HARDWARE_PRESERVE_ASPECT_RATIO) {
            shader.setUniform('u_matrix',
                makePositionMatrix(
                    gameProps.globalScale.left,gameProps.globalScale.top,
                    bundle.gameProps.width, bundle.gameProps.height,
                    bundle.gameProps.canvasWidth,bundle.gameProps.canvasHeight,
                    mScaleX,mScaleY
                )
            );
        } else {
            shader.setUniform('u_matrix',
                makePositionMatrix(
                    0,0,
                    bundle.gameProps.width, bundle.gameProps.height,
                    bundle.gameProps.canvasWidth,bundle.gameProps.canvasHeight,
                    mScaleX,mScaleY
                )
            );
        }

        shader.setUniform('u_textureMatrix',
            makeTextureMatrix(
                0,0,bundle.gameProps.canvasWidth,bundle.gameProps.canvasHeight,
                bundle.gameProps.canvasWidth,bundle.gameProps.canvasHeight
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