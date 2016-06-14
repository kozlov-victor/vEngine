
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
    if (!ve_local.bundle.sceneList.size()) throw 'at least one scene must be created';

    ve_local.bundle.compileGameObjectScripts();

    ve_local.renderer = new ve_local.CanvasRenderer();
    ve.sceneManager = new ve_local.SceneManager();
    ve.keyboard = new ve_local.Keyboard();

    window.addEventListener('load',function(){
        ve_local.renderer.init();
        ve_local.mouse = new ve_local.Mouse(ve_local.renderer.getCanvas());
        ve.sceneManager.setScene(ve_local.bundle.sceneList.get(0));
    });

})();