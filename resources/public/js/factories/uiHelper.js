window.app

    .factory('uiHelper', function () {
        var _;
        return _ = {
            _dialogsStack: [],

            window:'sceneWindow',
            opName:null,
            opObject:null,
            ctxMenu:{
                name:null,
                x:null,
                y:null
            },
            toggle: function (currentVal, defaultVal) {
                return currentVal == defaultVal ? 0 : defaultVal;
            },
            showDialog: function(name){
                _.dialogName = name;
                _._dialogsStack.push(name);
                _.ctxMenu.name = null;
            },
            closeDialog: function(){
                _._dialogsStack.pop();
                _.dialogName = _._dialogsStack[_._dialogsStack.length-1];
            },
            showContextMenu: function(name,x,y,elX,elY,model){
                _.ctxMenu.name = name;
                _.ctxMenu.x = x;
                _.ctxMenu.y = y;
                _.ctxMenu.elX = elX;
                _.ctxMenu.elY = elY;
                _.ctxMenu.model = model
            },
            closeContextMenu: function(){
                _.ctxMenu.name = '';
            }
        }
    });