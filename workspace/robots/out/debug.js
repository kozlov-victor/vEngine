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

    var _prepareMessage = function(e,lineNum){
        var msg = (e.message || e.toString() || '');
        if (msg.indexOf('Uncaught')==0) msg = msg.replace('Uncaught','').trim();
        if (!msg) msg = 'Unknown error. Is your server running?';
        if (lineNum) msg+=' in line ' + lineNum;
        return msg;
    };

    var _showErrToConsole = function(e,lineNum){
        console.log(_prepareMessage(e,lineNum));
    };

    var _showErrorToDom = function(el,e,lineNum) {
        el.textContent = _prepareMessage(e,lineNum);
    };

    var _consoleError = console.error;

    console.error = function(e){
       _consoleError.call(console,e);
       window.showError(e);
    };

    window.showError = function _err(e,lineNum){
        console.log('showerror',e,lineNum);
        if (navigator.isCocoonJS) {
            _showErrToConsole(e,lineNum);
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
            rightBox.ontouchstart  = rightBox.onclick = function(){
                popup.remove();
            };
            _showErrorToDom(leftBox,e,lineNum);
            popup.appendChild(leftBox);
            popup.appendChild(rightBox);
            var popupContainer = getPopupContainer();
            if (popupContainer) {
                popupContainer.appendChild(popup);
            } else {
                _showErrToConsole(e,lineNum);
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
        if (window.require) {
            window.require('audioPlayer') && (window.require('audioPlayer').stopAll());
            window.require('renderer') && (window.require('renderer').stop());
        }
    });

})();
