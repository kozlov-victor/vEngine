


window.app

    .factory('messageDigest',function(resourceDao){

        //window.addEventListener('message',function(e){
        //    console.log('accepted message',e);
        //});

        var respondToTarget = function(target,data){
            target && target.postMessage(data,'*');
        };

        window.addEventListener('message',function(m){
            console.log('accepted msg',m);
            if (!(m.data && m.data.command)) return;
            switch (m.data.command) {
                case 'getCode':
                    var code = ve_local.bundle.scriptList.getIf({gameObjectId:m.data.gameObjectId});
                    respondToTarget(document.getElementById('scriptEditor').contentWindow,code.toJsonObj());
                    break;
                case 'saveCode':
                    code = m.data.code;
                    var id = m.data.id;
                    var currResourceInEdit = ve_local.bundle.scriptList.getIf({id:id});
                    currResourceInEdit.code = code;
                    resourceDao.createOrEditResource(currResourceInEdit.clone(),ve.models.Script,ve_local.bundle.scriptList);
            }
        });
        window.addEventListener('resize',function(){
            var fr = document.getElementById('scriptEditor');
            if (!fr) return;
            var wnd = fr.contentWindow;
            respondToTarget(wnd,{command:'resizeWindow',height:fr.getBoundingClientRect().height});
        });
        return this;
    })




;