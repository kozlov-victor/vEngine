
(function(){

    ve_local.bundle = new ve_local.Bundle({
        audio: '%audio%',
        frameAnimation: '%frameAnimation%',
        gameObject: '%gameObject%',
        scene: '%scene%',
        spriteSheet: '%spriteSheet%',
        gameProps: '%gameProps%'
    });
    ve_local.bundle.prepare();
    ve_local.renderer = new CanvasRenderer();
    var sceneManager = new SceneManager();

    window.addEventListener('load',function(){
        ve_local.renderer.init();
        if (ve_local.bundle.sceneList.size()==0) throw 'create scene first!';
        // for test only
        ve_local.bundle.sceneList.get(0)._gameObjects.rs.forEach(function(go){
            go._frameAnimations.get(0).play();
        });
        sceneManager.setScene(ve_local.bundle.sceneList.get(0));
    });

})();