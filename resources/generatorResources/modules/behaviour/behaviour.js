
var commonBehaviour = {};

//<code><%for (var i=0;i<commonBehaviour.length;i++){%>
//<code>commonBehaviour['<%- commonBehaviour[i].name %>'] = <%- commonBehaviour[i].content %>
//<code><%if (i<commonBehaviour.length-1){%>;<%}%>
//<code><%}%>

exports.commonBehaviour = commonBehaviour;

var scripts = {};
scripts.gameObject = {};
scripts.scene = {};

//<code><%for (var i = 0; i<specialResources.gameObjectScripts.length;i++) {%>
scripts.gameObject['<%-specialResources.gameObjectScripts[i].name%>'] = function(exports,self){
    //<code><%-specialResources.gameObjectScripts[i].content%>
    exports.onCreate = onCreate;
    exports.onUpdate = onUpdate;
    exports.onDestroy = onDestroy;
};
//<code><%}%>;
//<code><%for (var i = 0; i<specialResources.sceneScripts.length;i++) {%>
scripts.scene['<%-specialResources.sceneScripts[i].name%>'] = function(exports,self){
    //<code><%-specialResources.sceneScripts[i].content%>
    exports.onCreate = onCreate;
    exports.onUpdate = onUpdate;
    exports.onDestroy = onDestroy;
};
//<code><%}%>;

exports.scripts = scripts;

