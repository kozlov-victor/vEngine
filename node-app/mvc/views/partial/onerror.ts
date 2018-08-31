
(window as any).onLoadingError = ()=>{
    let app:HTMLElement  = document.getElementById('app');
    let msg:string  = 'loading error';
    if (!app) console.log(msg);
    else app.innerHTML = msg;
    if (document) document.title = msg;
};