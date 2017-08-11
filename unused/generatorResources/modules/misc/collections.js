
let isObjectMatchTo = function(obj,matcher){
    let isCandidate = true;
    Object.keys(matcher).some(function(conditionKey){
        if (obj[conditionKey]!=matcher[conditionKey]) {
            isCandidate = false;
            return true;
        }
    });
    return isCandidate;
};

exports.List = function List() {
    let self = this;
    this.rs = [];
    this.add = function (r) {
        self.rs.push(r);
        return self;
    };
    this.addAll = function (list) {
        list.forEach(function(itm){
            self.rs.push(itm);
        });
    };
    this.get = function(index){
        return self.rs[index];
    };
    this.getFirst = function(){
        return this.get(0);
    };
    this.getLast = function(){
        return this.get(this.size()-1);
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
        return self;
    };
    this.forEach = function(callback){
        for (let i = 0,l=this.rs.length;i<l;i++){
            callback(self.rs[i],i);
        }
    };
    this.forEachReversed = function(callback){
        for (let i = this.rs.length-1;i>=0;i--){
            callback(self.rs[i],i);
        }
    };
    this.some = function(callback){
        for (let i = 0,l=this.rs.length;i<l;i++){
            let res = callback(self.rs[i],i);
            if (res) return true;
        }
        return false;
    };
    this.filter = function(callback){
        let list = new List();
        for (let i = 0,l=this.rs.length;i<l;i++){
            let res = callback(self.rs[i]);
            if (res) list.add(self.rs[i])
        }
        return list;
    };
    this.someReversed = function(callback){
        for (let i = this.rs.length-1;i>=0;i--){
            let res = callback(self.rs[i],i);
            if (res) break;
        }
    };
    this.indexOf = function(obj){
        let i = 0;
        let success = false;
        self.rs.some(function(item){
            let isMatch = isObjectMatchTo(item,obj);
            if (isMatch) {
                success = true;
                return true;
            }
            i++;
        });
        return success?i:-1;
    };
    this.has = function(obj){
        return this.indexOf(obj)>-1;
    };
    this.remove = function (obj){
        if (!obj) return;
        let index = self.indexOf(obj);
        //<code>{{#if opts.debug}}
        if (index==-1) throw `can not remove object ${obj} from collections.list`;
        // {{/if}}
        self.rs.splice(index,1);
    };
    this.find = function (obj){
        return self.rs[self.indexOf(obj)];
    };
    this.findAll = function (obj){
        let res = [];
        self.rs.forEach(function(item){
            let isMatch = isObjectMatchTo(item,obj);
            if (isMatch) res.push(item);
        });
        return res;
    };
    this.pop = function(){
        return self.rs.pop();
    };
    this.fromJSON = function(json,ObjTypeClass){
        let self = this;
        try{
            json.forEach(function(itm){
                self.add(new ObjTypeClass(itm));
            });
        } catch(e){
            console.error(e);
        }
    };
    this.toJSON = function(){
        let newArr = [];
        let sanitize = function(obj){
            if (obj && obj.$$hashKey) {
                delete obj.$$hashKey;
            }
            //if (!(Object.keys(obj).length && obj.length)) return;
            if (obj.split) return;
            for (let i in obj) {
                if (!obj[i]) continue;
                if (!(obj.hasOwnProperty(i))) continue;
                sanitize(obj[i]);
            }
            return obj;
        };
        this.rs.forEach(function(itm){
            newArr.push(sanitize(itm.toJSON()));
        });
        return newArr;
    };
};

exports.Set = function(){
    let self = this;
    this.rs = {};
    this.add = function(itm){
        if (!this.has(itm.id)) self.rs[itm.id]=itm;
    };
    this.get = function(itm){
        return self.rs[itm.id];
    };
    this.has = function(key){
        return key in self.rs;
    };
    this.combine = function(another){
        Object.keys(another.rs).forEach(function(key){
            self.add(another.rs[key]);
        });
    };
    this.asArray = function(){
        let res = [];
        Object.keys(self.rs).forEach(function(key){
            res.push(self.rs[key]);
        });
        return res;
    }
};