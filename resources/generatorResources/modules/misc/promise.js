
var Promise = function(resolver){

    var thenFn;

    var resolve = function(data){
        thenFn(data);
    };

    resolver(resolve);

    this.then = function(_thenFn){
        console.log('invoked then with',_thenFn);
        thenFn = _thenFn;
    };

};


new Promise(function(resolve){
    resolve('immediade data');
}).then(function(data){
    console.log('then invoked',data);
});