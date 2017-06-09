
let events = {};
window.addEventListener('message',function(resp){
    let data = resp.data && resp.data.response;
    if (!data) return;
    let id = resp.data.eventUUID;
    if (events[id]) {
        let fn = events[id];
        delete events[id];
        fn && data && fn(data);
    }
});
let requestToApi = function(params,callBack) {
    let eventUUID = (~~Math.random()*100)+new Date().getTime();
    events[eventUUID] = callBack;
    params.eventUUID = eventUUID;
    window.top.postMessage(params,'*');
};

export default {requestToApi};