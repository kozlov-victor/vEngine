
const mat4 = require('mat4');
const utils = require('utils');
const ColorRectDrawer = require('colorRectDrawer');
const SpriteRectDrawer = require('spriteRectDrawer');
const PolyLineDrawer = require('polyLineDrawer');
const ModelDrawer = require('modelDrawer');
const Texture = require('texture');
const MatrixStack = require('matrixStack');
const FrameBuffer = require('frameBuffer');
const bundle = require('bundle');
const cache = require('resourceCache');
const SCALE_STRATEGY = require('consts').SCALE_STRATEGY;
const Class = require('class');


const getCtx = function(el){
    if (!el) el = document.createElement('canvas');
    if (!el) return null;
    return (
        el.getContext("webgl",{alpha: false}) ||
        el.getContext('experimental-webgl',{alpha: false}) ||
        el.getContext('webkit-3d',{alpha: false}) ||
        el.getContext('moz-webgl',{alpha: false})
    );
};

const GlContext = Class.extend(function(it){

    let gl;
    let mScaleX = 1, mScaleY = 1;
    let alpha = 1;
    let spriteRectDrawer, colorRectDrawer, polyLineDrawer, modelDrawer;
    let matrixStack = new MatrixStack();
    let frameBuffer;
    let gameProps;
    let colorBGDefault = [255,255,255];
    let scene = null;
    let SCENE_DEPTH = 1000;

    it.init = function(canvas){

        gameProps = bundle.gameProps;
        gl = getCtx(canvas);

        spriteRectDrawer = new SpriteRectDrawer(gl);
        colorRectDrawer = new ColorRectDrawer(gl);
        polyLineDrawer = new PolyLineDrawer(gl);
        modelDrawer = new ModelDrawer(gl);

        frameBuffer = new FrameBuffer(gl,gameProps.width,gameProps.height);

        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);

    };

    it.setScene = function(_scene){
        scene = _scene;
    };

    it.setAlpha = function(_alpha) {
        alpha = _alpha;
    };

    it.getError = function(){
        let err = gl.getError();
        //return 0;
        return err==gl.NO_ERROR?0:err;
    };

    const makePositionMatrix = function(dstX,dstY,dstWidth,dstHeight,viewWidth,viewHeight,scaleX,scaleY){

        let zToWMatrix = mat4.makeZToWMatrix(1);
        let projectionMatrix = mat4.ortho(0,viewWidth,0,viewHeight,-SCENE_DEPTH,SCENE_DEPTH);

        let scaleMatrix = mat4.makeScale(dstWidth*scaleX, dstHeight*scaleY, 1);
        let translationMatrix = mat4.makeTranslation(dstX*scaleX, dstY*scaleY, 0);

        let matrix = mat4.matrixMultiply(scaleMatrix, translationMatrix);
        matrix = mat4.matrixMultiply(matrix, matrixStack.getCurrentMatrix());
        matrix = mat4.matrixMultiply(matrix, projectionMatrix);
        matrix = mat4.matrixMultiply(matrix, zToWMatrix);
        return matrix;
    };

    const makeTextureMatrix = function(srcX,srcY,srcWidth,srcHeight,texWidth,texHeight){

        let texScaleMatrix = mat4.makeScale(srcWidth / texWidth, srcHeight / texHeight, 1);
        let texTranslationMatrix = mat4.makeTranslation(srcX / texWidth, srcY / texHeight, 0);

        return mat4.matrixMultiply(texScaleMatrix, texTranslationMatrix);
    };

    let currTex = null;

    it.drawImage = function(
        texture,
        srcX, srcY, srcWidth, srcHeight,
        dstX, dstY
    ) {

        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendColor(0, 0.5, 1, 1);

        let texWidth = texture.getSize().width;
        let texHeight = texture.getSize().height;

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



        spriteRectDrawer.bind();
        spriteRectDrawer.setUniform("u_textureMatrix",makeTextureMatrix(srcX,srcY,srcWidth,srcHeight,texWidth,texHeight));
        spriteRectDrawer.setUniform("u_matrix",makePositionMatrix(
                dstX,dstY,srcWidth,srcHeight,
                gameProps.width,gameProps.height,1,1
            )
        );
        spriteRectDrawer.setUniform('u_alpha',alpha);
        spriteRectDrawer.draw();
        spriteRectDrawer.unbind();
    };

    it.drawModel = function(model,texture){
        modelDrawer.bind(model);
        texture.bind();


        let matrix1 = matrixStack.getCurrentMatrix();

        let zToWMatrix = mat4.makeZToWMatrix(1);
        let projectionMatrix = mat4.ortho(0,gameProps.width,0,gameProps.height,-SCENE_DEPTH,SCENE_DEPTH);
        let matrix2 = mat4.matrixMultiply(projectionMatrix, zToWMatrix);

        modelDrawer.setUniform("u_modelMatrix",matrix1);
        modelDrawer.setUniform("u_projectionMatrix",matrix2);

        modelDrawer.setUniform('u_alpha',1);
        gl.enable(gl.DEPTH_TEST);
        modelDrawer.draw();
        modelDrawer.unbind();
    };

    it.lockRect = function(rect) {
        gl.enable(gl.SCISSOR_TEST);
        gl.scissor(
            rect.x,
            gameProps.height - rect.y - rect.height,
            rect.width,
            rect.height
        );
    };

    it.unlockRect = function(){
        gl.disable(gl.SCISSOR_TEST);
    };

    it.clear = function() {
        let col = scene.useBG?scene.colorBG:colorBGDefault;
        gl.clearColor(col[0]/255,col[1]/255,col[2]/255,1);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // todo  | gl.DEPTH_BUFFER_BIT
    };

    const fillRect = function (x, y, w, h, color) {

        colorRectDrawer.bind();
        colorRectDrawer.setUniform("u_matrix",makePositionMatrix(
                x,y,w,h,
                gameProps.width,gameProps.height,1,1
            )
        );
        colorRectDrawer.setUniform("u_rgba",color);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        colorRectDrawer.draw();
        colorRectDrawer.unbind();
    };

    it.fillRect = fillRect;

    it.strokeRect = function (x, y, w, h, color) {
        fillRect(x, y, w, 1, color);
        fillRect(x, y + h, w, 1, color);
        fillRect(x, y, 1, h, color);
        fillRect(x + w, y, 1, h, color);
    };

    it.point = function (x, y, color) {
        this.fillRect(x, y, 1, 1, color);
    };

    it.polyLine = function(vertexArr,color) {
        polyLineDrawer.bind(vertexArr);
        polyLineDrawer.setUniform("u_matrix",makePositionMatrix(
                0,0,1,1,
                gameProps.width,gameProps.height,1,1
            )
        );
        polyLineDrawer.setUniform("u_rgba",color);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        polyLineDrawer.draw();
        polyLineDrawer.unbind();
    };

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

    it.getNativeContext = function(){
        return gl;
    };

    it.flipFrameBuffer = function(){
        currTex = null;
        this.restore();
        this.save();
        this.translate(0,gameProps.canvasHeight);
        this.scale(1,-1);
        frameBuffer.unbind();
        gl.viewport(0, 0, gameProps.canvasWidth,gameProps.canvasHeight);
        frameBuffer.getTexture().bind();

        spriteRectDrawer.bind();

        if (gameProps.scaleStrategy==SCALE_STRATEGY.HARDWARE_PRESERVE_ASPECT_RATIO) {
            spriteRectDrawer.setUniform('u_matrix',
                makePositionMatrix(
                    gameProps.globalScale.left,gameProps.globalScale.top,
                    gameProps.width, gameProps.height,
                    gameProps.canvasWidth,gameProps.canvasHeight,
                    mScaleX,mScaleY
                )
            );
        } else {
            spriteRectDrawer.setUniform('u_matrix',
                makePositionMatrix(
                    0,0,
                    gameProps.width, gameProps.height,
                    gameProps.canvasWidth,gameProps.canvasHeight,
                    mScaleX,mScaleY
                )
            );
        }

        spriteRectDrawer.setUniform('u_textureMatrix',
            makeTextureMatrix(
                0,0,gameProps.canvasWidth,gameProps.canvasHeight,
                gameProps.canvasWidth,gameProps.canvasHeight
            )
        );
        spriteRectDrawer.setUniform('u_alpha',1);

        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        spriteRectDrawer.draw();
        this.restore();
    };

    let self = it;

},{
    isAcceptable: function(){
        return !!getCtx();
    },
    loadTextureInfo:function(url,opts,progress,callBack) {
        if (cache.has(url)) {
            callBack(cache.get(url));
            return;
        }

        let img = new Image();
        //<code>{{#if opts.minify}}
        img.onerror=function(e){throw 'can not load image with url '+ url};
        //<code>{{/if}}
        let gl = require('renderer').getContext().getNativeContext();
        let texture = new Texture(gl);

        if (opts.type == 'base64') {
            url = utils.getBase64prefix('image', opts.fileName) + url;
            img.src = url;
            texture.setImage(img);
            callBack(texture);
            return;
        }

        utils.loadBinary(url, progress, function (buffer) {
            if (window.Blob && window.URL) {
                let blob = new Blob([buffer], {type: 'application/octet-binary'});
                img.src = URL.createObjectURL(blob);
            } else {
                let base64String = utils.arrayBufferToBase64(buffer);
                base64String = utils.getBase64prefix('image', opts.fileName) + base64String;
                img.src = base64String;
            }
            img.onload = function () {
                texture.setImage(img);
                callBack(texture);
            };

        });
    }
});

module.exports = GlContext;




//canvas.addEventListener('webglcontextlost', function(e) {
//    // the default is to do nothing. Preventing the default
//    // means allowing context to be restored
//    e.preventDefault();
//    let div = document.createElement("div");
//    div.className = "contextlost";
//    div.innerHTML = '<div>Context Lost: Click To Reload</div>';
//    div.addEventListener('click', function() {
//        window.location.reload();
//    });
//    document.body.appendChild(div);
//});
//canvas.addEventListener('webglcontextrestored', function() {
//    // just reload the page. Easiest.
//    window.location.reload();
//});