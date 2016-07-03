
(function(){
    'use strict';

    var Utils = window.Utils;

    var Api = function(request, sender, sendResponse) {
        return {
            getAppUrl: function() {
                sendResponse({url: chrome.extension.getURL('')});
            },
            get: function(request){
                Utils.get(request.url,request.params||{},function(data){
                    var resp = {};
                    try {
                        resp.response = JSON.parse(data);
                    } catch(e) {
                        resp.response = data;
                    }
                    resp.eventUUID = request.eventUUID;
                    sendResponse(resp);
                });
                return true;
            },
            getFontList: function(){
                chrome.fontSettings.getFontList(function(list){
                    var resp = {};
                    resp.response = list;
                    resp.eventUUID = request.eventUUID;
                    sendResponse(resp);
                });
                return true;
            },
            notifyAll:function(request){
                chrome.tabs.query({},function(tabs){
                    tabs.forEach(function(tab){
                        chrome.tabs.executeScript(
                            tab.id,
                            {allFrames:true, runAt: 'document_start',code:'window.postMessage('+JSON.stringify(request.data)+',\'*\');'}
                        );
                    });
                });
            }
        };
    };

    /**
     * usage on content page
     * chrome.runtime.sendMessage({method:methodName,parameter1:param1},callBack)
     */
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            var apiFn = Api(request, sender, sendResponse);
            var res;
            apiFn[request.method] && (res = apiFn[request.method](request));
            if (res) return true;
        }
    );

})();
