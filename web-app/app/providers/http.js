

var execMethod = function(url,method,data,callBack) {
    if (method=='get' && data) {
        var tail =
            Object.keys(data).map(function(item){
            return item+'='+data[item]
        }).join('&');
        url = url + '?' + tail;
        data = undefined;
    }
    Vue.http
        [method](url, data).
        then(function(resp){
            try {
                callBack && callBack(resp.body);
            } catch(e){
                setTimeout(function() {
                    throw e;
                },0);
            }
        }).
        catch(function(err){
            setTimeout(function() {
                if (err.status || err.status!=200) {
                    console.log(err);
                    throw err.body || '';
                }
            },0);
        });
};

module.exports.get = function(url,data,callBack){
    execMethod(url,'get',data,callBack);
};

module.exports.post = function(url,data,callBack){
    execMethod(url,'post',data,callBack);
};