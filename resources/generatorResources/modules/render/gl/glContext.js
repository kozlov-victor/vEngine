var glUtils = require('glUtils');
var Shader = require('shader').Shader;
var shaderSources = require('shaderSources');
var VertexBuffer = require('vertexBuffer').VertexBuffer;
var FrameBuffer = require('frameBuffer').FrameBuffer;
var Texture = require('texture').Texture;
var mat4 = require('mat4');
var utils = require('utils');

var GlContext = function () {

    var gl;
    var mCanvas;
    var matrixStack = new mat4.MatrixStack();
    var simpleTextureShader;
    var vertexPositionBuffer;
    var vertexTextureBuffer;
    var frameBuffer;
    var vertexPositionData = [
        0, 0, 0,
        0, 1, 0,
        1, 0, 0,
        1, 0, 0,
        0, 1, 0,
        1, 1, 0
    ];
    var vertexTextureData = [
        0, 0,
        0, 1,
        1, 0,
        1, 0,
        0, 1,
        1, 1
    ];


    this.init = function (canvas) {

        mCanvas = canvas;
        gl = canvas.getContext("webgl", {alpha: false}) ||  canvas.getContext("experimental-webgl", {alpha: false});

        simpleTextureShader = new Shader(gl,shaderSources.SHADERS_SRC.DRAW_WITH_TEXTURE[0],shaderSources.SHADERS_SRC.DRAW_WITH_TEXTURE[1]);
        simpleTextureShader.bind();

        vertexPositionBuffer = new VertexBuffer(gl,simpleTextureShader);
        vertexPositionBuffer.bindBufferData(vertexPositionData,3,'a_position');

        vertexTextureBuffer = new VertexBuffer(gl,simpleTextureShader);
        vertexTextureBuffer.bindBufferData(vertexTextureData,2,'a_texcoord');

        frameBuffer = new FrameBuffer(gl,mCanvas.width,mCanvas.height);

        gl.disable(gl.CULL_FACE);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
        this.resize(mCanvas.width,mCanvas.height)

    };

    function createPositionMatrix(dstX, dstY, dstWidth, dstHeight) {
        // this matrix will convert from pixels to clip space
        var projectionMatrix = mat4.make2DProjection(mCanvas.width, mCanvas.height, 500);
        //var aspect = mCanvas.width / mCanvas.height;
        //var projectionMatrix = Mat4.makePerspective(1.047, aspect, 1, 2000);


        // this matrix will scale our 1 unit quad
        // from 1 unit to dstWidth, dstHeight units
        var scaleMatrix = mat4.makeScale(dstWidth, dstHeight, 1);

        // this matrix will translate our quad to dstX, dstY
        var translationMatrix = mat4.makeTranslation(dstX, dstY, 0);

        // multiply them all togehter
        var matrix = mat4.matrixMultiply(scaleMatrix, translationMatrix);
        matrix = mat4.matrixMultiply(matrix, matrixStack.getCurrentMatrix());
        matrix = mat4.matrixMultiply(matrix, projectionMatrix);
        matrix = mat4.matrixMultiply(matrix, mat4.makeZToWMatrix(0.05));

        return matrix;
    }

    function createTextureMatrix(srcX, srcY, srcWidth, srcHeight, texWidth, texHeight){
        // Because texture coordinates go from 0 to 1
        // and because our texture coordinates are already a unit quad
        // we can select an area of the texture by scaling the unit quad
        // down
        var texScaleMatrix = mat4.makeScale(srcWidth / texWidth , srcHeight / texHeight, 1);
        var texTranslationMatrix = mat4.makeTranslation(srcX / texWidth, srcY / texHeight, 0);

        // multiply them together
        return mat4.matrixMultiply(texScaleMatrix, texTranslationMatrix);
    }


    var cache = {};


    this.loadTextureInfo = function (url, opts, callBack) {

        if (cache.url) {
            callBack(cache[url]);
            return;
        }
        if (opts.type=='base64') {
            url = utils.getBase64prefix('image',opts.fileName) + url;
        }
        var img = new Image();
        var texture = new Texture(gl,img);

        img.addEventListener('load', function () {
            texture.setSize({
                width:img.width,
                height:img.height
            });
            cache[url] = texture;
            callBack(texture);
        });
        //<code><%if (opts.debug){%>img.onerror=function(e){throw 'can not load image with url '+ url};<%}%>
        img.src = url;
    };


    var currTex = null;

    this.drawImage = function (texture,
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


        simpleTextureShader.setUniform('u_matrix',createPositionMatrix(dstX, dstY, srcWidth, srcHeight));
        simpleTextureShader.setUniform('u_textureMatrix',createTextureMatrix(srcX, srcY, srcWidth, srcHeight, texWidth, texHeight));

        // draw the quad (2 triangles, 6 vertices)
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    this.clear = function () {
        //gl.colorMask(false, false, false, true);
        gl.clearColor(1, 1, 1, 1);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    };


    this.fillRect = function (x, y, w, h, color) {
        simpleTextureShader.setUniform('u_matrix',createPositionMatrix(x, y, w, h));
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    this.strokeRect = function (x, y, w, h, color) {
        this.fillRect(x, y, w, 1, color);
        this.fillRect(x, y + h, w, 1, color);
        this.fillRect(x, y, 1, h, color);
        this.fillRect(x + w, y, 1, h, color);
    };

    this.point = function (x, y, color) {
        this.fillRect(x, y, 1, 1, color);
    };

    this.line = function (x1, y1, x2, y2, color) {
        simpleTextureShader.setUniform('u_matrix',createPositionMatrix(x1, y1, x2 - x1, y2 - y1));
        gl.drawArrays(gl.LINES, 0, 6);
    };

    this.save = function() {
        matrixStack.save();
    };

    this.resize = function (w,h) {
        gl.viewport(0, 0, w,h);
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

    this.beginFrameBuffer = function(){
        this.save();
        frameBuffer.bind();
    };

    this.flipFrameBuffer = function(){
        this.restore();
        this.save();
        this.translate(0,mCanvas.height);
        this.scale(1,-1);
        frameBuffer.unbind();
        gl.bindTexture(gl.TEXTURE_2D, frameBuffer.getGlTexture());
        simpleTextureShader.setUniform('u_matrix',createPositionMatrix(0,0,mCanvas.width, mCanvas.height),1);
        simpleTextureShader.setUniform('u_textureMatrix',createTextureMatrix(0,0,mCanvas.width, mCanvas.height,mCanvas.width, mCanvas.height));
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        this.restore();
    };

    this.getGL = function(){
        return gl;
    }

};

var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new GlContext();
    return instance;
};
