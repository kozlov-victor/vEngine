class Compressor {

    static _traverse(obj, dictKeys, keyHolder, callback) {
        if (obj == null) return null;
        if (Object.prototype.toString.call(obj) === '[object Array]') {
            let out = [], i = 0, len = obj.length;
            for (; i < len; i++) {
                out[i] = Compressor._traverse(obj[i], dictKeys, keyHolder, callback);
            }
            return out;
        }
        else if (typeof obj === 'object') {
            let out = {};
            for (let i in obj) {
                let newKey = callback(i, out, dictKeys, keyHolder);
                out[newKey] = Compressor._traverse(obj[i], dictKeys, keyHolder, callback);
            }
            return out;
        }
        return obj;
    }

    static compressJSON(obj) {
        let dictKeys = {};
        let keyHolder = {cnt: 0};
        obj = Compressor._traverse(obj, dictKeys, keyHolder, (i, out, dict, keyHolder) => {
            let compressedKey = i;
            if (compressedKey.length > 1) {
                if (dict[i]) compressedKey = dict[compressedKey];
                else {
                    compressedKey = `_${keyHolder.cnt++}`;
                    dict[i] = compressedKey;
                }
            }
            return compressedKey;
        });
        let dictReversed = {};
        Object.keys(dictKeys).forEach(key => {
            dictReversed[dictKeys[key]] = key;
        });
        return {d: dictReversed, o: obj};
    }

    static decompressJSON(json) {
        let dict = json.d;
        let obj = json.o;
        obj = Compressor._traverse(obj, dict, undefined, (compressedKey, out, dict, keyHolder) => {
            return dict[compressedKey];
        });
        return obj;
    }

}

