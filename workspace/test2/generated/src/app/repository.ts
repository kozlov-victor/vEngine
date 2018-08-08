export let repository:any = 
	{
    "Scene": [
        {
            "id": 2,
            "name": "mainScene",
            "type": "Scene",
            "layers": [
                {
                    "type": "Layer",
                    "id": 2
                }
            ]
        }
    ],
    "Layer": [
        {
            "id": 2,
            "name": "layer1",
            "pos": {
                "x": 0,
                "y": 0
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "rotatePivot": {
                "x": 0,
                "y": 0
            },
            "type": "Layer",
            "gameObjects": [
                {
                    "type": "GameObject",
                    "id": 9
                }
            ]
        }
    ],
    "SpriteSheet": [
        {
            "id": 3,
            "name": "helicopterHead",
            "width": 246,
            "height": 400,
            "pos": {
                "x": 0,
                "y": 0
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "rotatePivot": {
                "x": 0,
                "y": 0
            },
            "resourceMap": {
                "main": "resources/helicopterHead.png"
            },
            "type": "SpriteSheet",
            "numOfFramesH": 5,
            "numOfFramesV": 6,
            "frameRect": {
                "x": {
                    "x": 0,
                    "y": 0,
                    "width": 0,
                    "height": 0
                }
            }
        },
        {
            "name": "sceleton",
            "width": 576,
            "height": 256,
            "pos": {
                "x": 0,
                "y": 0
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "rotatePivot": {
                "x": 0,
                "y": 0
            },
            "resourceMap": {
                "main": "resources/sceleton.png"
            },
            "type": "SpriteSheet",
            "numOfFramesH": 9,
            "numOfFramesV": 4,
            "frameRect": {
                "x": 0,
                "y": 0,
                "width": 0,
                "height": 0
            },
            "id": 6
        }
    ],
    "GameObjectProto": [
        {
            "id": 4,
            "name": "helicopterHead",
            "width": 49,
            "height": 66,
            "pos": {
                "x": 0,
                "y": 0
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "rotatePivot": {
                "x": 0,
                "y": 0
            },
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 3,
                "type": "SpriteSheet"
            },
            "frameAnimations": [
                {
                    "type": "FrameAnimation",
                    "id": 5
                }
            ],
            "startFrameAnimationName": "ыы",
            "shaderMaterial": {
                "shininess": 10
            }
        },
        {
            "id": 7,
            "name": "sceleton",
            "width": 64,
            "height": 64,
            "pos": {
                "x": 0,
                "y": 0
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "rotatePivot": {
                "x": 0,
                "y": 0
            },
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 6,
                "type": "SpriteSheet"
            },
            "frameAnimations": [
                {
                    "type": "FrameAnimation",
                    "id": 8
                }
            ],
            "startFrameAnimationName": "goUp",
            "shaderMaterial": {
                "shininess": 10
            }
        }
    ],
    "FrameAnimation": [
        {
            "name": "ыы",
            "type": "FrameAnimation",
            "frames": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29
            ],
            "id": 5
        },
        {
            "name": "goUp",
            "type": "FrameAnimation",
            "frames": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8
            ],
            "id": 8
        }
    ],
    "GameObject": [
        {
            "pos": {
                "x": 47,
                "y": 164
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "rotatePivot": {
                "x": 0,
                "y": 0
            },
            "layerId": 2,
            "type": "GameObject",
            "shaderMaterial": {
                "shininess": 10
            },
            "gameObjectProto": {
                "id": 7,
                "type": "GameObjectProto"
            },
            "id": 9
        }
    ]
};