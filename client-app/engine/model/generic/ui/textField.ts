/*global DEBUG:true*/
import BaseModel from '../../baseModel'
import Font from "../font";
import Rect from "../../../core/geometry/rect";
import Point2d from "../../../core/geometry/point2d";

declare const DEBUG:boolean;

export default class TextField extends BaseModel {

    type ='TextField';
    _chars:Array<string> = null;
    text:string = '';
    font:Font = null;

    constructor(game){
        super(game);
    }


    revalidate(){
        if (DEBUG && !this.name) {
            console.error(this);
            throw `property 'name' not set at object of type ${this.type}`;
        }
        if (this.font===null)
            this.font = this.game.repository.getArray('Font')[0];
        if (DEBUG && !this.font) throw `at least one Font must be created`;
        this.setFont(this.font);
    }

    setText(text) {
        text+='';
        this._chars = [];
        this.text = text;
        let rows = [{width:0}];
        let currRowIndex = 0;
        this.height = this.font.fontContext.symbols[' '].height;
        for (let i=0,max=text.length;i<max;i++) {
            this._chars.push(text[i]);
            let currSymbolInFont = this.font.fontContext.symbols[text[i]] || this.font.fontContext.symbols[' '];
            if (text[i]==='\n') {
                currRowIndex++;
                this.height+=currSymbolInFont.height;
                rows[currRowIndex] = {width:0};
            } else {
                rows[currRowIndex].width+=currSymbolInFont.width;
            }
        }
        this.width = Math.max.apply(Math,rows.map(function(o){return o.width;}));
    }
    getText(){return this.text}
    setFont(font){
        this.font = font;
        this.setText(this.text);
    }
    update(time,delta){
        super.update(time,delta);
        this.render();
    }
    render(){
        let posX = 0;
        let posY = 0;
        this._chars.forEach(ch=>{
            let charInCtx = this.font.fontContext.symbols[ch]||this.font.fontContext.symbols['?'];
            if (ch==='\n') {
                posX = 0;
                posY+= charInCtx.height;
                return;
            }
            this.game.renderer.drawImage(
                this.font.resourcePath,
                new Rect(charInCtx.x,
                    charInCtx.y,
                    charInCtx.width,
                    charInCtx.height),
                this.pos.clone().addXY(posX,posY)
            );
            posX+=charInCtx.width;
        });

    }

}
