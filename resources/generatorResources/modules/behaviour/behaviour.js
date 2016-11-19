
var commonBehaviour = {};

//<code><%for (var i=0;i<commonBehaviour.length;i++){%>
//<code>commonBehaviour['<%- commonBehaviour[i].name %>'] = function(module,exports,self,parameters){
//<code><%- commonBehaviour[i].content %>
//<code><%if (commonBehaviour[i].content.indexOf('onUpdate')==-1){%>
//<code>function onUpdate(){};
//<code><%}%>
    exports.onUpdate = onUpdate;
//<code>}
//<code><%}%>

exports.commonBehaviour = commonBehaviour;

var scripts = {};
scripts.gameObject = {};
scripts.scene = {};

//<code><%specialResources.gameObjectScripts = specialResources.gameObjectScripts||[];%>
//<code><%for (var i = 0; i<specialResources.gameObjectScripts.length;i++) {%>
scripts.gameObject['<%-specialResources.gameObjectScripts[i].name%>'] = function(exports,self){
    //<code><%-specialResources.gameObjectScripts[i].content%>
    //<code><%if (specialResources.gameObjectScripts[i].content.indexOf('onUpdate')==-1){%>
    //<code>function onUpdate(){};
    //<code><%}%>
    exports.onUpdate = onUpdate;
};
//<code><%}%>;

//<code><%specialResources.sceneScripts = specialResources.sceneScripts||[];%>
//<code><%for (var i = 0; i<specialResources.sceneScripts.length;i++) {%>
scripts.scene['<%-specialResources.sceneScripts[i].name%>'] = function(exports,self){
    //<code><%-specialResources.sceneScripts[i].content%>
    //<code><%if (specialResources.sceneScripts[i].content.indexOf('onUpdate')==-1){%>
    //<code>function onUpdate(){};
    //<code><%}%>
    exports.onUpdate = onUpdate;
};
//<code><%}%>;

exports.scripts = scripts;

