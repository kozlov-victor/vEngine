
(function(){
    'use strict';

    let Utils = window.Utils;

    let Api = (request, sender, sendResponse)=> {

        let sendToClient = (data)=>{
            sendResponse({response:data,eventUUID:request.eventUUID});
        };


        // api public methods
        return {
            getAppUrl: ()=> {
                sendToClient({url: chrome.extension.getURL('')});
            },
            get: request=>{
                Utils.get(request.url,request.params||{},data=>{
                    let resp = {};
                    try {
                        resp.response = JSON.parse(data);
                    } catch(e) {
                        resp.response = data;
                    }
                    sendToClient(resp);
                });
                return true;
            },
            getFontList: ()=>{
                chrome.fontSettings.getFontList(function(list){
                    sendToClient(list);
                });
                return true;
            },
            notifyAll:request=>{
                chrome.tabs.query({},tabs=>{
                    tabs.forEach(tab=>{
                        chrome.tabs.executeScript(
                            tab.id,
                            {allFrames:true, runAt: 'document_start',code:'window.postMessage('+JSON.stringify(request.data)+',\'*\');'}
                        );
                    });
                });
            },
            getFileList: function(request){
                let xhr = new XMLHttpRequest();
                xhr.open("GET", `file:///${request.path}`, true);
                xhr.onload = function(e) {
                    let list = [];
                    let mathArr = xhr.response.match(/<script>addRow.*<\/script>/gi)||[];
                    mathArr.forEach(item=>{
                        item = item.replace('<script>','').
                            replace('<script>','').
                            replace('</script>','').
                            replace(';','').
                            replace('(','').
                            replace('addRow','').
                            replace(')','').split(',').map(it=>{return it.split('"').join('')});
                        if (item[0]=='..') return;
                        list.push({name:item[0],isFile:item[2]=='0'});
                    });
                    sendToClient(list);
                };
                xhr.send();
                return true;
            }
        };
    };

    /**
     * usage on content page
     * chrome.runtime.sendMessage({method:methodName,parameter1:param1},callBack)
     */
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            let apiFn = Api(request, sender, sendResponse);
            let res;
            apiFn[request.method] && (res = apiFn[request.method](request));
            if (res) return true;
        }
    );

})();
