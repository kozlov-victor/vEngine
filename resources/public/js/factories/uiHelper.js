window.app

    .factory('uiHelper', function () {
        var _;
        var collections = require('collections');
        return _ = {
            _dialogsStack: new collections.List(),

            window:'sceneWindow',
            _dialogName:null,
            ctxMenu:{
                name:null,
                x:null,
                y:null
            },
            toggle: function (currentVal, defaultVal) {
                return currentVal == defaultVal ? 0 : defaultVal;
            },
            showDialog: function(name,opName,opObject){
                _.dialogName = name;
                _._dialogsStack.add({
                    name:name,
                    opName:opName,
                    id: opObject && opObject.id,
                    opObject:opObject
                });
                _.ctxMenu.name = null;
            },
            getDialogState: function(){
                return _._dialogsStack.getLast() || {};
            },
            findDialogStateObjectById: function(id){
                return  _._dialogsStack.find({id:id}).opObject;
            },
            closeDialog: function(){
                _._dialogsStack.pop();
                var last = _._dialogsStack.getLast();
                if (last) {
                    _.dialogName = last.name;
                } else {
                    _.dialogName = null;
                }
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