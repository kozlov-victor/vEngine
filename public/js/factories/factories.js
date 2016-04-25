
window.app

.factory('editData',function(ResourceList){
    return {
        resourceList: new ResourceList()
    }
})

.factory('ResourceList',function(){
    return function() {
        var rs = [];
        this.addResource = function(r){
            rs.push(r);
        };
        this.size = function() {
            return rs.length;
        }
    };
})

.factory('Resource',function(){
    return function(){
        this.type = 'hui';
    }
})



;