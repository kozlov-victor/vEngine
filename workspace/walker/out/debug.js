(function(){

    var getPopupContainer = function(){
        if (!(document && document.getElementById)) return null;
        var container = document.getElementById('popupContainer');
        if (container) return container;
        container = document.createElement('div');
        container.id = 'popupContainer';
        container.style.cssText =
            'position:absolute;' +
            'bottom:10px;' +
            'right:10px;' +
            'z-index:10000;' +
            'width:300px;'+
            'max-height:'+window.innerHeight+'px;'+
            'overflow-y:scroll';
        document.body.appendChild(container);
        return container;
    };

    var _showErr = function(e,lineNum){
        var msg = 'error: ' + (e.message || e);
        if (lineNum) msg+=' in line ' + lineNum;
        console.log(msg);
    };

    window.showError = function _err(e,lineNum){
        if (navigator.isCocoonJS) {
            _showErr(e,lineNum);
            return;
        }
        if (document.body) {
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
            leftBox.innerHTML = (e && e.message)?e.message:e;
            popup.appendChild(leftBox);
            popup.appendChild(rightBox);
            var popupContainer = getPopupContainer();
            if (popupContainer) {
                popupContainer.appendChild(popup);
            } else {
                _showErr(e,lineNum);
            }
        } else {
            setTimeout(function(){
                _err(e,lineNum);
            },100);
        }

    };


    window.canceled = false;

    window.addEventListener('error',function(e,url,lineNum){
        console.error(e);
        window.showError(e,lineNum);
        window.canceled = true;
    });

})();
