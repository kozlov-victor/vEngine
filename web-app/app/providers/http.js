

var execMethod = function(url,method,params,callBack) {
    if (method=='get' && params) {
        var tail =
            Object.keys(params).map(function(item){
            return item+'='+params[item]
        }).join('&');
        url = url + '?' + tail;
        params = undefined;
    }
    var resolveFn, rejectFn;
    var p = new Promise(function(resolve,reject){
        resolveFn = resolve;
        rejectFn = reject;
    });
    Vue.http[method](url, params).
        then(function(resp){
            try {
                var r = resp.body;
                callBack && callBack(r);
                resolveFn(r);
            } catch(e){
                rejectFn(e);
                setTimeout(function() {
                    throw e;
                },0);
            }
        }).
        catch(function(err){
            rejectFn(err);
            setTimeout(function() {
                if (err.status || err.status!=200) {
                    console.log(err);
                    throw err.body || '';
                }
            },0);
    });
    return p;
};

module.exports.get = function(url,params,callBack){
    return execMethod(url,'get',params,callBack);
};

module.exports.post = function(url,params,callBack){
    return execMethod(url,'post',params,callBack);
};

module.exports.postMultiPart = function(url,file,params,callBack){
    var formData = new FormData();
    Object.keys(params).forEach(function(key){
        formData.append(key,params[key]);
    });
    formData.append('file',file);
    formData.append('fileName',file.name);
    return execMethod(url,'post',formData,callBack);
};