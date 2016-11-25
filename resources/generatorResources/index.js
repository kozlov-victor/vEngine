
var data;

//<code>data = {
//<code><%var l = Object.keys(commonResources).length;%>
//<code><%Object.keys(commonResources).forEach(function(key,i){%>
//<code>    <%-key%>:<%-commonResources[key]%><%if (i<l-1){%><%=','%><%}%>
//<code><%})%>
//<code>};

var bundle = require('bundle').instance();
bundle.prepare(data);
//<code><%if (opts.debug){%>
if (!bundle.sceneList.size()) throw 'at least one scene must be created';
//<code><%}%>
var renderer = require('renderer').instance();
var sceneManager = require('sceneManager').instance();
var keyboard = require('keyboard').instance();


window.addEventListener('load',function(){
    document.body.ontouchstart = function(e){
        e.preventDefault();
        return false;
    };

    renderer.init();
    require('mouse').instance();
    sceneManager.setScene(bundle.sceneList.get(0));
});