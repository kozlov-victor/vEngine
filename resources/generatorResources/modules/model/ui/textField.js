
var renderer = require('renderer',{ignoreFail:true}).instance();
var BaseGameObject = require('baseGameObject').BaseGameObject;
var SpriteSheet = require('spriteSheet').SpriteSheet;
var bundle = require('bundle').instance();

exports.TextField = BaseGameObject.extend({
    type:'userInterface',
    subType:'textField',
    _chars:null,
    text:'',
    _font:null,
    fontId:null,
    rigid:false,
    setText: function(text) {
        text+='';
        this._chars = [];
        this.text = text;
        var rows = [{width:0}];
        var currRowIndex = 0;
        this.height = this._font.fontContext.symbols[' '].height;
        for (var i=0,max=text.length;i<max;i++) {
            this._chars.push(text[i]);
            var currSymbolInFont = this._font.fontContext.symbols[text[i]] || this._font.fontContext.symbols[' '];
            if (text[i]=='\n') {
                currRowIndex++;
                this.height+=currSymbolInFont.height;
                rows[currRowIndex] = {width:0};
            } else {
                rows[currRowIndex].width+=currSymbolInFont.width;
            }
        }
        this.width = Math.max.apply(Math,rows.map(function(o){return o.width;}));
    },
    setFont: function(font){
        this._font = font;
        this.height = this._font.fontContext.symbols[' '].height;
        this._spriteSheet = new SpriteSheet({resourcePath:this._font.resourcePath});
        this.setText(this.text);
    },
    clone:function(){
        return this._super();
    },
    construct: function(){
        var self = this;
        self._super();
        self.rigid = false;
        var font =
            bundle.fontList.find({id:this.fontId}) ||
            bundle.fontList.find({name:'default'});
        self.setFont(font);
    },
    update: function(){
        this._render();
    },
    _render: function(){
        var self = this;
        var ctx = renderer.getContext();
        this._super();
        ctx.translate(-this.pos.x, -this.pos.y);
        var posX = self.pos.x;
        var oldPosX = self.pos.x;
        var posY = this.pos.y;
        this._chars.forEach(function(ch){
            var charInCtx = self._font.fontContext.symbols[ch]||self._font.fontContext.symbols['?'];
            if (ch=='\n') {
                posX = oldPosX;
                posY+= charInCtx.height;
                return;
            }
            renderer.getContext().drawImage(
                self._spriteSheet._textureInfo,
                charInCtx.x,
                charInCtx.y,
                charInCtx.width,
                charInCtx.height,
                posX,
                posY,
                charInCtx.width,
                charInCtx.height
            );
            posX+=charInCtx.width;
        });
        ctx.restore();
    }
});