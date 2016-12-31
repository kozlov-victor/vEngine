
var events = {};
window.addEventListener('message',function(resp){
    var data = resp.data && resp.data.response;
    if (!data) return;
    var id = resp.data.eventUUID;
    if (events[id]) {
        var fn = events[id];
        delete events[id];
        fn && data && fn(data);
    }
});
module.exports.requestToApi = function(params,callBack) {
    var eventUUID = (~~Math.random()*100)+new Date().getTime();
    events[eventUUID] = callBack;
    params.eventUUID = eventUUID;
    window.top.postMessage(params,'*');
    console.log('requested to api');
};