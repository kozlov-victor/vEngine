
var Collections = {};
Collections.Collection = function () {
    var self = this;
    this.rs = [];
    this.add = function (r) {
        self.rs.push(r);
    };
    this.get = function(index){
        return self.rs[index];
    };
    this.isEmpty = function(){
        return self.size()==0;
    };
    this.size = function () {
        return self.rs.length;
    };
    this.getAll = function () {
        return self.rs;
    };
    this.clear = function(){
        self.rs = [];
    };
    this.indexOf = function(obj){
        var i = 0;
        var success = false;
        self.rs.some(function(item){
            var isCandidate = true;
            Object.keys(obj).some(function(conditionKey){
                if (obj[conditionKey]!=item[conditionKey]) {
                    isCandidate = false;
                    return true;
                }
            });
            if (isCandidate) {
                success = true;
                return true;
            }
            i++;
        });
        return success?i:-1;
    };
    this.removeIf = function(obj){
        if (!obj) return;
        var index = self.indexOf(obj);
        if (index>-1) self.rs.splice(index,1);
    };
    this.getIf = function(obj){
        return self.rs[self.indexOf(obj)];
    }
};