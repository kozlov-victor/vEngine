
(function(){

    window.addEventListener('message',function(resp){
        console.log('content accepted message',resp);
        if (!(resp.data && resp.data.eventUUID)) return;
        chrome.runtime.sendMessage(resp.data,function(_resp){
            window.postMessage(_resp,'*');
        });
    });

})();