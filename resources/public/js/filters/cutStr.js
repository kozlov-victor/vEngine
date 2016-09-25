
app.filter('cutStr', function() {
    return function(val){
        if (!val) return '';
        var n = 3;
        val=val.toString();
        if (val.length>n) val = val.substr(0,n)+'...';
        return val;
    }
});