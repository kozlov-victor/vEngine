'use strict';

window.app

    .factory('i18n', function () {
        var _i18n = {};

        _i18n.locale = 'en';

        _i18n.bundle = {
            'en': {
                assets:'assets',
                addSpriteSheet:'add sprite sheet',
                loadImage:'load image',
                gameObjects:'game objects',
                gameObject:'gameObject',
                create:'create',
                edit:'edit',
                close:'close',
                name:'name',
                scaleToFullScreen:'scale to full screen',
                spriteSheers:'sprite sheets',
                width:'width',
                height:'height',
                currFrameIndex:'current frame index',
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
                game:'game',
                editThisGameObject:'edit this game object',
                deleteThisGameObject:'delete this game object',
                scenes:'scenes',
                scene:'scene',
                run:'run',
                layers: 'layers',
                layer:'layer',
                debug: 'debug',
                stop: 'stop',
                addGameObject:'add game object',
                nothingToAdd:'nothing to add',
                from:'from',
                to:'to',
                fonts:'fonts',
                font:'font',
                text:'text',
                commonBehaviour:'common behaviour',
                groupName:'group name',
                selectFont:'select font',
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
                explorer:'Project explorer'
            }
        };

        _i18n.setLocate = function(_locale){
            _i18n.locale = _locale;
        };

        _i18n.get = function(key){
            return _i18n.bundle[_i18n.locale][key];
        };

        _i18n.getAll = function(){
            return _i18n.bundle[_i18n.locale];
        };
        return _i18n;
    });

