(function(){

    var getPopupContainer = function(){
        var container = document.getElementById('popupContainer');
        if (container) return container;
        container = document.createElement('div');
        container.id = 'popupContainer';
        container.style.cssText =
            'position:absolute;' +
            'bottom:10px;' +
            'right:10px;' +
            'width:300px;';
        document.body.appendChild(container);
        return container;
    };

    var showError = function(e,lineNum){
        var popup = document.createElement('div');
        popup.style.cssText =
            'background-color:rgba(255,255,255,0.95);' +
            'color:red;' +
            'margin-bottom:5px;'+
            'border:1px solid red;';
        popup.textContent = e;
        getPopupContainer().appendChild(popup);
    };

    window.onerror = function(e,url,lineNum){
        showError(e,lineNum);
        ve_local.renderer && ve_local.renderer.cancel();
    };

    window.debug = {};
    window.debug.error = function(err){
        window.top.postMessage({err:err},'*');
        throw err;
    };

})();