

window.app

    .factory('utils',function(editData, $http, uiHelper){

        this.recalcGameObjectSize = function(gameObject){
            var spriteSheet = editData.spriteSheetList.find({id: gameObject.spriteSheetId});
            if (!spriteSheet) return;
            spriteSheet.calcFrameSize();
            gameObject.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
            gameObject.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
            gameObject._spriteSheet = spriteSheet;
        };
        this.getGameObjectCss = function(gameObj){
            if (!gameObj) return {};
            return {
                width:                 gameObj.width+'px',
                height:                gameObj.height+'px',
                // todo project name!
                backgroundImage:      gameObj._spriteSheet && 'url('+'project/'+gameObj._spriteSheet.resourcePath+')',
                backgroundPositionY: -gameObj._sprPosY+'px',
                backgroundPositionX: -gameObj._sprPosX+'px',
                backgroundRepeat:     'no-repeat'
            }
        };
        this.merge = function(a,b){
            var res = Object.create(a);
            Object.keys(b).forEach(function(key){
                res[key] = b[key];
            });
            return res;
        };

        this.size = function(obj) {
            return Object.keys(obj).length;
        };

        this.getArray = function(num) {
            if (!num) return [];
            var res = [];
            for (var i=0;i<num;i++) {
                res.push(i);
            }
            return res;
        };

        this.toArray = function(str){
            var res = [];
            for (var i= 0,max=str.length;i<max;i++) {
                res.push({char:str[i]});
            }
            return res;
        };

        this.removeFromArray = function(arr,filter) {
            var indexOf = function(arr,filter){
                var i = 0;
                var success = false;
                arr.some(function(item){
                    var isCandidate = true;
                    Object.keys(filter).some(function(conditionKey){
                        if (filter[conditionKey]!=item[conditionKey]) {
                            isCandidate = false;
                            return true;
                        }
                    });
                    if (isCandidate) {
                        success = true;
                        return true;
                    }
                    i++;
                });
                return success?i:-1;
            };
            var index = indexOf(arr,filter);
            if (index>-1) arr.splice(index,1);
        };


        this.dataURItoBlob =function (dataURI) {
            // convert base64/URLEncoded data component to raw binary data held in a string
            var byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0)
                byteString = atob(dataURI.split(',')[1]);
            else
                byteString = unescape(dataURI.split(',')[1]);

            // separate out the mime component
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

            // write the bytes of the string to a typed array
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ia], {type:mimeString});
        };

        this.capitalize = function(s){
            return s.substr(0,1).toUpperCase() +
                s.substr(1);
        };

        this.deCapitalize = function(s){
            return s.substr(0,1).toLowerCase() +
                s.substr(1);
        };

        this.eachObjectOnScene = function(callBack){
            editData.sceneList.forEach(function(scene){
                scene._layers.forEach(function(layer){
                    layer._gameObjects.forEach(function(go){
                        callBack(go);
                    });
                });
            });
        };

        return this;
    })








;
