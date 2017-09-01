
export default class AbstractRenderer {

    constructor(game){
        this.game = game;
        this.renderableCache = {};
        this.container = null;
    }

    onResize(){
        let canvasRatio = this.container.height / this.container.width;
        let windowRatio = window.innerHeight / window.innerWidth;
        let width;
        let height;

        if (windowRatio < canvasRatio) {
            height = window.innerHeight;
            width = height / canvasRatio;
        } else {
            width = window.innerWidth;
            height = width * canvasRatio;
        }
        this.game.scale.x = width / this.game.width ;
        this.game.scale.y = height / this.game.height ;
        this.game.pos.x = (window.innerWidth - width) / 2;
        this.game.pos.y = (window.innerHeight - height) / 2;

        this.container.style.width = width + 'px';
        this.container.style.height = height + 'px';

    };

    registerResize(){
        this.onResize();
        window.addEventListener('resize',()=>{this.onResize()});
    }

    loadTextureInfo(textureId,info){}

    getTextureInfo(textureId){}
}