
let cache = {};

exports.get = function(name){
    return cache[name];
};

exports.clear = function(name){
    if (name) delete cache[name];
    else cache = {};
};

exports.set = function(name,value){
    if (!cache[name]) cache[name] = value;
};

exports.has = function(name){
    return !!cache[name];
};

exports.getAll = function(){
   return cache;
};



