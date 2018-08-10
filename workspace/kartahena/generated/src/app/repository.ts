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
        }
    ]
};