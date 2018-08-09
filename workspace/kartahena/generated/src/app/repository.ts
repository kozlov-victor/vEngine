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
            "fontSize": 43,
            "fontFamily": "Times New Roman",
            "fontContext": {
                "symbols": {
                    "0": {
                        "x": 116,
                        "y": 60,
                        "width": 21,
                        "height": 48
                    },
                    "1": {
                        "x": 145,
                        "y": 60,
                        "width": 21,
                        "height": 48
                    },
                    "2": {
                        "x": 175,
                        "y": 60,
                        "width": 21,
                        "height": 48
                    },
                    "3": {
                        "x": 204,
                        "y": 60,
                        "width": 21,
                        "height": 48
                    },
                    "4": {
                        "x": 234,
                        "y": 60,
                        "width": 21,
                        "height": 48
                    },
                    "5": {
                        "x": 263,
                        "y": 60,
                        "width": 21,
                        "height": 48
                    },
                    "6": {
                        "x": 293,
                        "y": 60,
                        "width": 21,
                        "height": 48
                    },
                    "7": {
                        "x": 4,
                        "y": 116,
                        "width": 21,
                        "height": 48
                    },
                    "8": {
                        "x": 33,
                        "y": 116,
                        "width": 21,
                        "height": 48
                    },
                    "9": {
                        "x": 63,
                        "y": 116,
                        "width": 21,
                        "height": 48
                    },
                    " ": {
                        "x": 4,
                        "y": 4,
                        "width": 10,
                        "height": 48
                    },
                    "!": {
                        "x": 22,
                        "y": 4,
                        "width": 14,
                        "height": 48
                    },
                    "\"": {
                        "x": 45,
                        "y": 4,
                        "width": 17,
                        "height": 48
                    },
                    "#": {
                        "x": 70,
                        "y": 4,
                        "width": 21,
                        "height": 48
                    },
                    "$": {
                        "x": 100,
                        "y": 4,
                        "width": 21,
                        "height": 48
                    },
                    "%": {
                        "x": 129,
                        "y": 4,
                        "width": 35,
                        "height": 48
                    },
                    "&": {
                        "x": 173,
                        "y": 4,
                        "width": 33,
                        "height": 48
                    },
                    "'": {
                        "x": 214,
                        "y": 4,
                        "width": 7,
                        "height": 48
                    },
                    "(": {
                        "x": 230,
                        "y": 4,
                        "width": 14,
                        "height": 48
                    },
                    ")": {
                        "x": 252,
                        "y": 4,
                        "width": 14,
                        "height": 48
                    },
                    "*": {
                        "x": 275,
                        "y": 4,
                        "width": 21,
                        "height": 48
                    },
                    "+": {
                        "x": 4,
                        "y": 60,
                        "width": 24,
                        "height": 48
                    },
                    ",": {
                        "x": 36,
                        "y": 60,
                        "width": 10,
                        "height": 48
                    },
                    "-": {
                        "x": 55,
                        "y": 60,
                        "width": 14,
                        "height": 48
                    },
                    ".": {
                        "x": 77,
                        "y": 60,
                        "width": 10,
                        "height": 48
                    },
                    "/": {
                        "x": 96,
                        "y": 60,
                        "width": 11,
                        "height": 48
                    },
                    ":": {
                        "x": 92,
                        "y": 116,
                        "width": 11,
                        "height": 48
                    },
                    ";": {
                        "x": 112,
                        "y": 116,
                        "width": 11,
                        "height": 48
                    },
                    "<": {
                        "x": 132,
                        "y": 116,
                        "width": 24,
                        "height": 48
                    },
                    "=": {
                        "x": 164,
                        "y": 116,
                        "width": 24,
                        "height": 48
                    },
                    ">": {
                        "x": 196,
                        "y": 116,
                        "width": 24,
                        "height": 48
                    },
                    "?": {
                        "x": 229,
                        "y": 116,
                        "width": 19,
                        "height": 48
                    },
                    "@": {
                        "x": 256,
                        "y": 116,
                        "width": 39,
                        "height": 48
                    },
                    "A": {
                        "x": 4,
                        "y": 172,
                        "width": 31,
                        "height": 48
                    },
                    "B": {
                        "x": 43,
                        "y": 172,
                        "width": 28,
                        "height": 48
                    },
                    "C": {
                        "x": 79,
                        "y": 172,
                        "width": 28,
                        "height": 48
                    },
                    "D": {
                        "x": 116,
                        "y": 172,
                        "width": 31,
                        "height": 48
                    },
                    "E": {
                        "x": 155,
                        "y": 172,
                        "width": 26,
                        "height": 48
                    },
                    "F": {
                        "x": 189,
                        "y": 172,
                        "width": 23,
                        "height": 48
                    },
                    "G": {
                        "x": 221,
                        "y": 172,
                        "width": 31,
                        "height": 48
                    },
                    "H": {
                        "x": 260,
                        "y": 172,
                        "width": 31,
                        "height": 48
                    },
                    "I": {
                        "x": 299,
                        "y": 172,
                        "width": 14,
                        "height": 48
                    },
                    "J": {
                        "x": 4,
                        "y": 228,
                        "width": 16,
                        "height": 48
                    },
                    "K": {
                        "x": 28,
                        "y": 228,
                        "width": 31,
                        "height": 48
                    },
                    "L": {
                        "x": 67,
                        "y": 228,
                        "width": 26,
                        "height": 48
                    },
                    "M": {
                        "x": 102,
                        "y": 228,
                        "width": 38,
                        "height": 48
                    },
                    "N": {
                        "x": 148,
                        "y": 228,
                        "width": 31,
                        "height": 48
                    },
                    "O": {
                        "x": 187,
                        "y": 228,
                        "width": 31,
                        "height": 48
                    },
                    "P": {
                        "x": 226,
                        "y": 228,
                        "width": 23,
                        "height": 48
                    },
                    "Q": {
                        "x": 258,
                        "y": 228,
                        "width": 31,
                        "height": 48
                    },
                    "R": {
                        "x": 4,
                        "y": 284,
                        "width": 28,
                        "height": 48
                    },
                    "S": {
                        "x": 40,
                        "y": 284,
                        "width": 23,
                        "height": 48
                    },
                    "T": {
                        "x": 72,
                        "y": 284,
                        "width": 26,
                        "height": 48
                    },
                    "U": {
                        "x": 106,
                        "y": 284,
                        "width": 31,
                        "height": 48
                    },
                    "V": {
                        "x": 145,
                        "y": 284,
                        "width": 31,
                        "height": 48
                    },
                    "W": {
                        "x": 184,
                        "y": 284,
                        "width": 40,
                        "height": 48
                    },
                    "X": {
                        "x": 233,
                        "y": 284,
                        "width": 31,
                        "height": 48
                    },
                    "Y": {
                        "x": 272,
                        "y": 284,
                        "width": 31,
                        "height": 48
                    },
                    "Z": {
                        "x": 4,
                        "y": 340,
                        "width": 26,
                        "height": 48
                    },
                    "[": {
                        "x": 38,
                        "y": 340,
                        "width": 14,
                        "height": 48
                    },
                    "\\": {
                        "x": 60,
                        "y": 340,
                        "width": 11,
                        "height": 48
                    },
                    "]": {
                        "x": 80,
                        "y": 340,
                        "width": 14,
                        "height": 48
                    },
                    "^": {
                        "x": 102,
                        "y": 340,
                        "width": 20,
                        "height": 48
                    },
                    "_": {
                        "x": 131,
                        "y": 340,
                        "width": 21,
                        "height": 48
                    },
                    "`": {
                        "x": 160,
                        "y": 340,
                        "width": 14,
                        "height": 48
                    },
                    "a": {
                        "x": 182,
                        "y": 340,
                        "width": 19,
                        "height": 48
                    },
                    "b": {
                        "x": 209,
                        "y": 340,
                        "width": 21,
                        "height": 48
                    },
                    "c": {
                        "x": 239,
                        "y": 340,
                        "width": 19,
                        "height": 48
                    },
                    "d": {
                        "x": 266,
                        "y": 340,
                        "width": 21,
                        "height": 48
                    },
                    "e": {
                        "x": 296,
                        "y": 340,
                        "width": 19,
                        "height": 48
                    },
                    "f": {
                        "x": 4,
                        "y": 396,
                        "width": 14,
                        "height": 48
                    },
                    "g": {
                        "x": 26,
                        "y": 396,
                        "width": 21,
                        "height": 48
                    },
                    "h": {
                        "x": 55,
                        "y": 396,
                        "width": 21,
                        "height": 48
                    },
                    "i": {
                        "x": 85,
                        "y": 396,
                        "width": 11,
                        "height": 48
                    },
                    "j": {
                        "x": 105,
                        "y": 396,
                        "width": 11,
                        "height": 48
                    },
                    "k": {
                        "x": 125,
                        "y": 396,
                        "width": 21,
                        "height": 48
                    },
                    "l": {
                        "x": 154,
                        "y": 396,
                        "width": 11,
                        "height": 48
                    },
                    "m": {
                        "x": 174,
                        "y": 396,
                        "width": 33,
                        "height": 48
                    },
                    "n": {
                        "x": 216,
                        "y": 396,
                        "width": 21,
                        "height": 48
                    },
                    "o": {
                        "x": 245,
                        "y": 396,
                        "width": 21,
                        "height": 48
                    },
                    "p": {
                        "x": 275,
                        "y": 396,
                        "width": 21,
                        "height": 48
                    },
                    "q": {
                        "x": 4,
                        "y": 452,
                        "width": 21,
                        "height": 48
                    },
                    "r": {
                        "x": 33,
                        "y": 452,
                        "width": 14,
                        "height": 48
                    },
                    "s": {
                        "x": 55,
                        "y": 452,
                        "width": 16,
                        "height": 48
                    },
                    "t": {
                        "x": 80,
                        "y": 452,
                        "width": 11,
                        "height": 48
                    },
                    "u": {
                        "x": 100,
                        "y": 452,
                        "width": 21,
                        "height": 48
                    },
                    "v": {
                        "x": 130,
                        "y": 452,
                        "width": 21,
                        "height": 48
                    },
                    "w": {
                        "x": 159,
                        "y": 452,
                        "width": 31,
                        "height": 48
                    },
                    "x": {
                        "x": 198,
                        "y": 452,
                        "width": 21,
                        "height": 48
                    },
                    "y": {
                        "x": 228,
                        "y": 452,
                        "width": 21,
                        "height": 48
                    },
                    "z": {
                        "x": 257,
                        "y": 452,
                        "width": 19,
                        "height": 48
                    },
                    "{": {
                        "x": 284,
                        "y": 452,
                        "width": 20,
                        "height": 48
                    },
                    "|": {
                        "x": 4,
                        "y": 508,
                        "width": 8,
                        "height": 48
                    },
                    "}": {
                        "x": 20,
                        "y": 508,
                        "width": 20,
                        "height": 48
                    },
                    "~": {
                        "x": 49,
                        "y": 508,
                        "width": 23,
                        "height": 48
                    },
                    "": {
                        "x": 80,
                        "y": 508,
                        "width": 21,
                        "height": 48
                    },
                    "": {
                        "x": 110,
                        "y": 508,
                        "width": 0,
                        "height": 48
                    },
                    "": {
                        "x": 118,
                        "y": 508,
                        "width": 0,
                        "height": 48
                    },
                    "": {
                        "x": 126,
                        "y": 508,
                        "width": 21,
                        "height": 48
                    },
                    "": {
                        "x": 155,
                        "y": 508,
                        "width": 21,
                        "height": 48
                    },
                    "": {
                        "x": 185,
                        "y": 508,
                        "width": 21,
                        "height": 48
                    },
                    "": {
                        "x": 214,
                        "y": 508,
                        "width": 33,
                        "height": 48
                    },
                    "": {
                        "x": 256,
                        "y": 508,
                        "width": 21,
                        "height": 48
                    },
                    "": {
                        "x": 285,
                        "y": 508,
                        "width": 21,
                        "height": 48
                    },
                    "": {
                        "x": 4,
                        "y": 564,
                        "width": 15,
                        "height": 48
                    },
                    "": {
                        "x": 27,
                        "y": 564,
                        "width": 33,
                        "height": 48
                    },
                    "": {
                        "x": 69,
                        "y": 564,
                        "width": 20,
                        "height": 48
                    },
                    "": {
                        "x": 98,
                        "y": 564,
                        "width": 21,
                        "height": 48
                    },
                    "": {
                        "x": 127,
                        "y": 564,
                        "width": 42,
                        "height": 48
                    },
                    "": {
                        "x": 178,
                        "y": 564,
                        "width": 0,
                        "height": 48
                    },
                    "": {
                        "x": 186,
                        "y": 564,
                        "width": 0,
                        "height": 48
                    },
                    "": {
                        "x": 194,
                        "y": 564,
                        "width": 0,
                        "height": 48
                    },
                    "": {
                        "x": 202,
                        "y": 564,
                        "width": 0,
                        "height": 48
                    },
                    "": {
                        "x": 210,
                        "y": 564,
                        "width": 8,
                        "height": 48
                    },
                    "": {
                        "x": 227,
                        "y": 564,
                        "width": 8,
                        "height": 48
                    },
                    "": {
                        "x": 243,
                        "y": 564,
                        "width": 18,
                        "height": 48
                    },
                    "": {
                        "x": 269,
                        "y": 564,
                        "width": 18,
                        "height": 48
                    },
                    "": {
                        "x": 295,
                        "y": 564,
                        "width": 0,
                        "height": 48
                    },
                    "А": {
                        "x": 4,
                        "y": 620,
                        "width": 31,
                        "height": 48
                    },
                    "Б": {
                        "x": 43,
                        "y": 620,
                        "width": 24,
                        "height": 48
                    },
                    "В": {
                        "x": 75,
                        "y": 620,
                        "width": 28,
                        "height": 48
                    },
                    "Г": {
                        "x": 112,
                        "y": 620,
                        "width": 24,
                        "height": 48
                    },
                    "Д": {
                        "x": 145,
                        "y": 620,
                        "width": 29,
                        "height": 48
                    },
                    "Е": {
                        "x": 182,
                        "y": 620,
                        "width": 26,
                        "height": 48
                    },
                    "Ж": {
                        "x": 216,
                        "y": 620,
                        "width": 38,
                        "height": 48
                    },
                    "З": {
                        "x": 263,
                        "y": 620,
                        "width": 21,
                        "height": 48
                    },
                    "И": {
                        "x": 4,
                        "y": 676,
                        "width": 31,
                        "height": 48
                    },
                    "Й": {
                        "x": 43,
                        "y": 676,
                        "width": 31,
                        "height": 48
                    },
                    "К": {
                        "x": 82,
                        "y": 676,
                        "width": 28,
                        "height": 48
                    },
                    "Л": {
                        "x": 118,
                        "y": 676,
                        "width": 29,
                        "height": 48
                    },
                    "М": {
                        "x": 155,
                        "y": 676,
                        "width": 38,
                        "height": 48
                    },
                    "Н": {
                        "x": 202,
                        "y": 676,
                        "width": 31,
                        "height": 48
                    },
                    "О": {
                        "x": 241,
                        "y": 676,
                        "width": 31,
                        "height": 48
                    },
                    "П": {
                        "x": 280,
                        "y": 676,
                        "width": 31,
                        "height": 48
                    },
                    "Р": {
                        "x": 4,
                        "y": 732,
                        "width": 23,
                        "height": 48
                    },
                    "С": {
                        "x": 35,
                        "y": 732,
                        "width": 28,
                        "height": 48
                    },
                    "Т": {
                        "x": 72,
                        "y": 732,
                        "width": 26,
                        "height": 48
                    },
                    "У": {
                        "x": 106,
                        "y": 732,
                        "width": 30,
                        "height": 48
                    },
                    "Ф": {
                        "x": 145,
                        "y": 732,
                        "width": 33,
                        "height": 48
                    },
                    "Х": {
                        "x": 187,
                        "y": 732,
                        "width": 31,
                        "height": 48
                    },
                    "Ц": {
                        "x": 226,
                        "y": 732,
                        "width": 31,
                        "height": 48
                    },
                    "Ч": {
                        "x": 265,
                        "y": 732,
                        "width": 27,
                        "height": 48
                    },
                    "Ш": {
                        "x": 4,
                        "y": 788,
                        "width": 43,
                        "height": 48
                    },
                    "Щ": {
                        "x": 55,
                        "y": 788,
                        "width": 43,
                        "height": 48
                    },
                    "Ъ": {
                        "x": 106,
                        "y": 788,
                        "width": 30,
                        "height": 48
                    },
                    "Ы": {
                        "x": 145,
                        "y": 788,
                        "width": 37,
                        "height": 48
                    },
                    "Ь": {
                        "x": 190,
                        "y": 788,
                        "width": 24,
                        "height": 48
                    },
                    "Э": {
                        "x": 223,
                        "y": 788,
                        "width": 28,
                        "height": 48
                    },
                    "Ю": {
                        "x": 259,
                        "y": 788,
                        "width": 44,
                        "height": 48
                    },
                    "Я": {
                        "x": 4,
                        "y": 844,
                        "width": 28,
                        "height": 48
                    },
                    "а": {
                        "x": 40,
                        "y": 844,
                        "width": 19,
                        "height": 48
                    },
                    "б": {
                        "x": 67,
                        "y": 844,
                        "width": 21,
                        "height": 48
                    },
                    "в": {
                        "x": 97,
                        "y": 844,
                        "width": 20,
                        "height": 48
                    },
                    "г": {
                        "x": 125,
                        "y": 844,
                        "width": 17,
                        "height": 48
                    },
                    "д": {
                        "x": 151,
                        "y": 844,
                        "width": 21,
                        "height": 48
                    },
                    "е": {
                        "x": 181,
                        "y": 844,
                        "width": 19,
                        "height": 48
                    },
                    "ж": {
                        "x": 208,
                        "y": 844,
                        "width": 29,
                        "height": 48
                    },
                    "з": {
                        "x": 246,
                        "y": 844,
                        "width": 16,
                        "height": 48
                    },
                    "и": {
                        "x": 271,
                        "y": 844,
                        "width": 23,
                        "height": 48
                    },
                    "й": {
                        "x": 4,
                        "y": 900,
                        "width": 23,
                        "height": 48
                    },
                    "к": {
                        "x": 35,
                        "y": 900,
                        "width": 20,
                        "height": 48
                    },
                    "л": {
                        "x": 63,
                        "y": 900,
                        "width": 21,
                        "height": 48
                    },
                    "м": {
                        "x": 93,
                        "y": 900,
                        "width": 27,
                        "height": 48
                    },
                    "н": {
                        "x": 128,
                        "y": 900,
                        "width": 23,
                        "height": 48
                    },
                    "о": {
                        "x": 159,
                        "y": 900,
                        "width": 21,
                        "height": 48
                    },
                    "п": {
                        "x": 189,
                        "y": 900,
                        "width": 23,
                        "height": 48
                    },
                    "р": {
                        "x": 220,
                        "y": 900,
                        "width": 21,
                        "height": 48
                    },
                    "с": {
                        "x": 249,
                        "y": 900,
                        "width": 19,
                        "height": 48
                    },
                    "т": {
                        "x": 276,
                        "y": 900,
                        "width": 18,
                        "height": 48
                    },
                    "у": {
                        "x": 4,
                        "y": 956,
                        "width": 21,
                        "height": 48
                    },
                    "ф": {
                        "x": 33,
                        "y": 956,
                        "width": 27,
                        "height": 48
                    },
                    "х": {
                        "x": 69,
                        "y": 956,
                        "width": 21,
                        "height": 48
                    },
                    "ц": {
                        "x": 98,
                        "y": 956,
                        "width": 23,
                        "height": 48
                    },
                    "ч": {
                        "x": 129,
                        "y": 956,
                        "width": 21,
                        "height": 48
                    },
                    "ш": {
                        "x": 159,
                        "y": 956,
                        "width": 33,
                        "height": 48
                    },
                    "щ": {
                        "x": 200,
                        "y": 956,
                        "width": 33,
                        "height": 48
                    },
                    "ъ": {
                        "x": 241,
                        "y": 956,
                        "width": 22,
                        "height": 48
                    },
                    "ы": {
                        "x": 271,
                        "y": 956,
                        "width": 28,
                        "height": 48
                    },
                    "ь": {
                        "x": 4,
                        "y": 1012,
                        "width": 19,
                        "height": 48
                    },
                    "э": {
                        "x": 31,
                        "y": 1012,
                        "width": 18,
                        "height": 48
                    },
                    "ю": {
                        "x": 58,
                        "y": 1012,
                        "width": 32,
                        "height": 48
                    },
                    "я": {
                        "x": 98,
                        "y": 1012,
                        "width": 19,
                        "height": 48
                    },
                    "ѐ": {
                        "x": 125,
                        "y": 1012,
                        "width": 19,
                        "height": 48
                    },
                    "ё": {
                        "x": 153,
                        "y": 1012,
                        "width": 19,
                        "height": 48
                    },
                    "ђ": {
                        "x": 180,
                        "y": 1012,
                        "width": 20,
                        "height": 48
                    },
                    "ѓ": {
                        "x": 208,
                        "y": 1012,
                        "width": 17,
                        "height": 48
                    },
                    "є": {
                        "x": 234,
                        "y": 1012,
                        "width": 18,
                        "height": 48
                    },
                    "ѕ": {
                        "x": 260,
                        "y": 1012,
                        "width": 16,
                        "height": 48
                    },
                    "і": {
                        "x": 285,
                        "y": 1012,
                        "width": 11,
                        "height": 48
                    },
                    "ї": {
                        "x": 4,
                        "y": 1068,
                        "width": 11,
                        "height": 48
                    },
                    "ј": {
                        "x": 23,
                        "y": 1068,
                        "width": 11,
                        "height": 48
                    },
                    "љ": {
                        "x": 43,
                        "y": 1068,
                        "width": 31,
                        "height": 48
                    },
                    "њ": {
                        "x": 83,
                        "y": 1068,
                        "width": 31,
                        "height": 48
                    },
                    "ћ": {
                        "x": 122,
                        "y": 1068,
                        "width": 21,
                        "height": 48
                    }
                },
                "width": 320,
                "height": 1120
            }
        }
    ]
};