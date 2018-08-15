export let repository:any = 
	{
    "Scene": [
        {
            "id": 2,
            "name": "introScene",
            "pos": {
                "x": 0,
                "y": 0
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "anchor": {
                "x": 0,
                "y": 0
            },
            "type": "Scene",
            "layers": [
                {
                    "type": "Layer",
                    "id": 2
                }
            ],
            "colorBG": {
                "r": 255,
                "g": 255,
                "b": 255,
                "a": 255
            },
            "tileMap": {
                "type": "TileMap",
                "data": [],
                "width": 0,
                "height": 0,
                "blendMode": ""
            },
            "ambientLight": {
                "intensity": 1,
                "game": {
                    "width": 1024,
                    "height": 600,
                    "gravityConstant": 0,
                    "scaleStrategy": 1,
                    "startSceneId": 2,
                    "preloadingSceneId": 0
                },
                "direction": [
                    1,
                    1,
                    1
                ]
            },
            "uiLayer": {
                "width": 0,
                "height": 0,
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "scale": {
                    "x": 1,
                    "y": 1
                },
                "anchor": {
                    "x": 0,
                    "y": 0
                },
                "angle": 0,
                "alpha": 1,
                "fixedToCamera": false,
                "rigid": false,
                "type": "Layer",
                "children": []
            }
        },
        {
            "id": 13,
            "name": "gameScene",
            "pos": {
                "x": 0,
                "y": 0
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "anchor": {
                "x": 0,
                "y": 0
            },
            "type": "Scene",
            "layers": [
                {
                    "type": "Layer",
                    "id": 14
                }
            ],
            "colorBG": {
                "r": 255,
                "g": 255,
                "b": 255,
                "a": 255
            },
            "tileMap": {
                "type": "TileMap",
                "data": [],
                "width": 0,
                "height": 0,
                "blendMode": ""
            },
            "ambientLight": {
                "intensity": 1,
                "game": {
                    "width": 1024,
                    "height": 600,
                    "gravityConstant": 0,
                    "scaleStrategy": 1,
                    "startSceneId": 2,
                    "preloadingSceneId": 0
                },
                "direction": [
                    1,
                    1,
                    1
                ]
            },
            "uiLayer": {
                "width": 0,
                "height": 0,
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "scale": {
                    "x": 1,
                    "y": 1
                },
                "anchor": {
                    "x": 0,
                    "y": 0
                },
                "angle": 0,
                "alpha": 1,
                "filters": [],
                "acceptLight": false,
                "fixedToCamera": false,
                "rigid": false,
                "type": "Layer",
                "children": []
            }
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
            "anchor": {
                "x": 0,
                "y": 0
            },
            "type": "Layer"
        },
        {
            "name": "mainLayer",
            "pos": {
                "x": 0,
                "y": 0
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "anchor": {
                "x": 0,
                "y": 0
            },
            "type": "Layer",
            "id": 14
        }
    ],
    "SpriteSheet": [
        {
            "name": "button",
            "width": 400,
            "height": 77,
            "pos": {
                "x": 0,
                "y": 0
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "anchor": {
                "x": 0,
                "y": 0
            },
            "resourceMap": {
                "main": "resources/button.png"
            },
            "type": "SpriteSheet",
            "frameRect": {
                "x": 0,
                "y": 0,
                "width": 0,
                "height": 0
            },
            "id": 5
        },
        {
            "name": "bg",
            "width": 650,
            "height": 483,
            "pos": {
                "x": 0,
                "y": 0
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "anchor": {
                "x": 0,
                "y": 0
            },
            "resourceMap": {
                "main": "resources/bg.jpg"
            },
            "type": "SpriteSheet",
            "frameRect": {
                "x": 0,
                "y": 0,
                "width": 0,
                "height": 0
            },
            "id": 10
        },
        {
            "name": "pirate-flag",
            "width": 640,
            "height": 640,
            "pos": {
                "x": 0,
                "y": 0
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "anchor": {
                "x": 0,
                "y": 0
            },
            "resourceMap": {
                "main": "resources/pirate-flag.png"
            },
            "type": "SpriteSheet",
            "frameRect": {
                "x": 0,
                "y": 0,
                "width": 0,
                "height": 0
            },
            "id": 11
        }
    ],
    "GameObjectProto": [
        {
            "name": "button",
            "width": 400,
            "height": 77,
            "pos": {
                "x": 0,
                "y": 0
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "anchor": {
                "x": 0,
                "y": 0
            },
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 5,
                "type": "SpriteSheet"
            },
            "shaderMaterial": {
                "shininess": 10
            },
            "velocity": {
                "x": 0,
                "y": 0
            },
            "id": 6
        }
    ],
    "GameObject": [
        {
            "id": 7,
            "name": "button",
            "pos": {
                "x": 313,
                "y": 428
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 6,
                "type": "GameObjectProto"
            }
        }
    ],
    "Font": [
        {
            "id": 8,
            "name": "scriptFont",
            "pos": {
                "x": 0,
                "y": 0
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "anchor": {
                "x": 0,
                "y": 0
            },
            "resourceMap": {
                "main": "resources/scriptFont.png"
            },
            "type": "Font",
            "fontSize": 64,
            "fontFamily": "Classic Console",
            "fontContext": {
                "symbols": {
                    "0": {
                        "x": 235,
                        "y": 62,
                        "width": 25,
                        "height": 50
                    },
                    "1": {
                        "x": 268,
                        "y": 62,
                        "width": 25,
                        "height": 50
                    },
                    "2": {
                        "x": 4,
                        "y": 120,
                        "width": 25,
                        "height": 50
                    },
                    "3": {
                        "x": 37,
                        "y": 120,
                        "width": 25,
                        "height": 50
                    },
                    "4": {
                        "x": 70,
                        "y": 120,
                        "width": 25,
                        "height": 50
                    },
                    "5": {
                        "x": 103,
                        "y": 120,
                        "width": 25,
                        "height": 50
                    },
                    "6": {
                        "x": 136,
                        "y": 120,
                        "width": 25,
                        "height": 50
                    },
                    "7": {
                        "x": 169,
                        "y": 120,
                        "width": 25,
                        "height": 50
                    },
                    "8": {
                        "x": 202,
                        "y": 120,
                        "width": 25,
                        "height": 50
                    },
                    "9": {
                        "x": 235,
                        "y": 120,
                        "width": 25,
                        "height": 50
                    },
                    " ": {
                        "x": 4,
                        "y": 4,
                        "width": 25,
                        "height": 50
                    },
                    "!": {
                        "x": 37,
                        "y": 4,
                        "width": 25,
                        "height": 50
                    },
                    "\"": {
                        "x": 70,
                        "y": 4,
                        "width": 25,
                        "height": 50
                    },
                    "#": {
                        "x": 103,
                        "y": 4,
                        "width": 25,
                        "height": 50
                    },
                    "$": {
                        "x": 136,
                        "y": 4,
                        "width": 25,
                        "height": 50
                    },
                    "%": {
                        "x": 169,
                        "y": 4,
                        "width": 25,
                        "height": 50
                    },
                    "&": {
                        "x": 202,
                        "y": 4,
                        "width": 25,
                        "height": 50
                    },
                    "'": {
                        "x": 235,
                        "y": 4,
                        "width": 25,
                        "height": 50
                    },
                    "(": {
                        "x": 268,
                        "y": 4,
                        "width": 25,
                        "height": 50
                    },
                    ")": {
                        "x": 4,
                        "y": 62,
                        "width": 25,
                        "height": 50
                    },
                    "*": {
                        "x": 37,
                        "y": 62,
                        "width": 25,
                        "height": 50
                    },
                    "+": {
                        "x": 70,
                        "y": 62,
                        "width": 25,
                        "height": 50
                    },
                    ",": {
                        "x": 103,
                        "y": 62,
                        "width": 25,
                        "height": 50
                    },
                    "-": {
                        "x": 136,
                        "y": 62,
                        "width": 25,
                        "height": 50
                    },
                    ".": {
                        "x": 169,
                        "y": 62,
                        "width": 25,
                        "height": 50
                    },
                    "/": {
                        "x": 202,
                        "y": 62,
                        "width": 25,
                        "height": 50
                    },
                    ":": {
                        "x": 268,
                        "y": 120,
                        "width": 25,
                        "height": 50
                    },
                    ";": {
                        "x": 4,
                        "y": 178,
                        "width": 25,
                        "height": 50
                    },
                    "<": {
                        "x": 37,
                        "y": 178,
                        "width": 25,
                        "height": 50
                    },
                    "=": {
                        "x": 70,
                        "y": 178,
                        "width": 25,
                        "height": 50
                    },
                    ">": {
                        "x": 103,
                        "y": 178,
                        "width": 25,
                        "height": 50
                    },
                    "?": {
                        "x": 136,
                        "y": 178,
                        "width": 25,
                        "height": 50
                    },
                    "@": {
                        "x": 169,
                        "y": 178,
                        "width": 25,
                        "height": 50
                    },
                    "A": {
                        "x": 202,
                        "y": 178,
                        "width": 25,
                        "height": 50
                    },
                    "B": {
                        "x": 235,
                        "y": 178,
                        "width": 25,
                        "height": 50
                    },
                    "C": {
                        "x": 268,
                        "y": 178,
                        "width": 25,
                        "height": 50
                    },
                    "D": {
                        "x": 4,
                        "y": 236,
                        "width": 25,
                        "height": 50
                    },
                    "E": {
                        "x": 37,
                        "y": 236,
                        "width": 25,
                        "height": 50
                    },
                    "F": {
                        "x": 70,
                        "y": 236,
                        "width": 25,
                        "height": 50
                    },
                    "G": {
                        "x": 103,
                        "y": 236,
                        "width": 25,
                        "height": 50
                    },
                    "H": {
                        "x": 136,
                        "y": 236,
                        "width": 25,
                        "height": 50
                    },
                    "I": {
                        "x": 169,
                        "y": 236,
                        "width": 25,
                        "height": 50
                    },
                    "J": {
                        "x": 202,
                        "y": 236,
                        "width": 25,
                        "height": 50
                    },
                    "K": {
                        "x": 235,
                        "y": 236,
                        "width": 25,
                        "height": 50
                    },
                    "L": {
                        "x": 268,
                        "y": 236,
                        "width": 25,
                        "height": 50
                    },
                    "M": {
                        "x": 4,
                        "y": 294,
                        "width": 25,
                        "height": 50
                    },
                    "N": {
                        "x": 37,
                        "y": 294,
                        "width": 25,
                        "height": 50
                    },
                    "O": {
                        "x": 70,
                        "y": 294,
                        "width": 25,
                        "height": 50
                    },
                    "P": {
                        "x": 103,
                        "y": 294,
                        "width": 25,
                        "height": 50
                    },
                    "Q": {
                        "x": 136,
                        "y": 294,
                        "width": 25,
                        "height": 50
                    },
                    "R": {
                        "x": 169,
                        "y": 294,
                        "width": 25,
                        "height": 50
                    },
                    "S": {
                        "x": 202,
                        "y": 294,
                        "width": 25,
                        "height": 50
                    },
                    "T": {
                        "x": 235,
                        "y": 294,
                        "width": 25,
                        "height": 50
                    },
                    "U": {
                        "x": 268,
                        "y": 294,
                        "width": 25,
                        "height": 50
                    },
                    "V": {
                        "x": 4,
                        "y": 352,
                        "width": 25,
                        "height": 50
                    },
                    "W": {
                        "x": 37,
                        "y": 352,
                        "width": 25,
                        "height": 50
                    },
                    "X": {
                        "x": 70,
                        "y": 352,
                        "width": 25,
                        "height": 50
                    },
                    "Y": {
                        "x": 103,
                        "y": 352,
                        "width": 25,
                        "height": 50
                    },
                    "Z": {
                        "x": 136,
                        "y": 352,
                        "width": 25,
                        "height": 50
                    },
                    "[": {
                        "x": 169,
                        "y": 352,
                        "width": 25,
                        "height": 50
                    },
                    "\\": {
                        "x": 202,
                        "y": 352,
                        "width": 25,
                        "height": 50
                    },
                    "]": {
                        "x": 235,
                        "y": 352,
                        "width": 25,
                        "height": 50
                    },
                    "^": {
                        "x": 268,
                        "y": 352,
                        "width": 25,
                        "height": 50
                    },
                    "_": {
                        "x": 4,
                        "y": 410,
                        "width": 25,
                        "height": 50
                    },
                    "`": {
                        "x": 37,
                        "y": 410,
                        "width": 25,
                        "height": 50
                    },
                    "a": {
                        "x": 70,
                        "y": 410,
                        "width": 25,
                        "height": 50
                    },
                    "b": {
                        "x": 103,
                        "y": 410,
                        "width": 25,
                        "height": 50
                    },
                    "c": {
                        "x": 136,
                        "y": 410,
                        "width": 25,
                        "height": 50
                    },
                    "d": {
                        "x": 169,
                        "y": 410,
                        "width": 25,
                        "height": 50
                    },
                    "e": {
                        "x": 202,
                        "y": 410,
                        "width": 25,
                        "height": 50
                    },
                    "f": {
                        "x": 235,
                        "y": 410,
                        "width": 25,
                        "height": 50
                    },
                    "g": {
                        "x": 268,
                        "y": 410,
                        "width": 25,
                        "height": 50
                    },
                    "h": {
                        "x": 4,
                        "y": 468,
                        "width": 25,
                        "height": 50
                    },
                    "i": {
                        "x": 37,
                        "y": 468,
                        "width": 25,
                        "height": 50
                    },
                    "j": {
                        "x": 70,
                        "y": 468,
                        "width": 25,
                        "height": 50
                    },
                    "k": {
                        "x": 103,
                        "y": 468,
                        "width": 25,
                        "height": 50
                    },
                    "l": {
                        "x": 136,
                        "y": 468,
                        "width": 25,
                        "height": 50
                    },
                    "m": {
                        "x": 169,
                        "y": 468,
                        "width": 25,
                        "height": 50
                    },
                    "n": {
                        "x": 202,
                        "y": 468,
                        "width": 25,
                        "height": 50
                    },
                    "o": {
                        "x": 235,
                        "y": 468,
                        "width": 25,
                        "height": 50
                    },
                    "p": {
                        "x": 268,
                        "y": 468,
                        "width": 25,
                        "height": 50
                    },
                    "q": {
                        "x": 4,
                        "y": 526,
                        "width": 25,
                        "height": 50
                    },
                    "r": {
                        "x": 37,
                        "y": 526,
                        "width": 25,
                        "height": 50
                    },
                    "s": {
                        "x": 70,
                        "y": 526,
                        "width": 25,
                        "height": 50
                    },
                    "t": {
                        "x": 103,
                        "y": 526,
                        "width": 25,
                        "height": 50
                    },
                    "u": {
                        "x": 136,
                        "y": 526,
                        "width": 25,
                        "height": 50
                    },
                    "v": {
                        "x": 169,
                        "y": 526,
                        "width": 25,
                        "height": 50
                    },
                    "w": {
                        "x": 202,
                        "y": 526,
                        "width": 25,
                        "height": 50
                    },
                    "x": {
                        "x": 235,
                        "y": 526,
                        "width": 25,
                        "height": 50
                    },
                    "y": {
                        "x": 268,
                        "y": 526,
                        "width": 25,
                        "height": 50
                    },
                    "z": {
                        "x": 4,
                        "y": 584,
                        "width": 25,
                        "height": 50
                    },
                    "{": {
                        "x": 37,
                        "y": 584,
                        "width": 25,
                        "height": 50
                    },
                    "|": {
                        "x": 70,
                        "y": 584,
                        "width": 25,
                        "height": 50
                    },
                    "}": {
                        "x": 103,
                        "y": 584,
                        "width": 25,
                        "height": 50
                    },
                    "~": {
                        "x": 136,
                        "y": 584,
                        "width": 25,
                        "height": 50
                    },
                    "": {
                        "x": 169,
                        "y": 584,
                        "width": 32,
                        "height": 50
                    },
                    "": {
                        "x": 209,
                        "y": 584,
                        "width": 0,
                        "height": 50
                    },
                    "": {
                        "x": 217,
                        "y": 584,
                        "width": 0,
                        "height": 50
                    },
                    "": {
                        "x": 225,
                        "y": 584,
                        "width": 32,
                        "height": 50
                    },
                    "": {
                        "x": 265,
                        "y": 584,
                        "width": 32,
                        "height": 50
                    },
                    "": {
                        "x": 4,
                        "y": 642,
                        "width": 32,
                        "height": 50
                    },
                    "": {
                        "x": 44,
                        "y": 642,
                        "width": 50,
                        "height": 50
                    },
                    "": {
                        "x": 102,
                        "y": 642,
                        "width": 32,
                        "height": 50
                    },
                    "": {
                        "x": 142,
                        "y": 642,
                        "width": 32,
                        "height": 50
                    },
                    "": {
                        "x": 182,
                        "y": 642,
                        "width": 23,
                        "height": 50
                    },
                    "": {
                        "x": 213,
                        "y": 642,
                        "width": 50,
                        "height": 50
                    },
                    "": {
                        "x": 271,
                        "y": 642,
                        "width": 30,
                        "height": 50
                    },
                    "": {
                        "x": 4,
                        "y": 700,
                        "width": 32,
                        "height": 50
                    },
                    "": {
                        "x": 44,
                        "y": 700,
                        "width": 63,
                        "height": 50
                    },
                    "": {
                        "x": 115,
                        "y": 700,
                        "width": 0,
                        "height": 50
                    },
                    "": {
                        "x": 123,
                        "y": 700,
                        "width": 0,
                        "height": 50
                    },
                    "": {
                        "x": 131,
                        "y": 700,
                        "width": 0,
                        "height": 50
                    },
                    "": {
                        "x": 139,
                        "y": 700,
                        "width": 0,
                        "height": 50
                    },
                    "": {
                        "x": 147,
                        "y": 700,
                        "width": 12,
                        "height": 50
                    },
                    "": {
                        "x": 168,
                        "y": 700,
                        "width": 12,
                        "height": 50
                    },
                    "": {
                        "x": 189,
                        "y": 700,
                        "width": 26,
                        "height": 50
                    },
                    "": {
                        "x": 224,
                        "y": 700,
                        "width": 26,
                        "height": 50
                    },
                    "": {
                        "x": 259,
                        "y": 700,
                        "width": 0,
                        "height": 50
                    },
                    "А": {
                        "x": 267,
                        "y": 700,
                        "width": 25,
                        "height": 50
                    },
                    "Б": {
                        "x": 4,
                        "y": 758,
                        "width": 25,
                        "height": 50
                    },
                    "В": {
                        "x": 37,
                        "y": 758,
                        "width": 25,
                        "height": 50
                    },
                    "Г": {
                        "x": 70,
                        "y": 758,
                        "width": 25,
                        "height": 50
                    },
                    "Д": {
                        "x": 103,
                        "y": 758,
                        "width": 25,
                        "height": 50
                    },
                    "Е": {
                        "x": 136,
                        "y": 758,
                        "width": 25,
                        "height": 50
                    },
                    "Ж": {
                        "x": 169,
                        "y": 758,
                        "width": 25,
                        "height": 50
                    },
                    "З": {
                        "x": 202,
                        "y": 758,
                        "width": 25,
                        "height": 50
                    },
                    "И": {
                        "x": 235,
                        "y": 758,
                        "width": 25,
                        "height": 50
                    },
                    "Й": {
                        "x": 268,
                        "y": 758,
                        "width": 25,
                        "height": 50
                    },
                    "К": {
                        "x": 4,
                        "y": 816,
                        "width": 25,
                        "height": 50
                    },
                    "Л": {
                        "x": 37,
                        "y": 816,
                        "width": 25,
                        "height": 50
                    },
                    "М": {
                        "x": 70,
                        "y": 816,
                        "width": 25,
                        "height": 50
                    },
                    "Н": {
                        "x": 103,
                        "y": 816,
                        "width": 25,
                        "height": 50
                    },
                    "О": {
                        "x": 136,
                        "y": 816,
                        "width": 25,
                        "height": 50
                    },
                    "П": {
                        "x": 169,
                        "y": 816,
                        "width": 25,
                        "height": 50
                    },
                    "Р": {
                        "x": 202,
                        "y": 816,
                        "width": 25,
                        "height": 50
                    },
                    "С": {
                        "x": 235,
                        "y": 816,
                        "width": 25,
                        "height": 50
                    },
                    "Т": {
                        "x": 268,
                        "y": 816,
                        "width": 25,
                        "height": 50
                    },
                    "У": {
                        "x": 4,
                        "y": 874,
                        "width": 25,
                        "height": 50
                    },
                    "Ф": {
                        "x": 37,
                        "y": 874,
                        "width": 25,
                        "height": 50
                    },
                    "Х": {
                        "x": 70,
                        "y": 874,
                        "width": 25,
                        "height": 50
                    },
                    "Ц": {
                        "x": 103,
                        "y": 874,
                        "width": 25,
                        "height": 50
                    },
                    "Ч": {
                        "x": 136,
                        "y": 874,
                        "width": 25,
                        "height": 50
                    },
                    "Ш": {
                        "x": 169,
                        "y": 874,
                        "width": 25,
                        "height": 50
                    },
                    "Щ": {
                        "x": 202,
                        "y": 874,
                        "width": 25,
                        "height": 50
                    },
                    "Ъ": {
                        "x": 235,
                        "y": 874,
                        "width": 25,
                        "height": 50
                    },
                    "Ы": {
                        "x": 268,
                        "y": 874,
                        "width": 25,
                        "height": 50
                    },
                    "Ь": {
                        "x": 4,
                        "y": 932,
                        "width": 25,
                        "height": 50
                    },
                    "Э": {
                        "x": 37,
                        "y": 932,
                        "width": 25,
                        "height": 50
                    },
                    "Ю": {
                        "x": 70,
                        "y": 932,
                        "width": 25,
                        "height": 50
                    },
                    "Я": {
                        "x": 103,
                        "y": 932,
                        "width": 25,
                        "height": 50
                    },
                    "а": {
                        "x": 136,
                        "y": 932,
                        "width": 25,
                        "height": 50
                    },
                    "б": {
                        "x": 169,
                        "y": 932,
                        "width": 25,
                        "height": 50
                    },
                    "в": {
                        "x": 202,
                        "y": 932,
                        "width": 25,
                        "height": 50
                    },
                    "г": {
                        "x": 235,
                        "y": 932,
                        "width": 25,
                        "height": 50
                    },
                    "д": {
                        "x": 268,
                        "y": 932,
                        "width": 25,
                        "height": 50
                    },
                    "е": {
                        "x": 4,
                        "y": 990,
                        "width": 25,
                        "height": 50
                    },
                    "ж": {
                        "x": 37,
                        "y": 990,
                        "width": 25,
                        "height": 50
                    },
                    "з": {
                        "x": 70,
                        "y": 990,
                        "width": 25,
                        "height": 50
                    },
                    "и": {
                        "x": 103,
                        "y": 990,
                        "width": 25,
                        "height": 50
                    },
                    "й": {
                        "x": 136,
                        "y": 990,
                        "width": 25,
                        "height": 50
                    },
                    "к": {
                        "x": 169,
                        "y": 990,
                        "width": 25,
                        "height": 50
                    },
                    "л": {
                        "x": 202,
                        "y": 990,
                        "width": 25,
                        "height": 50
                    },
                    "м": {
                        "x": 235,
                        "y": 990,
                        "width": 25,
                        "height": 50
                    },
                    "н": {
                        "x": 268,
                        "y": 990,
                        "width": 25,
                        "height": 50
                    },
                    "о": {
                        "x": 4,
                        "y": 1048,
                        "width": 25,
                        "height": 50
                    },
                    "п": {
                        "x": 37,
                        "y": 1048,
                        "width": 25,
                        "height": 50
                    },
                    "р": {
                        "x": 70,
                        "y": 1048,
                        "width": 25,
                        "height": 50
                    },
                    "с": {
                        "x": 103,
                        "y": 1048,
                        "width": 25,
                        "height": 50
                    },
                    "т": {
                        "x": 136,
                        "y": 1048,
                        "width": 25,
                        "height": 50
                    },
                    "у": {
                        "x": 169,
                        "y": 1048,
                        "width": 25,
                        "height": 50
                    },
                    "ф": {
                        "x": 202,
                        "y": 1048,
                        "width": 25,
                        "height": 50
                    },
                    "х": {
                        "x": 235,
                        "y": 1048,
                        "width": 25,
                        "height": 50
                    },
                    "ц": {
                        "x": 268,
                        "y": 1048,
                        "width": 25,
                        "height": 50
                    },
                    "ч": {
                        "x": 4,
                        "y": 1106,
                        "width": 25,
                        "height": 50
                    },
                    "ш": {
                        "x": 37,
                        "y": 1106,
                        "width": 25,
                        "height": 50
                    },
                    "щ": {
                        "x": 70,
                        "y": 1106,
                        "width": 25,
                        "height": 50
                    },
                    "ъ": {
                        "x": 103,
                        "y": 1106,
                        "width": 25,
                        "height": 50
                    },
                    "ы": {
                        "x": 136,
                        "y": 1106,
                        "width": 25,
                        "height": 50
                    },
                    "ь": {
                        "x": 169,
                        "y": 1106,
                        "width": 25,
                        "height": 50
                    },
                    "э": {
                        "x": 202,
                        "y": 1106,
                        "width": 25,
                        "height": 50
                    },
                    "ю": {
                        "x": 235,
                        "y": 1106,
                        "width": 25,
                        "height": 50
                    },
                    "я": {
                        "x": 268,
                        "y": 1106,
                        "width": 25,
                        "height": 50
                    },
                    "ѐ": {
                        "x": 4,
                        "y": 1164,
                        "width": 25,
                        "height": 50
                    },
                    "ё": {
                        "x": 37,
                        "y": 1164,
                        "width": 25,
                        "height": 50
                    },
                    "ђ": {
                        "x": 70,
                        "y": 1164,
                        "width": 25,
                        "height": 50
                    },
                    "ѓ": {
                        "x": 103,
                        "y": 1164,
                        "width": 25,
                        "height": 50
                    },
                    "є": {
                        "x": 136,
                        "y": 1164,
                        "width": 25,
                        "height": 50
                    },
                    "ѕ": {
                        "x": 169,
                        "y": 1164,
                        "width": 25,
                        "height": 50
                    },
                    "і": {
                        "x": 202,
                        "y": 1164,
                        "width": 25,
                        "height": 50
                    },
                    "ї": {
                        "x": 235,
                        "y": 1164,
                        "width": 25,
                        "height": 50
                    },
                    "ј": {
                        "x": 268,
                        "y": 1164,
                        "width": 25,
                        "height": 50
                    },
                    "љ": {
                        "x": 4,
                        "y": 1222,
                        "width": 25,
                        "height": 50
                    },
                    "њ": {
                        "x": 37,
                        "y": 1222,
                        "width": 25,
                        "height": 50
                    },
                    "ћ": {
                        "x": 70,
                        "y": 1222,
                        "width": 25,
                        "height": 50
                    }
                },
                "width": 320,
                "height": 1276
            }
        },
        {
            "name": "cartahena_large",
            "pos": {
                "x": 0,
                "y": 0
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "anchor": {
                "x": 0,
                "y": 0
            },
            "resourceMap": {
                "main": "resources/cartahena_large.png"
            },
            "type": "Font",
            "fontSize": 56,
            "fontFamily": "Algerian",
            "fontContext": {
                "symbols": {
                    "0": {
                        "x": 211,
                        "y": 74,
                        "width": 32,
                        "height": 62
                    },
                    "1": {
                        "x": 252,
                        "y": 74,
                        "width": 33,
                        "height": 62
                    },
                    "2": {
                        "x": 4,
                        "y": 144,
                        "width": 33,
                        "height": 62
                    },
                    "3": {
                        "x": 45,
                        "y": 144,
                        "width": 33,
                        "height": 62
                    },
                    "4": {
                        "x": 87,
                        "y": 144,
                        "width": 33,
                        "height": 62
                    },
                    "5": {
                        "x": 128,
                        "y": 144,
                        "width": 33,
                        "height": 62
                    },
                    "6": {
                        "x": 170,
                        "y": 144,
                        "width": 33,
                        "height": 62
                    },
                    "7": {
                        "x": 212,
                        "y": 144,
                        "width": 33,
                        "height": 62
                    },
                    "8": {
                        "x": 253,
                        "y": 144,
                        "width": 33,
                        "height": 62
                    },
                    "9": {
                        "x": 4,
                        "y": 214,
                        "width": 33,
                        "height": 62
                    },
                    " ": {
                        "x": 4,
                        "y": 4,
                        "width": 14,
                        "height": 62
                    },
                    "!": {
                        "x": 26,
                        "y": 4,
                        "width": 18,
                        "height": 62
                    },
                    "\"": {
                        "x": 52,
                        "y": 4,
                        "width": 18,
                        "height": 62
                    },
                    "#": {
                        "x": 79,
                        "y": 4,
                        "width": 32,
                        "height": 62
                    },
                    "$": {
                        "x": 119,
                        "y": 4,
                        "width": 32,
                        "height": 62
                    },
                    "%": {
                        "x": 160,
                        "y": 4,
                        "width": 35,
                        "height": 62
                    },
                    "&": {
                        "x": 203,
                        "y": 4,
                        "width": 44,
                        "height": 62
                    },
                    "'": {
                        "x": 256,
                        "y": 4,
                        "width": 10,
                        "height": 62
                    },
                    "(": {
                        "x": 275,
                        "y": 4,
                        "width": 24,
                        "height": 62
                    },
                    ")": {
                        "x": 4,
                        "y": 74,
                        "width": 24,
                        "height": 62
                    },
                    "*": {
                        "x": 36,
                        "y": 74,
                        "width": 19,
                        "height": 62
                    },
                    "+": {
                        "x": 64,
                        "y": 74,
                        "width": 32,
                        "height": 62
                    },
                    ",": {
                        "x": 105,
                        "y": 74,
                        "width": 14,
                        "height": 62
                    },
                    "-": {
                        "x": 128,
                        "y": 74,
                        "width": 17,
                        "height": 62
                    },
                    ".": {
                        "x": 153,
                        "y": 74,
                        "width": 14,
                        "height": 62
                    },
                    "/": {
                        "x": 176,
                        "y": 74,
                        "width": 26,
                        "height": 62
                    },
                    ":": {
                        "x": 45,
                        "y": 214,
                        "width": 14,
                        "height": 62
                    },
                    ";": {
                        "x": 68,
                        "y": 214,
                        "width": 14,
                        "height": 62
                    },
                    "<": {
                        "x": 91,
                        "y": 214,
                        "width": 28,
                        "height": 62
                    },
                    "=": {
                        "x": 127,
                        "y": 214,
                        "width": 32,
                        "height": 62
                    },
                    ">": {
                        "x": 168,
                        "y": 214,
                        "width": 28,
                        "height": 62
                    },
                    "?": {
                        "x": 204,
                        "y": 214,
                        "width": 24,
                        "height": 62
                    },
                    "@": {
                        "x": 236,
                        "y": 214,
                        "width": 40,
                        "height": 62
                    },
                    "A": {
                        "x": 4,
                        "y": 284,
                        "width": 42,
                        "height": 62
                    },
                    "B": {
                        "x": 54,
                        "y": 284,
                        "width": 36,
                        "height": 62
                    },
                    "C": {
                        "x": 98,
                        "y": 284,
                        "width": 32,
                        "height": 62
                    },
                    "D": {
                        "x": 139,
                        "y": 284,
                        "width": 33,
                        "height": 62
                    },
                    "E": {
                        "x": 181,
                        "y": 284,
                        "width": 34,
                        "height": 62
                    },
                    "F": {
                        "x": 223,
                        "y": 284,
                        "width": 30,
                        "height": 62
                    },
                    "G": {
                        "x": 262,
                        "y": 284,
                        "width": 38,
                        "height": 62
                    },
                    "H": {
                        "x": 4,
                        "y": 354,
                        "width": 35,
                        "height": 62
                    },
                    "I": {
                        "x": 47,
                        "y": 354,
                        "width": 17,
                        "height": 62
                    },
                    "J": {
                        "x": 72,
                        "y": 354,
                        "width": 28,
                        "height": 62
                    },
                    "K": {
                        "x": 109,
                        "y": 354,
                        "width": 37,
                        "height": 62
                    },
                    "L": {
                        "x": 154,
                        "y": 354,
                        "width": 30,
                        "height": 62
                    },
                    "M": {
                        "x": 193,
                        "y": 354,
                        "width": 40,
                        "height": 62
                    },
                    "N": {
                        "x": 242,
                        "y": 354,
                        "width": 33,
                        "height": 62
                    },
                    "O": {
                        "x": 4,
                        "y": 424,
                        "width": 34,
                        "height": 62
                    },
                    "P": {
                        "x": 46,
                        "y": 424,
                        "width": 33,
                        "height": 62
                    },
                    "Q": {
                        "x": 88,
                        "y": 424,
                        "width": 35,
                        "height": 62
                    },
                    "R": {
                        "x": 131,
                        "y": 424,
                        "width": 35,
                        "height": 62
                    },
                    "S": {
                        "x": 175,
                        "y": 424,
                        "width": 31,
                        "height": 62
                    },
                    "T": {
                        "x": 214,
                        "y": 424,
                        "width": 32,
                        "height": 62
                    },
                    "U": {
                        "x": 254,
                        "y": 424,
                        "width": 34,
                        "height": 62
                    },
                    "V": {
                        "x": 4,
                        "y": 494,
                        "width": 34,
                        "height": 62
                    },
                    "W": {
                        "x": 46,
                        "y": 494,
                        "width": 44,
                        "height": 62
                    },
                    "X": {
                        "x": 98,
                        "y": 494,
                        "width": 39,
                        "height": 62
                    },
                    "Y": {
                        "x": 146,
                        "y": 494,
                        "width": 35,
                        "height": 62
                    },
                    "Z": {
                        "x": 189,
                        "y": 494,
                        "width": 35,
                        "height": 62
                    },
                    "[": {
                        "x": 233,
                        "y": 494,
                        "width": 24,
                        "height": 62
                    },
                    "\\": {
                        "x": 266,
                        "y": 494,
                        "width": 28,
                        "height": 62
                    },
                    "]": {
                        "x": 4,
                        "y": 564,
                        "width": 24,
                        "height": 62
                    },
                    "^": {
                        "x": 36,
                        "y": 564,
                        "width": 28,
                        "height": 62
                    },
                    "_": {
                        "x": 72,
                        "y": 564,
                        "width": 28,
                        "height": 62
                    },
                    "`": {
                        "x": 108,
                        "y": 564,
                        "width": 28,
                        "height": 62
                    },
                    "a": {
                        "x": 144,
                        "y": 564,
                        "width": 42,
                        "height": 62
                    },
                    "b": {
                        "x": 194,
                        "y": 564,
                        "width": 36,
                        "height": 62
                    },
                    "c": {
                        "x": 239,
                        "y": 564,
                        "width": 32,
                        "height": 62
                    },
                    "d": {
                        "x": 279,
                        "y": 564,
                        "width": 33,
                        "height": 62
                    },
                    "e": {
                        "x": 4,
                        "y": 634,
                        "width": 34,
                        "height": 62
                    },
                    "f": {
                        "x": 46,
                        "y": 634,
                        "width": 30,
                        "height": 62
                    },
                    "g": {
                        "x": 85,
                        "y": 634,
                        "width": 38,
                        "height": 62
                    },
                    "h": {
                        "x": 131,
                        "y": 634,
                        "width": 35,
                        "height": 62
                    },
                    "i": {
                        "x": 175,
                        "y": 634,
                        "width": 17,
                        "height": 62
                    },
                    "j": {
                        "x": 200,
                        "y": 634,
                        "width": 28,
                        "height": 62
                    },
                    "k": {
                        "x": 236,
                        "y": 634,
                        "width": 37,
                        "height": 62
                    },
                    "l": {
                        "x": 282,
                        "y": 634,
                        "width": 30,
                        "height": 62
                    },
                    "m": {
                        "x": 4,
                        "y": 704,
                        "width": 40,
                        "height": 62
                    },
                    "n": {
                        "x": 52,
                        "y": 704,
                        "width": 33,
                        "height": 62
                    },
                    "o": {
                        "x": 94,
                        "y": 704,
                        "width": 34,
                        "height": 62
                    },
                    "p": {
                        "x": 137,
                        "y": 704,
                        "width": 33,
                        "height": 62
                    },
                    "q": {
                        "x": 178,
                        "y": 704,
                        "width": 35,
                        "height": 62
                    },
                    "r": {
                        "x": 222,
                        "y": 704,
                        "width": 35,
                        "height": 62
                    },
                    "s": {
                        "x": 266,
                        "y": 704,
                        "width": 31,
                        "height": 62
                    },
                    "t": {
                        "x": 4,
                        "y": 774,
                        "width": 32,
                        "height": 62
                    },
                    "u": {
                        "x": 44,
                        "y": 774,
                        "width": 34,
                        "height": 62
                    },
                    "v": {
                        "x": 86,
                        "y": 774,
                        "width": 34,
                        "height": 62
                    },
                    "w": {
                        "x": 129,
                        "y": 774,
                        "width": 44,
                        "height": 62
                    },
                    "x": {
                        "x": 181,
                        "y": 774,
                        "width": 39,
                        "height": 62
                    },
                    "y": {
                        "x": 228,
                        "y": 774,
                        "width": 35,
                        "height": 62
                    },
                    "z": {
                        "x": 272,
                        "y": 774,
                        "width": 35,
                        "height": 62
                    },
                    "{": {
                        "x": 4,
                        "y": 844,
                        "width": 24,
                        "height": 62
                    },
                    "|": {
                        "x": 36,
                        "y": 844,
                        "width": 28,
                        "height": 62
                    },
                    "}": {
                        "x": 72,
                        "y": 844,
                        "width": 24,
                        "height": 62
                    },
                    "~": {
                        "x": 105,
                        "y": 844,
                        "width": 37,
                        "height": 62
                    },
                    "": {
                        "x": 150,
                        "y": 844,
                        "width": 28,
                        "height": 62
                    },
                    "": {
                        "x": 186,
                        "y": 844,
                        "width": 0,
                        "height": 62
                    },
                    "": {
                        "x": 194,
                        "y": 844,
                        "width": 0,
                        "height": 62
                    },
                    "": {
                        "x": 202,
                        "y": 844,
                        "width": 28,
                        "height": 62
                    },
                    "": {
                        "x": 238,
                        "y": 844,
                        "width": 28,
                        "height": 62
                    },
                    "": {
                        "x": 274,
                        "y": 844,
                        "width": 28,
                        "height": 62
                    },
                    "": {
                        "x": 4,
                        "y": 914,
                        "width": 44,
                        "height": 62
                    },
                    "": {
                        "x": 56,
                        "y": 914,
                        "width": 28,
                        "height": 62
                    },
                    "": {
                        "x": 92,
                        "y": 914,
                        "width": 28,
                        "height": 62
                    },
                    "": {
                        "x": 128,
                        "y": 914,
                        "width": 20,
                        "height": 62
                    },
                    "": {
                        "x": 156,
                        "y": 914,
                        "width": 43,
                        "height": 62
                    },
                    "": {
                        "x": 208,
                        "y": 914,
                        "width": 27,
                        "height": 62
                    },
                    "": {
                        "x": 243,
                        "y": 914,
                        "width": 28,
                        "height": 62
                    },
                    "": {
                        "x": 4,
                        "y": 984,
                        "width": 55,
                        "height": 62
                    },
                    "": {
                        "x": 67,
                        "y": 984,
                        "width": 0,
                        "height": 62
                    },
                    "": {
                        "x": 75,
                        "y": 984,
                        "width": 0,
                        "height": 62
                    },
                    "": {
                        "x": 83,
                        "y": 984,
                        "width": 0,
                        "height": 62
                    },
                    "": {
                        "x": 91,
                        "y": 984,
                        "width": 0,
                        "height": 62
                    },
                    "": {
                        "x": 99,
                        "y": 984,
                        "width": 11,
                        "height": 62
                    },
                    "": {
                        "x": 119,
                        "y": 984,
                        "width": 11,
                        "height": 62
                    },
                    "": {
                        "x": 138,
                        "y": 984,
                        "width": 23,
                        "height": 62
                    },
                    "": {
                        "x": 169,
                        "y": 984,
                        "width": 23,
                        "height": 62
                    },
                    "": {
                        "x": 201,
                        "y": 984,
                        "width": 0,
                        "height": 62
                    },
                    "А": {
                        "x": 209,
                        "y": 984,
                        "width": 40,
                        "height": 62
                    },
                    "Б": {
                        "x": 257,
                        "y": 984,
                        "width": 32,
                        "height": 62
                    },
                    "В": {
                        "x": 4,
                        "y": 1054,
                        "width": 37,
                        "height": 62
                    },
                    "Г": {
                        "x": 49,
                        "y": 1054,
                        "width": 32,
                        "height": 62
                    },
                    "Д": {
                        "x": 89,
                        "y": 1054,
                        "width": 38,
                        "height": 62
                    },
                    "Е": {
                        "x": 135,
                        "y": 1054,
                        "width": 34,
                        "height": 62
                    },
                    "Ж": {
                        "x": 178,
                        "y": 1054,
                        "width": 50,
                        "height": 62
                    },
                    "З": {
                        "x": 236,
                        "y": 1054,
                        "width": 28,
                        "height": 62
                    },
                    "И": {
                        "x": 272,
                        "y": 1054,
                        "width": 40,
                        "height": 62
                    },
                    "Й": {
                        "x": 4,
                        "y": 1124,
                        "width": 40,
                        "height": 62
                    },
                    "К": {
                        "x": 52,
                        "y": 1124,
                        "width": 37,
                        "height": 62
                    },
                    "Л": {
                        "x": 97,
                        "y": 1124,
                        "width": 37,
                        "height": 62
                    },
                    "М": {
                        "x": 143,
                        "y": 1124,
                        "width": 49,
                        "height": 62
                    },
                    "Н": {
                        "x": 201,
                        "y": 1124,
                        "width": 40,
                        "height": 62
                    },
                    "О": {
                        "x": 250,
                        "y": 1124,
                        "width": 40,
                        "height": 62
                    },
                    "П": {
                        "x": 4,
                        "y": 1194,
                        "width": 40,
                        "height": 62
                    },
                    "Р": {
                        "x": 52,
                        "y": 1194,
                        "width": 31,
                        "height": 62
                    },
                    "С": {
                        "x": 91,
                        "y": 1194,
                        "width": 37,
                        "height": 62
                    },
                    "Т": {
                        "x": 136,
                        "y": 1194,
                        "width": 34,
                        "height": 62
                    },
                    "У": {
                        "x": 179,
                        "y": 1194,
                        "width": 39,
                        "height": 62
                    },
                    "Ф": {
                        "x": 226,
                        "y": 1194,
                        "width": 44,
                        "height": 62
                    },
                    "Х": {
                        "x": 4,
                        "y": 1264,
                        "width": 40,
                        "height": 62
                    },
                    "Ц": {
                        "x": 52,
                        "y": 1264,
                        "width": 40,
                        "height": 62
                    },
                    "Ч": {
                        "x": 100,
                        "y": 1264,
                        "width": 36,
                        "height": 62
                    },
                    "Ш": {
                        "x": 145,
                        "y": 1264,
                        "width": 56,
                        "height": 62
                    },
                    "Щ": {
                        "x": 209,
                        "y": 1264,
                        "width": 56,
                        "height": 62
                    },
                    "Ъ": {
                        "x": 274,
                        "y": 1264,
                        "width": 39,
                        "height": 62
                    },
                    "Ы": {
                        "x": 4,
                        "y": 1334,
                        "width": 48,
                        "height": 62
                    },
                    "Ь": {
                        "x": 60,
                        "y": 1334,
                        "width": 32,
                        "height": 62
                    },
                    "Э": {
                        "x": 100,
                        "y": 1334,
                        "width": 36,
                        "height": 62
                    },
                    "Ю": {
                        "x": 145,
                        "y": 1334,
                        "width": 57,
                        "height": 62
                    },
                    "Я": {
                        "x": 211,
                        "y": 1334,
                        "width": 37,
                        "height": 62
                    },
                    "а": {
                        "x": 256,
                        "y": 1334,
                        "width": 24,
                        "height": 62
                    },
                    "б": {
                        "x": 4,
                        "y": 1404,
                        "width": 28,
                        "height": 62
                    },
                    "в": {
                        "x": 40,
                        "y": 1404,
                        "width": 26,
                        "height": 62
                    },
                    "г": {
                        "x": 74,
                        "y": 1404,
                        "width": 22,
                        "height": 62
                    },
                    "д": {
                        "x": 105,
                        "y": 1404,
                        "width": 28,
                        "height": 62
                    },
                    "е": {
                        "x": 142,
                        "y": 1404,
                        "width": 24,
                        "height": 62
                    },
                    "ж": {
                        "x": 175,
                        "y": 1404,
                        "width": 38,
                        "height": 62
                    },
                    "з": {
                        "x": 221,
                        "y": 1404,
                        "width": 22,
                        "height": 62
                    },
                    "и": {
                        "x": 252,
                        "y": 1404,
                        "width": 29,
                        "height": 62
                    },
                    "й": {
                        "x": 4,
                        "y": 1474,
                        "width": 29,
                        "height": 62
                    },
                    "к": {
                        "x": 41,
                        "y": 1474,
                        "width": 27,
                        "height": 62
                    },
                    "л": {
                        "x": 77,
                        "y": 1474,
                        "width": 27,
                        "height": 62
                    },
                    "м": {
                        "x": 113,
                        "y": 1474,
                        "width": 35,
                        "height": 62
                    },
                    "н": {
                        "x": 156,
                        "y": 1474,
                        "width": 29,
                        "height": 62
                    },
                    "о": {
                        "x": 194,
                        "y": 1474,
                        "width": 28,
                        "height": 62
                    },
                    "п": {
                        "x": 230,
                        "y": 1474,
                        "width": 29,
                        "height": 62
                    },
                    "р": {
                        "x": 268,
                        "y": 1474,
                        "width": 28,
                        "height": 62
                    },
                    "с": {
                        "x": 4,
                        "y": 1544,
                        "width": 24,
                        "height": 62
                    },
                    "т": {
                        "x": 36,
                        "y": 1544,
                        "width": 24,
                        "height": 62
                    },
                    "у": {
                        "x": 69,
                        "y": 1544,
                        "width": 28,
                        "height": 62
                    },
                    "ф": {
                        "x": 105,
                        "y": 1544,
                        "width": 36,
                        "height": 62
                    },
                    "х": {
                        "x": 149,
                        "y": 1544,
                        "width": 28,
                        "height": 62
                    },
                    "ц": {
                        "x": 185,
                        "y": 1544,
                        "width": 29,
                        "height": 62
                    },
                    "ч": {
                        "x": 223,
                        "y": 1544,
                        "width": 28,
                        "height": 62
                    },
                    "ш": {
                        "x": 259,
                        "y": 1544,
                        "width": 43,
                        "height": 62
                    },
                    "щ": {
                        "x": 4,
                        "y": 1614,
                        "width": 43,
                        "height": 62
                    },
                    "ъ": {
                        "x": 55,
                        "y": 1614,
                        "width": 28,
                        "height": 62
                    },
                    "ы": {
                        "x": 92,
                        "y": 1614,
                        "width": 37,
                        "height": 62
                    },
                    "ь": {
                        "x": 137,
                        "y": 1614,
                        "width": 25,
                        "height": 62
                    },
                    "э": {
                        "x": 171,
                        "y": 1614,
                        "width": 24,
                        "height": 62
                    },
                    "ю": {
                        "x": 203,
                        "y": 1614,
                        "width": 41,
                        "height": 62
                    },
                    "я": {
                        "x": 253,
                        "y": 1614,
                        "width": 25,
                        "height": 62
                    },
                    "ѐ": {
                        "x": 286,
                        "y": 1614,
                        "width": 24,
                        "height": 62
                    },
                    "ё": {
                        "x": 4,
                        "y": 1684,
                        "width": 24,
                        "height": 62
                    },
                    "ђ": {
                        "x": 36,
                        "y": 1684,
                        "width": 27,
                        "height": 62
                    },
                    "ѓ": {
                        "x": 71,
                        "y": 1684,
                        "width": 22,
                        "height": 62
                    },
                    "є": {
                        "x": 102,
                        "y": 1684,
                        "width": 24,
                        "height": 62
                    },
                    "ѕ": {
                        "x": 134,
                        "y": 1684,
                        "width": 21,
                        "height": 62
                    },
                    "і": {
                        "x": 164,
                        "y": 1684,
                        "width": 15,
                        "height": 62
                    },
                    "ї": {
                        "x": 188,
                        "y": 1684,
                        "width": 15,
                        "height": 62
                    },
                    "ј": {
                        "x": 211,
                        "y": 1684,
                        "width": 15,
                        "height": 62
                    },
                    "љ": {
                        "x": 235,
                        "y": 1684,
                        "width": 40,
                        "height": 62
                    },
                    "њ": {
                        "x": 4,
                        "y": 1754,
                        "width": 40,
                        "height": 62
                    },
                    "ћ": {
                        "x": 52,
                        "y": 1754,
                        "width": 28,
                        "height": 62
                    }
                },
                "width": 320,
                "height": 1820
            },
            "id": 12
        }
    ]
};