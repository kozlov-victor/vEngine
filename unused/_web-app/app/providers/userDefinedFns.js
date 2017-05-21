
//Vue.filter('nbsp', function (value) {
//    return value.split(' ').join('&nbsp;')
//});

window.alertEx = function(msg){
    require('components/alertDialog/alertDialog').instance.open(msg);
};

window.confirmEx = function(msg,callback){
    require('components/confirmDialog/confirmDialog').instance.open(msg,callback);
};