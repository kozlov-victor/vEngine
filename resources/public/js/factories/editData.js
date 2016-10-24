'use strict';

window.app

    .factory('editData', function ($sce) {

        var collections = require('collections');

        var res = {};

        res.reset = function(){
            res.commonBehaviourList = null;
            res.currGameObjectInEdit = null;
            res.currSpriteSheetInEdit = null;
            res.currFrAnimationInEdit = null;
            res.currSceneInEdit = null;
            res.currSceneGameObjectInEdit = null;
            res.currLayerInEdit = null;
            res.currFontInEdit = null;
            res.currCommonBehaviourInEdit = null;
            res.currSoundInEdit = null;
            res.currParticleSystemInEdit = null;
            res.currProjectInEdit = null;
            res.currTileIndexInEdit = null;

            res.userInterfaceList = new collections.List();

            res.debugFrameUrl = $sce.trustAsUrl('/about:blank');
            res.scriptEditorUrl = '';

            res.projectName = undefined;
            res.projects = null;
            res.buildOpts = {
                debug: false,
                embedResources: false,
                embedScript: false,
                minify:false
            };
        };

        res.reset();

        return res;
    })


;