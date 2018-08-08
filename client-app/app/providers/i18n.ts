

export abstract class I18n {
    static locale:string = 'en';

    static bundle = {
        'en': {
            ok: 'ok',
            confirm: 'confirm',
            confirmQuestion:(item)=>{
                return `Delete ${item.type} with name "${item.name}"?`
            },
            canNotDelete: (item,usedByObjects)=>{
                let usedByStr = usedByObjects? usedByObjects.map((it)=>{
                    return `${it.type}:${it.name}`;
                }).join(','):'';
                return `Can not delete ${item.type} with name "${item.name}", it's used by other objects ${usedByStr?usedByStr:''}`
            },
            noGameObject: 'create at least one game object firstly',
            cancel:'cancel',
            assets:'assets',
            addSpriteSheet:'add sprite sheet',
            loadImage:'load image',
            gameObjects:'game objects',
            gameObject:'gameObject',
            create:'create',
            edit:'edit',
            close:'close',
            name:'name',
            actions: 'actions',
            scaleStrategy:'scale strategy',
            spriteSheets:'sprite sheets',
            width:'width',
            height:'height',
            currFrameIndex:'current frame index',
            currGameObject: 'current gameObject',
            currScene: 'current scene',
            spriteSheet: 'sprite sheet',
            numOfFramesH: 'num of frames horizontally',
            numOfFramesV: 'num of frames vertically',
            image: 'image',
            frAnimations:'frame animations',
            duration:'duration, msec',
            frames:'frames (i.e 1,2,3)',
            playAnim:'play animation',
            stopAnim:'stop animation',
            saveObjectFirst:'save object first',
            all: 'all',
            step: 'step',
            game:'game',
            editThisGameObject:'edit this game object',
            deleteThisGameObject:'delete this game object',
            scenes:'scenes',
            scene:'scene',
            run:'run',
            layers: 'layers',
            layer:'layer',
            debug: 'debug',
            minify:'minify',
            windowed:'windowed',
            embedResources: 'embed resources',
            stop: 'stop',
            addGameObject:'add game object',
            nothingToAdd:'nothing to add',
            from:'from',
            to:'to',
            fonts:'fonts',
            font:'font',
            text:'text',
            commonBehaviour:'common behaviour',
            unselect: 'unselect',
            groupName:'group name',
            noFont: 'Create at least one font firstly',
            selectFont:'select font',
            isDefault: 'is default',
            fontSize:'font size',
            fontColor:'font color',
            userInterface:'user interface',
            textField:'text field',
            noDataToEdit:'no data to edit provided',
            rigid:'rigid',
            sounds:'sounds',
            play:'play',
            loadSound:'load sound',
            build:'build',
            particleSystems:'particle systems',
            particleSystem:'particle system',
            preview:'preview',
            explorer:'explorer',
            description: 'description',
            colorBG:'scene background color',
            useBG:'use background color',
            angle:'angle',
            tileMap: 'tile map',
            noScene: 'create at least one scene',
            sceneNotSelected: 'select scene to drop object',
            noLayer: 'create at least one layer of current scene',
            selected: 'selected',
            notSelected: 'not selected',
            fixedToCamera:'fixed to camera',
            preloadingScene: 'preloading scene',
            startScene: 'start scene',
            projects: 'projects',
            objectAlreadyAdded: 'object is already added',
            popupBlocked: 'popup window is blocked by browser',
            tryAgain: 'try again',
            unset: 'unset',
            gravityConstant: 'gravity constant',
            gravityConstantTitle: 'acceleration in pixels per second',
            scripts: 'scripts',
            collideWith: 'collide with'
        }
    };

    static setLocale(name:string){
        I18n.locale = name;
    }


    static get(key){
        return I18n.bundle[I18n.locale][key];
    }

    static getAll(){
        return I18n.bundle[I18n.locale];
    }

}
