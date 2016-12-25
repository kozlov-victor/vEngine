
module.exports.get = function(url,data,callBack){
    Vue.http.
        get(url, data).
        then(callBack, function(err){
            setTimeout(function() { throw err.body; },0);
        }
    );
};

module.exports.post = function(url,data,callBack){
    Vue.http.
        post(url, data).
        then(function(resp){
            callBack(resp.body);
        }).
        catch(function(err){
            setTimeout(function() { throw err.body; },0);
        });
};