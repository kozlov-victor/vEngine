
require('camera').instance().follow(self);
var ps = require('bundle').instance().particleSystemList.find({name:'test'});
var scene = self.getScene();

var onUpdate = function(){
   scene.log(scene.getTileAt(self.pos.x,self.pos.y));
};