

declare interface NavigatorEx extends Navigator{
    isCocoonJS: boolean
}


let getPopupContainer = ()=>{
    if (!(document && document.getElementById)) return null;
    let container = document.getElementById('popupContainer');
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
        'overflow-y:auto';
    document.body.appendChild(container);
    return container;
};
let _prepareMessage = function(e,lineNum){
    let msg;
    if (typeof e === 'string') {
        msg = e;
    }
    else msg = e.message || e.reason;
    if (msg && msg.message) msg = msg.message;
    if (!msg) {
        if (e.target) {
            ['img','audio','link'].some(function(it){
                if (e.target.tagName && e.target.tagName.toLowerCase()===it) {
                    msg = `can not load ${it} with location ${(e.target.src||e.target.href)}`;
                    return true;
                }
            });
        }
    }
    if (!msg) msg = '';
    if (msg.indexOf('Uncaught')===0) msg = msg.replace('Uncaught','').trim();
    if (!msg) {
        msg = 'Unknown error: ' + e.toString();
    }
    if (lineNum) msg+=' in line ' + lineNum;
    return msg;
};

let _showErrToConsole = function(e,lineNum){
    console.log(_prepareMessage(e,lineNum));
};

let _showErrorToDom = function(el,e,lineNum) {
    el.textContent = _prepareMessage(e,lineNum);
};


let lastErr = '';
window['showError'] = function _err(e,lineNum){
    window['game'] && window['game'].destroy();
    if ((<NavigatorEx>navigator).isCocoonJS) {
        _showErrToConsole(e,lineNum);
        return;
    }
    if (document.body) {
        if (lastErr.toString() === (e && e.toString())) {
            return;
        }
        lastErr = e;
        let popup = document.createElement('div');
        popup.style.cssText =
            `
            background-color:rgba(255,255,255,0.95);
            color:red;
            margin-bottom:5px;
            padding: 13px;
            font-family: monospace;
            font-size: 20px;
            border:1px solid red;`;
        let leftBox = document.createElement('div');
        leftBox.style.cssText = 'width:90%;display:inline-block;';
        leftBox.style.cssText = 'width:90%;display:inline-block;';
        let rightBox = document.createElement('div');
        rightBox.style.cssText = 'width:10%;display:inline-block;cursor:pointer;text-align:right;vertical-align:top;';
        rightBox.textContent = 'x';
        rightBox.ontouchstart  = rightBox.onclick = function(){
            popup.remove();
        };
        _showErrorToDom(leftBox,e,lineNum);
        popup.appendChild(leftBox);
        popup.appendChild(rightBox);
        let popupContainer = getPopupContainer();
        if (popupContainer) {
            popupContainer.appendChild(popup);
        } else {
            _showErrToConsole(e,lineNum);
        }
    } else {
        setTimeout(()=>{
            _err(e,lineNum);
        },100);
    }

};


window.addEventListener('error',(e)=>{
    window['showError'](e,e['linenum']);
},true);

window.addEventListener('unhandledrejection',(e)=>{
    console.error(e);
    window['showError'](e,e['linenum']);
});
