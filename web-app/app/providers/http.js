
module.exports.get = function(url,data,callBack){
    Vue.http.
        get(url, data).
        then(callBack, function(e){
            throw e;
        }
    );
};

module.exports.post = function(url,data,callBack){
    Vue.http.
        post(url, data).
        then(function(resp){
            callBack(resp.body);
        },
        function(e){
            throw e;
        }
    );
};