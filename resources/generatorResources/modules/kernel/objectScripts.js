
var objectScripts = {};
objectScripts.gameObject = {};
objectScripts.scene = {};

//<code><%for (var i = 0; i<specialResources.gameObjectScripts.length;i++) {%>
objectScripts.gameObject['<%-specialResources.gameObjectScripts[i].name%>'] = function(exports,self){
    //<code><%-specialResources.gameObjectScripts[i].content%>
    exports.onCreate = onCreate;
    exports.onUpdate = onUpdate;
    exports.onDestroy = onDestroy;
};
//<code><%}%>;
//<code><%for (var i = 0; i<specialResources.sceneScripts.length;i++) {%>
objectScripts.scene['<%-specialResources.sceneScripts[i].name%>'] = function(exports,self){
    //<code><%-specialResources.sceneScripts[i].content%>
    exports.onCreate = onCreate;
    exports.onUpdate = onUpdate;
    exports.onDestroy = onDestroy;
};
//<code><%}%>;
