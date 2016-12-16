
var commonBehaviour = {};

//<code>{{#each commonBehaviour}}
//<code>commonBehaviour['{{this.name}}'] = function(exports,parameters){
//<code>var module = exports,self = exports;
//<code>{{{this.content}}}
//<code>}
//<code>{{/each}}

exports.commonBehaviour = commonBehaviour;

var scripts = {};
scripts.gameObject = {};
scripts.scene = {};

//<code>{{#each specialResources.gameObjectScripts}}
scripts.gameObject['{{this.name}}'] = function(exports){
    //<code>var module = exports, self = exports;
    //<code>{{{this.content}}}
};
//<code>{{/each}}

//<code>{{#each specialResources.sceneScripts}}
scripts.scene['{{this.name}}'] = function(exports){
    //<code>var module = exports, self = exports;
    //<code>{{{this.content}}}
};
//<code>{{/each}}

exports.scripts = scripts;

