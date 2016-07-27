

window.app.
    controller('particleSystemCtrl', function (
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


        var describeArc = function(x, y, radius, startAngle, endAngle){

            var  polarToCartesian = function(centerX, centerY, radius, angleInDegrees) {
                var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

                return {
                    x: centerX + (radius * Math.cos(angleInRadians)),
                    y: centerY + (radius * Math.sin(angleInRadians))
                };
            };

            var start = polarToCartesian(x, y, radius, endAngle);
            var end = polarToCartesian(x, y, radius, startAngle);

            var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

            return [
                "M", start.x, start.y,
                "A", radius, radius, 0, arcSweep, 0, end.x, end.y
            ].join(" ");

        };


        //s.createAnglePreview = function(){
        //    var a =  editData.currParticleSystemInEdit.particleAngle.from;
        //    var b = editData.currParticleSystemInEdit.particleAngle.to;
        //    a = ve.Math.radToDeg(a);
        //    b = ve.Math.radToDeg(b);
        //    console.log(a,b);
        //    s.d=describeArc(50,50,20, a,b);
        //};

        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currParticleSystemInEdit = new ve.models.ParticleSystem();
            } else if (dialogState.opName=='edit'){

            }
            //s.createAnglePreview();
            //s.$watch('editData.currParticleSystemInEdit.particleAngle.from',function(){
            //    s.createAnglePreview();
            //});
            //
            //s.$watch('editData.currParticleSystemInEdit.particleAngle.to',function(){
            //    s.createAnglePreview();
            //});

        })();





    });