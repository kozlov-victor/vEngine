(function(){

    window.ve = window.ve || {};

    var getPopupContainer = function(){
        var container = document.getElementById('popupContainer');
        if (container) return container;
        container = document.createElement('div');
        container.id = 'popupContainer';
        container.style.cssText =
            'position:absolute;' +
            'bottom:10px;' +
            'right:10px;' +
            'z-index:10000;' +
            'width:300px;';
        document.body.appendChild(container);
        return container;
    };

    ve.showError = function(e,lineNum){
        var popup = document.createElement('div');
        popup.style.cssText =
            'background-color:rgba(255,255,255,0.95);' +
            'color:red;' +
            'margin-bottom:5px;'+
            'border:1px solid red;';
        var leftBox = document.createElement('div');
        leftBox.style.cssText = 'width:90%;display:inline-block;';
        var rightBox = document.createElement('div');
        rightBox.style.cssText = 'width:10%;display:inline-block;cursor:pointer;text-align:right;vertical-align:top;';
        rightBox.textContent = 'x';
        rightBox.onclick = function(){
            popup.remove();
        };
        leftBox.textContent = e;
        popup.appendChild(leftBox);
        popup.appendChild(rightBox);
        getPopupContainer().appendChild(popup);
    };

    window.onerror = function(e,url,lineNum){
        ve.showError(e,lineNum);
        ve_local.renderer && ve_local.renderer.cancel();
    };

    window.debug = {};

})();