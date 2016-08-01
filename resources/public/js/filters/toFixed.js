
app.filter('toFixed', function() {
    return function(val){
        return (+val).toFixed(3);
    }
});