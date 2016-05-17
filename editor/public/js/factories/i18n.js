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
                create:'create',
                edit:'edit',
                name:'name',
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
                scenes:'scenes',
                run:'run'
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

