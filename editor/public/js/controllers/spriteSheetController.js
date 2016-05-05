window.app.
    controller('spriteSheetCtrl', function ($scope, $http, $sce, editData, Models, uiHelper, i18n) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();


        s.onSpriteSheetUpload = function(file,src) {
            s.editData.currSpriteSheetInEdit._file = file;
            s.editData.currSpriteSheetInEdit.resourcePath = src;
            var fr = new FileReader();
            fr.onload = function() { // file is loaded
                var img = new Image;
                img.onload = function() {
                    s.editData.currSpriteSheetInEdit.width = img.width;
                    s.editData.currSpriteSheetInEdit.height = img.height;
                    s.$apply(s.editData.currSpriteSheetInEdit);
                };
                img.src = fr.result;
            };
            fr.readAsDataURL(file);
        };

        var createOrEditResource = function(currResourceInEdit,ResourceClass,resourceList){
            var formData = new FormData();
            formData.append('file',currResourceInEdit._file);
            currResourceInEdit.toJsonArr().forEach(function(item){
                formData.append(item.key,item.value);
            });
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
                    } else {
                        var index = resourceList.indexOf({id:item.id});
                        resourceList.rs[index] = new ResourceClass(item);
                    }
                    uiHelper.closeDialog();
                });
        };

        s.createOrEditSpriteSheet = function(){
            createOrEditResource(s.editData.currSpriteSheetInEdit,Models.SpriteSheet,editData.spriteSheetList);
        };

        s.getArray = function(num) {
            if (!num) return [];
            var res = [];
            for (var i=0;i<num;i++) {
                res.push(i);
            }
            return res;
        };


    });