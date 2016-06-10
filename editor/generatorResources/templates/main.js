
(function(){

    ve_local.bundle = new ve_local.Bundle({
        audio: '%audio%',
        frameAnimation: '%frameAnimation%',
        gameObject: '%gameObject%',
        scene: '%scene%',
        layer:'%layer%',
        spriteSheet: '%spriteSheet%',
        script:'%script%',
        gameProps: '%gameProps%'
    });

    ve_local.bundle.prepare();
    ve_local.bundle.compileGameObjectScripts();

    ve_local.renderer = new CanvasRenderer();
    ve_local.sceneManager = new SceneManager();

    window.addEventListener('load',function(){
        ve_local.renderer.init();

        if (!ve_local.bundle.sceneList.size()) throw 'at least one scene must be created';

        // for test only
        //ve_local.bundle.sceneList.get(0)._layers.forEach(function(layer){
        //    layer._gameObjects.forEach(function(go){
        //        go._frameAnimations.get(0) && go._frameAnimations.get(0).play();
        //    });
        //});
        ve_local.sceneManager.setScene(ve_local.bundle.sceneList.get(0));
    });

})();