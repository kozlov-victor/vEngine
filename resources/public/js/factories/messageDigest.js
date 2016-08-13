


window.app

    .factory('messageDigest',function(resourceDao,utils){

        //window.addEventListener('message',function(e){
        //    console.log('accepted message',e);
        //});

        var respondToTarget = function(target,data){
            target && target.postMessage(data,'*');
        };

        window.addEventListener('message',function(m){
            if (!(m.data && m.data.command)) return;
            switch (m.data.command) {
                case 'getCode':
                    resourceDao.readFile(m.data.name+'.js', m.data.path,function(resp){
                        respondToTarget(
                            document.getElementById('scriptEditor').contentWindow,
                            {
                                command:'setCode',
                                completer:utils.createAceCompleter(),
                                code:resp
                            }
                        );
                    });
                    break;
                case 'saveCode':
                    resourceDao.createFile(m.data.name+'.js', m.data.path, m.data.code);
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