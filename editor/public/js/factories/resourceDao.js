
app


    .factory('resourceDao',function(
        $http,
        editData,
        uiHelper
    ){
        this.loadResource = function(type,ResourceClass,resourceList){
            return new Promise(function(resolve){

                $http({
                    url: '/resource/getAll',
                    method: "POST",
                    data: {type:type}
                }).
                success(function (response) {
                    response && response.forEach && response.forEach(function(item){
                        var r = new ResourceClass(item);
                        resourceList.add(r);
                    });
                    resolve();
                });

            });
        };
        this.createOrEditResource = function(currResourceInEdit,ResourceClass,resourceList,callBack, preserveDialog){
            var formData = new FormData();
            formData.append('file',currResourceInEdit._file);
            var model = {};
            currResourceInEdit.toJsonArr().forEach(function(item){
                model[item.key] = item.value;
            });
            formData.append('model',JSON.stringify(model));
            var op = currResourceInEdit.id?'edit':'create';
            $http({
                url: '/resource/'+op,
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            }).
            success(function (item) {
                if (op=='create') {
                    var r = new ResourceClass(item);
                    resourceList.add(r);
                    callBack && callBack({type:'create',r:r});
                } else {
                    var index = resourceList.indexOf({id:item.id});
                    resourceList.rs[index] = new ResourceClass(item);
                    callBack && callBack({type:'edit',r:resourceList.rs[index]});
                }
                !preserveDialog && uiHelper.closeDialog();
            });
        };
        this.deleteResource = function(id,type,callBack){
            $http({
                url: '/resource/delete',
                method: "POST",
                data: {id:id,type:type}
            }).
                success(function (res) {
                    editData[type+'List'].removeIf({id:id});
                    callBack && callBack();
                });
        };
        this.loadGameProps = function(){
            return new Promise(function(resolve){

                $http({
                    url: '/gameProps/get',
                    method: "POST"
                }).
                    success(function (gameProps) {
                        editData.gameProps = gameProps;
                        resolve();
                    });

            });
        };
        this.saveGameProps = function(gameProps){
            var formData = new FormData();
            formData.append('model',JSON.stringify(gameProps));
            $http({
                url: '/gameProps/save',
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            })
        };
        this.createOrEditObjectInResource = function(resource,objectType,object,callback){
            $http({
                url: '/resource/'+resource.type+'/'+objectType,
                method: "POST",
                data: {
                    model:JSON.stringify(object),
                    resourceId:resource.id
                },
                headers: {'Content-Type': 'application/json'}
            }).
            success(function (resp) {
                callback && callback(resp);
            });
        };
        return this;
    });
