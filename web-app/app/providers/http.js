
var execMethod = function(url,method,data,callBack) {
    Vue.http
        [method](url, data).
        then(function(resp){
            callBack(resp.body);
        }).
        catch(function(err){
            setTimeout(function() {
                if (err.status && err.status!=200) throw err.body || '';
            },0);
        });
};

module.exports.get = function(url,data,callBack){
    execMethod(url,'get',data,callBack);
};

module.exports.post = function(url,data,callBack){
    execMethod(url,'post',data,callBack);
};