

window.app

    .factory('utils',function(editData, $http, uiHelper){

        this.recalcGameObjectSize = function(gameObject){
            var spriteSheet = editData.spriteSheetList.getIf({id:gameObject.spriteSheetId});
            if (!spriteSheet) return;
            spriteSheet.calcFrameSize();
            gameObject.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
            gameObject.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
            gameObject._spriteSheet = spriteSheet;
        };
        this.getGameObjectCss = function(gameObj){
            if (!gameObj) return {};
            return {
                'width':                 gameObj.width+'px',
                'height':                gameObj.height+'px',
                'background-image':      gameObj._spriteSheet && 'url('+gameObj._spriteSheet.resourcePath+')',
                'background-position-y': -gameObj._sprPosY+'px',
                'background-position-x': -gameObj._sprPosX+'px',
                'background-repeat':     'no-repeat'
            }
        };
        this.merge = function(a,b){
            var res = Object.create(a);
            Object.keys(b).forEach(function(key){
                res[key] = b[key];
            });
            return res;
        };

        this.getArray = function(num) {
            if (!num) return [];
            var res = [];
            for (var i=0;i<num;i++) {
                res.push(i);
            }
            return res;
        };

        window.addEventListener('message',function(e){
            console.log('accepted message',e);
        });

        return this;
    })








;