let r = {
    "SpriteSheet": [
        {
            "id": "1102_0974_3",
            "type": "SpriteSheet",
            "name": "board",
            "width": 777,
            "height": 480,
            "numOfFramesH": 1,
            "numOfFramesV": 1,
            "resourcePath": "resources/board.svg"
        },
        {
            "type": "SpriteSheet",
            "name": "lcdPixel",
            "width": 5,
            "height": 5,
            "numOfFramesH": 1,
            "numOfFramesV": 1,
            "resourcePath": "resources/lcdPixel.svg",
            "id": "1189_3427_0"
        },
        {
            "type": "SpriteSheet",
            "name": "1",
            "width": 50,
            "height": 50,
            "numOfFramesH": 1,
            "numOfFramesV": 1,
            "resourcePath": "resources/1.svg",
            "id": "7884_4081_0"
        },
        {
            "type": "SpriteSheet",
            "name": "2",
            "width": 50,
            "height": 50,
            "numOfFramesH": 1,
            "numOfFramesV": 1,
            "resourcePath": "resources/2.svg",
            "id": "9985_7697_4"
        },
        {
            "type": "SpriteSheet",
            "name": "3",
            "width": 50,
            "height": 50,
            "numOfFramesH": 1,
            "numOfFramesV": 1,
            "resourcePath": "resources/3.svg",
            "id": "0815_8645_7"
        },
        {
            "type": "SpriteSheet",
            "name": "4",
            "width": 50,
            "height": 50,
            "numOfFramesH": 1,
            "numOfFramesV": 1,
            "resourcePath": "resources/4.svg",
            "id": "1960_4906_10"
        },
        {
            "type": "SpriteSheet",
            "name": "5",
            "width": 50,
            "height": 50,
            "numOfFramesH": 1,
            "numOfFramesV": 1,
            "resourcePath": "resources/5.svg",
            "id": "4622_3988_13"
        },
        {
            "type": "SpriteSheet",
            "name": "6",
            "width": 50,
            "height": 50,
            "numOfFramesH": 1,
            "numOfFramesV": 1,
            "resourcePath": "resources/6.svg",
            "id": "3956_5639_16"
        }
    ],
    "GameObjectProto": [
        {
            "type": "GameObjectProto",
            "name": "board",
            "width": 777,
            "height": 480,
            "spriteSheet": {
                "id": "1102_0974_3",
                "type": "SpriteSheet"
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "vel": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 0,
                "y": 0
            },
            "angle": 0,
            "alpha": 1,
            "rigid": false,
            "commonBehaviour": [],
            "currFrameIndex": 0,
            "frameAnimations": [],
            "tileOffset": {
                "x": 0,
                "y": 0
            },
            "tileRepeat": false,
            "groupName": "",
            "id": "7485_3139_4"
        },
        {
            "id": "6180_3199_1",
            "type": "GameObjectProto",
            "name": "lcdPixel",
            "width": 5,
            "height": 5,
            "spriteSheet": {
                "id": "1189_3427_0",
                "type": "SpriteSheet"
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "vel": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 0,
                "y": 0
            },
            "angle": 0,
            "alpha": 1,
            "rigid": false,
            "commonBehaviour": [],
            "currFrameIndex": 0,
            "frameAnimations": [],
            "tileOffset": {
                "x": 0,
                "y": 0
            },
            "tileRepeat": false,
            "groupName": ""
        },
        {
            "type": "GameObjectProto",
            "name": "connection_1",
            "width": 50,
            "height": 50,
            "spriteSheet": {
                "id": "7884_4081_0",
                "type": "SpriteSheet"
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "vel": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 0,
                "y": 0
            },
            "angle": 0,
            "alpha": 1,
            "rigid": false,
            "commonBehaviour": [],
            "currFrameIndex": 0,
            "frameAnimations": [],
            "tileOffset": {
                "x": 0,
                "y": 0
            },
            "tileRepeat": false,
            "groupName": "",
            "id": "0572_9521_1"
        },
        {
            "type": "GameObjectProto",
            "name": "connection_2",
            "width": 50,
            "height": 50,
            "spriteSheet": {
                "id": "9985_7697_4",
                "type": "SpriteSheet"
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "vel": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 0,
                "y": 0
            },
            "angle": 0,
            "alpha": 1,
            "rigid": false,
            "commonBehaviour": [],
            "currFrameIndex": 0,
            "frameAnimations": [],
            "tileOffset": {
                "x": 0,
                "y": 0
            },
            "tileRepeat": false,
            "groupName": "",
            "id": "8545_9582_5"
        },
        {
            "type": "GameObjectProto",
            "name": "connection_3",
            "width": 50,
            "height": 50,
            "spriteSheet": {
                "id": "0815_8645_7",
                "type": "SpriteSheet"
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "vel": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 0,
                "y": 0
            },
            "angle": 0,
            "alpha": 1,
            "rigid": false,
            "commonBehaviour": [],
            "currFrameIndex": 0,
            "frameAnimations": [],
            "tileOffset": {
                "x": 0,
                "y": 0
            },
            "tileRepeat": false,
            "groupName": "",
            "id": "9738_8420_8"
        },
        {
            "type": "GameObjectProto",
            "name": "connection_4",
            "width": 50,
            "height": 50,
            "spriteSheet": {
                "id": "1960_4906_10",
                "type": "SpriteSheet"
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "vel": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 0,
                "y": 0
            },
            "angle": 0,
            "alpha": 1,
            "rigid": false,
            "commonBehaviour": [],
            "currFrameIndex": 0,
            "frameAnimations": [],
            "tileOffset": {
                "x": 0,
                "y": 0
            },
            "tileRepeat": false,
            "groupName": "",
            "id": "1430_8142_11"
        },
        {
            "type": "GameObjectProto",
            "name": "connection_5",
            "width": 50,
            "height": 50,
            "spriteSheet": {
                "id": "4622_3988_13",
                "type": "SpriteSheet"
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "vel": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 0,
                "y": 0
            },
            "angle": 0,
            "alpha": 1,
            "rigid": false,
            "commonBehaviour": [],
            "currFrameIndex": 0,
            "frameAnimations": [],
            "tileOffset": {
                "x": 0,
                "y": 0
            },
            "tileRepeat": false,
            "groupName": "",
            "id": "2903_6847_14"
        },
        {
            "type": "GameObjectProto",
            "name": "connection_6",
            "width": 50,
            "height": 50,
            "spriteSheet": {
                "id": "3956_5639_16",
                "type": "SpriteSheet"
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "vel": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 0,
                "y": 0
            },
            "angle": 0,
            "alpha": 1,
            "rigid": false,
            "commonBehaviour": [],
            "currFrameIndex": 0,
            "frameAnimations": [],
            "tileOffset": {
                "x": 0,
                "y": 0
            },
            "tileRepeat": false,
            "groupName": "",
            "id": "8341_8350_17"
        }
    ],
    "Scene": [
        {
            "id": "4366_4501_5",
            "type": "Scene",
            "name": "gameScene",
            "alpha": 1,
            "layers": [
                {
                    "type": "Layer",
                    "id": "7154_2119_6"
                }
            ],
            "useBG": false,
            "colorBG": {
                "r": 255,
                "g": 255,
                "b": 255
            }
        }
    ],
    "Layer": [
        {
            "id": "7154_2119_6",
            "type": "Layer",
            "name": "l1",
            "gameObjects": [
                {
                    "type": "GameObject",
                    "id": "8011_6083_7"
                },
                {
                    "type": "GameObject",
                    "id": "3103_3883_0"
                },
                {
                    "type": "GameObject",
                    "id": "4646_4006_2"
                },
                {
                    "type": "GameObject",
                    "id": "5199_4352_3"
                },
                {
                    "type": "GameObject",
                    "id": "0971_5408_6"
                },
                {
                    "type": "GameObject",
                    "id": "3537_1474_9"
                },
                {
                    "type": "GameObject",
                    "id": "6751_1045_12"
                },
                {
                    "type": "GameObject",
                    "id": "6265_2400_15"
                },
                {
                    "type": "GameObject",
                    "id": "8082_2097_18"
                }
            ]
        }
    ],
    "GameObject": [
        {
            "id": "8011_6083_7",
            "type": "GameObject",
            "name": "board",
            "width": 777,
            "height": 480,
            "spriteSheet": {
                "id": "1102_0974_3",
                "type": "SpriteSheet"
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "vel": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 10,
                "y": 33
            },
            "angle": 0,
            "alpha": 1,
            "rigid": false,
            "commonBehaviour": [],
            "currFrameIndex": 0,
            "frameAnimations": [],
            "tileOffset": {
                "x": 0,
                "y": 0
            },
            "tileRepeat": false,
            "groupName": "",
            "layerId": "7154_2119_6"
        },
        {
            "id": "3103_3883_0",
            "type": "GameObject",
            "name": "lcdPixel",
            "width": 5,
            "height": "5",
            "spriteSheet": {
                "id": "1189_3427_0",
                "type": "SpriteSheet"
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "vel": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 1,
                "y": 2
            },
            "angle": 0,
            "alpha": 0,
            "rigid": false,
            "commonBehaviour": [],
            "currFrameIndex": 0,
            "frameAnimations": [],
            "tileOffset": {
                "x": 0,
                "y": 0
            },
            "tileRepeat": false,
            "groupName": "",
            "layerId": "7154_2119_6"
        },
        {
            "id": "4646_4006_2",
            "type": "GameObject",
            "name": "connection_1",
            "width": 50,
            "height": 50,
            "spriteSheet": {
                "id": "7884_4081_0",
                "type": "SpriteSheet"
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "vel": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 80,
                "y": 252
            },
            "angle": 0,
            "alpha": 1,
            "rigid": false,
            "commonBehaviour": [],
            "currFrameIndex": 0,
            "frameAnimations": [],
            "tileOffset": {
                "x": 0,
                "y": 0
            },
            "tileRepeat": false,
            "groupName": "",
            "layerId": "7154_2119_6"
        },
        {
            "id": "5199_4352_3",
            "type": "GameObject",
            "name": "connection_1",
            "width": 50,
            "height": 50,
            "spriteSheet": {
                "id": "7884_4081_0",
                "type": "SpriteSheet"
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "vel": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 130,
                "y": 252
            },
            "angle": 0,
            "alpha": 1,
            "rigid": false,
            "commonBehaviour": [],
            "currFrameIndex": 0,
            "frameAnimations": [],
            "tileOffset": {
                "x": 0,
                "y": 0
            },
            "tileRepeat": false,
            "groupName": "",
            "layerId": "7154_2119_6"
        },
        {
            "id": "0971_5408_6",
            "type": "GameObject",
            "name": "connection_2",
            "width": 50,
            "height": 50,
            "spriteSheet": {
                "id": "9985_7697_4",
                "type": "SpriteSheet"
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "vel": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 179,
                "y": 252
            },
            "angle": 0,
            "alpha": 1,
            "rigid": false,
            "commonBehaviour": [],
            "currFrameIndex": 0,
            "frameAnimations": [],
            "tileOffset": {
                "x": 0,
                "y": 0
            },
            "tileRepeat": false,
            "groupName": "",
            "layerId": "7154_2119_6"
        },
        {
            "id": "3537_1474_9",
            "type": "GameObject",
            "name": "connection_3",
            "width": 50,
            "height": 50,
            "spriteSheet": {
                "id": "0815_8645_7",
                "type": "SpriteSheet"
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "vel": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 228,
                "y": 252
            },
            "angle": 0,
            "alpha": 1,
            "rigid": false,
            "commonBehaviour": [],
            "currFrameIndex": 0,
            "frameAnimations": [],
            "tileOffset": {
                "x": 0,
                "y": 0
            },
            "tileRepeat": false,
            "groupName": "",
            "layerId": "7154_2119_6"
        },
        {
            "id": "6751_1045_12",
            "type": "GameObject",
            "name": "connection_4",
            "width": 50,
            "height": 50,
            "spriteSheet": {
                "id": "1960_4906_10",
                "type": "SpriteSheet"
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "vel": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 278,
                "y": 252
            },
            "angle": 0,
            "alpha": 1,
            "rigid": false,
            "commonBehaviour": [],
            "currFrameIndex": 0,
            "frameAnimations": [],
            "tileOffset": {
                "x": 0,
                "y": 0
            },
            "tileRepeat": false,
            "groupName": "",
            "layerId": "7154_2119_6"
        },
        {
            "id": "6265_2400_15",
            "type": "GameObject",
            "name": "connection_5",
            "width": 50,
            "height": 50,
            "spriteSheet": {
                "id": "4622_3988_13",
                "type": "SpriteSheet"
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "vel": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 327,
                "y": 252
            },
            "angle": 0,
            "alpha": 1,
            "rigid": false,
            "commonBehaviour": [],
            "currFrameIndex": 0,
            "frameAnimations": [],
            "tileOffset": {
                "x": 0,
                "y": 0
            },
            "tileRepeat": false,
            "groupName": "",
            "layerId": "7154_2119_6"
        },
        {
            "id": "8082_2097_18",
            "type": "GameObject",
            "name": "connection_6",
            "width": 50,
            "height": 50,
            "spriteSheet": {
                "id": "3956_5639_16",
                "type": "SpriteSheet"
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "vel": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 377,
                "y": 252
            },
            "angle": 0,
            "alpha": 1,
            "rigid": false,
            "commonBehaviour": [],
            "currFrameIndex": 0,
            "frameAnimations": [],
            "tileOffset": {
                "x": 0,
                "y": 0
            },
            "tileRepeat": false,
            "groupName": "",
            "layerId": "7154_2119_6"
        }
    ],
    "ParticleSystem": []
};

module.exports = Compressor;