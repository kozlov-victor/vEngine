
var commonBehaviour = {};

//<code><%for (var i=0;i<commonBehaviour.length;i++){%>
//<code>commonBehaviour['<%- commonBehaviour[i].name %>'] = function(exports,parameters){
//<code>var module = exports,self = exports;
//<code><%- commonBehaviour[i].content %>
//<code>}
//<code><%}%>

exports.commonBehaviour = commonBehaviour;

var scripts = {};
scripts.gameObject = {};
scripts.scene = {};

//<code><%specialResources.gameObjectScripts = specialResources.gameObjectScripts||[];%>
//<code><%for (var i = 0; i<specialResources.gameObjectScripts.length;i++) {%>
scripts.gameObject['<%-specialResources.gameObjectScripts[i].name%>'] = function(exports){
    //<code>var module = exports, self = exports;
    //<code><%-specialResources.gameObjectScripts[i].content%>
};
//<code><%}%>;

//<code><%specialResources.sceneScripts = specialResources.sceneScripts||[];%>
//<code><%for (var i = 0; i<specialResources.sceneScripts.length;i++) {%>
scripts.scene['<%-specialResources.sceneScripts[i].name%>'] = function(exports){
    //<code>var module = exports, self = exports;
    //<code><%-specialResources.sceneScripts[i].content%>
};
//<code><%}%>;

exports.scripts = scripts;

