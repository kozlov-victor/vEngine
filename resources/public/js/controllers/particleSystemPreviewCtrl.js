
window.app.
    controller('particleSystemPreviewCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;

        editData.currParticleSystemInEdit.emit(100,100);

        var prevTime = null;
        var update = function(){

            var currTime = Date.now();
            if (!prevTime) prevTime = currTime;
            var delta = currTime - prevTime;
            prevTime = currTime;
            editData.currParticleSystemInEdit._particles.forEach(function(p){

                p._currFrameAnimation && p._currFrameAnimation.update(currTime);
                var deltaX = p.vel.x * delta / 1000;
                var deltaY = p.vel.y * delta / 1000;
                p.pos.x = p.pos.x+deltaX;
                p.pos.y = p.pos.y+deltaY;

                if (!p._timeCreated) p._timeCreated = currTime;
                if (currTime - p._timeCreated > p.liveTime) {
                    editData.currParticleSystemInEdit._particles.splice(editData.currParticleSystemInEdit._particles.indexOf(p),1);
                }

                s.$apply();
                if (uiHelper.dialogName!='frmCreateParticleSystemPreview') clearInterval(0);
            });
        };

        s.emit = function(e){
            editData.currParticleSystemInEdit.emit(e.clientX,e.clientY);
        };

        setInterval(function(){
            update();
        },10);

        (function(){

        })();

    });