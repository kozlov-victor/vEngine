
exports.merge = function(obj1,obj2){
    Object.keys(obj2).forEach(function(key){
        obj1[key]=obj2[key];
    });
};
exports.clone = function(obj){
    return Object.create(obj);
};
exports.capitalize = function(s){
    return s.substr(0,1).toUpperCase() +
        s.substr(1);
};
exports.getBase64prefix = function(fileType,fileName) {
    var ext = fileName.split('.').pop();
    return 'data:'+fileType+'/'+ext+';base64,'
};
exports.loadBinary = function(url,progress,callBack) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.setRequestHeader('Accept-Ranges', 'bytes');
    request.setRequestHeader('Content-Range', 'bytes');

    request.onload = function() {
        callBack(request.response);
    };
    request.onprogress = function(e){
        progress(url,e.loaded/ e.total);
    };
    //<code><%if (opts.debug){%>request.onerror=function(e){throw 'can not load sound with url '+url};<%}%>
    request.send();
};