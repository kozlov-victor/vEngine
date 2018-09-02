
import {httpClient as http} from '../app/providers/rest/httpClient';
import {DebugError} from "../engine/debugError";


let devConsole = document.createElement('div');
let css = {
    position: 'absolute',
    right: 0,
    top: 0,
    'background-color': 'black',
    'min-width': '20px',
    'min-height': '20px',
    opacity: 0.5
};
Object.keys(css).forEach(key=>devConsole.style.setProperty(key,css[key]));

let label = document.createElement('span');
label.style.color = 'white';
devConsole.appendChild(label);

window.addEventListener('load',(e:Event)=>{
    document.body.appendChild(devConsole);
    let game = (window as any).game;
    if (!game) return;
    setInterval(function(){
        label.textContent = 'fps:'+`${game.fps}`||`?`;
    },1000);

});

window.addEventListener('error',function(e:any){
    if (e.error && e.error.name && e.error.name==='DebugError') return;
    try {
        let lineNum = e.lineno;
        let colNum = e.colno;
        let filename = e.filename;
        let tmpl = `

  <div class="errorBlock"> 
        <style>
            .errorCol {color: #f30000;text-decoration: underline;}
            .errorRow {
                color: #bf1313;
                font-weight: bold;
            }
            .errorBlock {
                position: absolute;
                left: 0;top:0;right:0;
                border: 1px solid grey;
                background-color: rgba(255,215,200,0.99);
                font-family: monospace;
                padding: 10px;
            }
            .errorClose {
                position: absolute;
                top: 5px;
                right: 5px;
                content: 'x';
                width: 20px;
                height: 20px;
                cursor: pointer;
                color: black;
            }    
       </style>
       <div class="errorClose" onclick="this.closest('.errorBlockHolder').remove();">x</div>
       <div>Runtime error!</div>
       <div>${filename}</div>
       <div>-------------------</div>
       <pre>$_content</pre>
  </div> 
  
`;
        http.get(filename,{r:Math.random()},file=>{
            let res='';
            let strings = file.split('\n');
            let linesAfter = 5;
            let errorString = strings[lineNum - 1] || '';
            errorString = `${errorString.substr(0,colNum-1)}<span class="errorCol">${errorString[colNum-1]}</span>${errorString.substr(colNum)}`;
            res+=`<span class="errorRow">${errorString}</span>\n`;
            for (let i=0;i<linesAfter;i++) {
                let index = lineNum + i;
                let s = strings[index];
                if (s) res+=s+'\n';
            }
            let errDiv = document.createElement('div');
            errDiv.className = 'errorBlockHolder';
            errDiv.innerHTML = tmpl.replace('$_content',res);
            document.body.appendChild(errDiv);
            document.title = 'runtime error!';
        });
    } catch (e) {
        console.error(e);
    }
},true);