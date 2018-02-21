export let repository:any = 
	{
    "Scene": [
        {
            "id": 2,
            "name": "mainScene",
            "width": 5000,
            "height": 800,
            "type": "Scene",
            "layers": [
                {
                    "type": "Layer",
                    "id": 2
                }
            ],
            "useBG": true,
            "colorBG": {
                "r": 22,
                "g": 30,
                "b": 67,
                "a": 255
            },
            "tileMap": {
                "id": 52,
                "type": "TileMap"
            }
        }
    ],
    "Layer": [
        {
            "id": 2,
            "name": "layer1",
            "type": "Layer",
            "gameObjects": [
                {
                    "type": "GameObject",
                    "id": 7
                },
                {
                    "type": "GameObject",
                    "id": 63
                },
                {
                    "type": "GameObject",
                    "id": 64
                },
                {
                    "type": "GameObject",
                    "id": 65
                },
                {
                    "type": "GameObject",
                    "id": 67
                },
                {
                    "type": "GameObject",
                    "id": 68
                },
                {
                    "type": "GameObject",
                    "id": 71
                },
                {
                    "type": "GameObject",
                    "id": 74
                },
                {
                    "type": "TextField",
                    "id": 76
                },
                {
                    "type": "GameObject",
                    "id": 77
                },
                {
                    "type": "GameObject",
                    "id": 78
                },
                {
                    "type": "GameObject",
                    "id": 81
                },
                {
                    "type": "GameObject",
                    "id": 82
                },
                {
                    "type": "GameObject",
                    "id": 86
                },
                {
                    "type": "GameObject",
                    "id": 87
                },
                {
                    "type": "GameObject",
                    "id": 91
                }
            ]
        }
    ],
    "SpriteSheet": [
        {
            "id": 3,
            "name": "dude",
            "width": 288,
            "height": 48,
            "type": "SpriteSheet",
            "numOfFramesH": 9,
            "resourcePath": "resources/dude.png",
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
            "id": 5,
            "name": "platform",
            "width": 500,
            "height": 64,
            "type": "SpriteSheet",
            "resourcePath": "resources/platform.png",
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
            "name": "ground",
            "width": 800,
            "height": 32,
            "type": "SpriteSheet",
            "numOfFramesH": 25,
            "resourcePath": "resources/ground.png",
            "id": 57
        },
        {
            "name": "clamp",
            "width": 300,
            "height": 300,
            "type": "SpriteSheet",
            "resourcePath": "resources/clamp.png",
            "normalMapPath": "resources/clamp_normal.png",
            "id": 69
        },
        {
            "name": "tile",
            "width": 262,
            "height": 192,
            "type": "SpriteSheet",
            "resourcePath": "resources/tile.jpg",
            "id": 72
        },
        {
            "name": "flare",
            "width": 174,
            "height": 173,
            "type": "SpriteSheet",
            "resourcePath": "resources/flare.png",
            "id": 79
        },
        {
            "name": "eso1611a",
            "width": 120,
            "height": 120,
            "type": "SpriteSheet",
            "resourcePath": "resources/eso1611a.png",
            "id": 84
        },
        {
            "name": "nineP",
            "width": 120,
            "height": 105,
            "type": "SpriteSheet",
            "resourcePath": "resources/nineP.png",
            "frameRect": {
                "x": 0,
                "y": 0,
                "width": 0,
                "height": 0
            },
            "id": 89
        }
    ],
    "GameObjectProto": [
        {
            "id": 4,
            "name": "dude",
            "width": 32,
            "height": 48,
            "rigid": true,
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 3,
                "type": "SpriteSheet"
            },
            "commonBehaviour": [
                {
                    "type": "CommonBehaviour",
                    "id": 15
                },
                {
                    "type": "CommonBehaviour",
                    "id": 60
                }
            ],
            "frameAnimations": [
                {
                    "type": "FrameAnimation",
                    "id": 11
                },
                {
                    "type": "FrameAnimation",
                    "id": 12
                },
                {
                    "type": "FrameAnimation",
                    "id": 13
                },
                {
                    "type": "FrameAnimation",
                    "id": 14
                }
            ]
        },
        {
            "id": 6,
            "name": "platform",
            "width": 500,
            "height": 64,
            "rigid": true,
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 5,
                "type": "SpriteSheet"
            },
            "commonBehaviour": [
                {
                    "type": "CommonBehaviour",
                    "id": 61
                }
            ]
        },
        {
            "id": 58,
            "name": "ground1",
            "width": 32,
            "height": 32,
            "rigid": true,
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 57,
                "type": "SpriteSheet"
            },
            "commonBehaviour": [
                {
                    "type": "CommonBehaviour",
                    "id": 62
                }
            ],
            "currFrameIndex": 9
        },
        {
            "id": 70,
            "name": "clamp",
            "width": 64,
            "height": 64,
            "rigid": true,
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 69,
                "type": "SpriteSheet"
            },
            "commonBehaviour": [
                {
                    "type": "CommonBehaviour",
                    "id": 75
                }
            ]
        },
        {
            "id": 73,
            "name": "tile",
            "width": 262,
            "height": 192,
            "rigid": true,
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 72,
                "type": "SpriteSheet"
            }
        },
        {
            "id": 80,
            "name": "flare",
            "width": 174,
            "height": 173,
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 79,
                "type": "SpriteSheet"
            },
            "commonBehaviour": [
                {
                    "type": "CommonBehaviour",
                    "id": 83
                }
            ]
        },
        {
            "id": 85,
            "name": "eso1611a",
            "width": 120,
            "height": 120,
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 84,
                "type": "SpriteSheet"
            },
            "commonBehaviour": [
                {
                    "type": "CommonBehaviour",
                    "id": 88
                }
            ]
        },
        {
            "id": 90,
            "name": "nineP",
            "width": 120,
            "height": 105,
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 89,
                "type": "SpriteSheet"
            },
            "commonBehaviour": [
                {
                    "type": "CommonBehaviour",
                    "id": 92
                }
            ],
            "shaderMaterial": {
                "shininess": 10
            }
        }
    ],
    "GameObject": [
        {
            "id": 7,
            "name": "dude",
            "pos": {
                "x": 232,
                "y": 60
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 4,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 63,
            "name": "ground1",
            "pos": {
                "x": 400,
                "y": 95
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 58,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 64,
            "name": "platform",
            "pos": {
                "x": 471,
                "y": 478
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 6,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 65,
            "name": "platform",
            "pos": {
                "x": 74,
                "y": 143
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 6,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 67,
            "name": "ground1",
            "pos": {
                "x": 483,
                "y": 45
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 58,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 68,
            "name": "ground1",
            "pos": {
                "x": 348,
                "y": 47
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 58,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 71,
            "name": "clamp",
            "width": 300,
            "height": 300,
            "pos": {
                "x": 747,
                "y": 124
            },
            "layerId": 2,
            "type": "GameObject",
            "spriteSheet": {
                "id": 69,
                "type": "SpriteSheet"
            },
            "commonBehaviour": [
                {
                    "type": "CommonBehaviour",
                    "id": 75
                }
            ],
            "gameObjectProto": {
                "id": 70,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 74,
            "name": "tile",
            "pos": {
                "x": 360,
                "y": 228
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 73,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 77,
            "name": "platform",
            "pos": {
                "x": 62,
                "y": 304
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 6,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 78,
            "name": "platform",
            "pos": {
                "x": 43,
                "y": 393
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 6,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 81,
            "name": "flare",
            "pos": {
                "x": 651,
                "y": 67
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 80,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 82,
            "name": "flare",
            "pos": {
                "x": 617,
                "y": 36
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 80,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 86,
            "name": "eso1611a",
            "pos": {
                "x": 616,
                "y": 53
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 85,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 87,
            "name": "eso1611a",
            "pos": {
                "x": 625,
                "y": 56
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 85,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 91,
            "name": "nineP",
            "pos": {
                "x": 8,
                "y": 463
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 90,
                "type": "GameObjectProto"
            }
        }
    ],
    "FrameAnimation": [
        {
            "name": "left",
            "type": "FrameAnimation",
            "frames": [
                0,
                1,
                2,
                3
            ],
            "id": 11
        },
        {
            "name": "right",
            "type": "FrameAnimation",
            "frames": [
                5,
                6,
                7,
                8
            ],
            "id": 12
        },
        {
            "name": "idleLeft",
            "type": "FrameAnimation",
            "frames": [
                4
            ],
            "id": 13
        },
        {
            "name": "idleRight",
            "type": "FrameAnimation",
            "frames": [
                4
            ],
            "id": 14
        }
    ],
    "CommonBehaviour": [
        {
            "id": 15,
            "name": "Control2Dir",
            "type": "CommonBehaviour",
            "parameters": {
                "velocity": "130",
                "walkLeftAnimation": "left",
                "walkRightAnimation": "right",
                "idleLeftAnimation": "idleLeft",
                "idleRightAnimation": "idleRight"
            }
        },
        {
            "name": "Draggable",
            "type": "CommonBehaviour",
            "id": 60
        },
        {
            "name": "Draggable",
            "type": "CommonBehaviour",
            "id": 61
        },
        {
            "name": "Draggable",
            "type": "CommonBehaviour",
            "id": 62
        },
        {
            "name": "Draggable",
            "type": "CommonBehaviour",
            "id": 75
        },
        {
            "name": "Draggable",
            "type": "CommonBehaviour",
            "id": 83
        },
        {
            "name": "Draggable",
            "type": "CommonBehaviour",
            "id": 88
        },
        {
            "name": "Draggable",
            "type": "CommonBehaviour",
            "id": 92
        }
    ],
    "Font": [
        {
            "id": 22,
            "name": "font1",
            "type": "Font",
            "resourcePath": "resources/font1.png",
            "fontSize": 21,
            "fontFamily": "monospace",
            "fontContext": {
                "symbols": {
                    "0": {
                        "x": 24,
                        "y": 36,
                        "width": 12,
                        "height": 24
                    },
                    "1": {
                        "x": 45,
                        "y": 36,
                        "width": 12,
                        "height": 24
                    },
                    "2": {
                        "x": 65,
                        "y": 36,
                        "width": 12,
                        "height": 24
                    },
                    "3": {
                        "x": 86,
                        "y": 36,
                        "width": 12,
                        "height": 24
                    },
                    "4": {
                        "x": 107,
                        "y": 36,
                        "width": 12,
                        "height": 24
                    },
                    "5": {
                        "x": 127,
                        "y": 36,
                        "width": 12,
                        "height": 24
                    },
                    "6": {
                        "x": 148,
                        "y": 36,
                        "width": 12,
                        "height": 24
                    },
                    "7": {
                        "x": 168,
                        "y": 36,
                        "width": 12,
                        "height": 24
                    },
                    "8": {
                        "x": 189,
                        "y": 36,
                        "width": 12,
                        "height": 24
                    },
                    "9": {
                        "x": 210,
                        "y": 36,
                        "width": 12,
                        "height": 24
                    },
                    " ": {
                        "x": 4,
                        "y": 4,
                        "width": 12,
                        "height": 24
                    },
                    "!": {
                        "x": 24,
                        "y": 4,
                        "width": 12,
                        "height": 24
                    },
                    "\"": {
                        "x": 45,
                        "y": 4,
                        "width": 12,
                        "height": 24
                    },
                    "#": {
                        "x": 65,
                        "y": 4,
                        "width": 12,
                        "height": 24
                    },
                    "$": {
                        "x": 86,
                        "y": 4,
                        "width": 12,
                        "height": 24
                    },
                    "%": {
                        "x": 107,
                        "y": 4,
                        "width": 12,
                        "height": 24
                    },
                    "&": {
                        "x": 127,
                        "y": 4,
                        "width": 12,
                        "height": 24
                    },
                    "'": {
                        "x": 148,
                        "y": 4,
                        "width": 12,
                        "height": 24
                    },
                    "(": {
                        "x": 168,
                        "y": 4,
                        "width": 12,
                        "height": 24
                    },
                    ")": {
                        "x": 189,
                        "y": 4,
                        "width": 12,
                        "height": 24
                    },
                    "*": {
                        "x": 210,
                        "y": 4,
                        "width": 12,
                        "height": 24
                    },
                    "+": {
                        "x": 230,
                        "y": 4,
                        "width": 12,
                        "height": 24
                    },
                    ",": {
                        "x": 251,
                        "y": 4,
                        "width": 12,
                        "height": 24
                    },
                    "-": {
                        "x": 271,
                        "y": 4,
                        "width": 12,
                        "height": 24
                    },
                    ".": {
                        "x": 292,
                        "y": 4,
                        "width": 12,
                        "height": 24
                    },
                    "/": {
                        "x": 4,
                        "y": 36,
                        "width": 12,
                        "height": 24
                    },
                    ":": {
                        "x": 230,
                        "y": 36,
                        "width": 12,
                        "height": 24
                    },
                    ";": {
                        "x": 251,
                        "y": 36,
                        "width": 12,
                        "height": 24
                    },
                    "<": {
                        "x": 271,
                        "y": 36,
                        "width": 12,
                        "height": 24
                    },
                    "=": {
                        "x": 292,
                        "y": 36,
                        "width": 12,
                        "height": 24
                    },
                    ">": {
                        "x": 4,
                        "y": 68,
                        "width": 12,
                        "height": 24
                    },
                    "?": {
                        "x": 24,
                        "y": 68,
                        "width": 12,
                        "height": 24
                    },
                    "@": {
                        "x": 45,
                        "y": 68,
                        "width": 12,
                        "height": 24
                    },
                    "A": {
                        "x": 65,
                        "y": 68,
                        "width": 12,
                        "height": 24
                    },
                    "B": {
                        "x": 86,
                        "y": 68,
                        "width": 12,
                        "height": 24
                    },
                    "C": {
                        "x": 107,
                        "y": 68,
                        "width": 12,
                        "height": 24
                    },
                    "D": {
                        "x": 127,
                        "y": 68,
                        "width": 12,
                        "height": 24
                    },
                    "E": {
                        "x": 148,
                        "y": 68,
                        "width": 12,
                        "height": 24
                    },
                    "F": {
                        "x": 168,
                        "y": 68,
                        "width": 12,
                        "height": 24
                    },
                    "G": {
                        "x": 189,
                        "y": 68,
                        "width": 12,
                        "height": 24
                    },
                    "H": {
                        "x": 210,
                        "y": 68,
                        "width": 12,
                        "height": 24
                    },
                    "I": {
                        "x": 230,
                        "y": 68,
                        "width": 12,
                        "height": 24
                    },
                    "J": {
                        "x": 251,
                        "y": 68,
                        "width": 12,
                        "height": 24
                    },
                    "K": {
                        "x": 271,
                        "y": 68,
                        "width": 12,
                        "height": 24
                    },
                    "L": {
                        "x": 292,
                        "y": 68,
                        "width": 12,
                        "height": 24
                    },
                    "M": {
                        "x": 4,
                        "y": 100,
                        "width": 12,
                        "height": 24
                    },
                    "N": {
                        "x": 24,
                        "y": 100,
                        "width": 12,
                        "height": 24
                    },
                    "O": {
                        "x": 45,
                        "y": 100,
                        "width": 12,
                        "height": 24
                    },
                    "P": {
                        "x": 65,
                        "y": 100,
                        "width": 12,
                        "height": 24
                    },
                    "Q": {
                        "x": 86,
                        "y": 100,
                        "width": 12,
                        "height": 24
                    },
                    "R": {
                        "x": 107,
                        "y": 100,
                        "width": 12,
                        "height": 24
                    },
                    "S": {
                        "x": 127,
                        "y": 100,
                        "width": 12,
                        "height": 24
                    },
                    "T": {
                        "x": 148,
                        "y": 100,
                        "width": 12,
                        "height": 24
                    },
                    "U": {
                        "x": 168,
                        "y": 100,
                        "width": 12,
                        "height": 24
                    },
                    "V": {
                        "x": 189,
                        "y": 100,
                        "width": 12,
                        "height": 24
                    },
                    "W": {
                        "x": 210,
                        "y": 100,
                        "width": 12,
                        "height": 24
                    },
                    "X": {
                        "x": 230,
                        "y": 100,
                        "width": 12,
                        "height": 24
                    },
                    "Y": {
                        "x": 251,
                        "y": 100,
                        "width": 12,
                        "height": 24
                    },
                    "Z": {
                        "x": 271,
                        "y": 100,
                        "width": 12,
                        "height": 24
                    },
                    "[": {
                        "x": 292,
                        "y": 100,
                        "width": 12,
                        "height": 24
                    },
                    "\\": {
                        "x": 4,
                        "y": 132,
                        "width": 12,
                        "height": 24
                    },
                    "]": {
                        "x": 24,
                        "y": 132,
                        "width": 12,
                        "height": 24
                    },
                    "^": {
                        "x": 45,
                        "y": 132,
                        "width": 12,
                        "height": 24
                    },
                    "_": {
                        "x": 65,
                        "y": 132,
                        "width": 12,
                        "height": 24
                    },
                    "`": {
                        "x": 86,
                        "y": 132,
                        "width": 12,
                        "height": 24
                    },
                    "a": {
                        "x": 107,
                        "y": 132,
                        "width": 12,
                        "height": 24
                    },
                    "b": {
                        "x": 127,
                        "y": 132,
                        "width": 12,
                        "height": 24
                    },
                    "c": {
                        "x": 148,
                        "y": 132,
                        "width": 12,
                        "height": 24
                    },
                    "d": {
                        "x": 168,
                        "y": 132,
                        "width": 12,
                        "height": 24
                    },
                    "e": {
                        "x": 189,
                        "y": 132,
                        "width": 12,
                        "height": 24
                    },
                    "f": {
                        "x": 210,
                        "y": 132,
                        "width": 12,
                        "height": 24
                    },
                    "g": {
                        "x": 230,
                        "y": 132,
                        "width": 12,
                        "height": 24
                    },
                    "h": {
                        "x": 251,
                        "y": 132,
                        "width": 12,
                        "height": 24
                    },
                    "i": {
                        "x": 271,
                        "y": 132,
                        "width": 12,
                        "height": 24
                    },
                    "j": {
                        "x": 292,
                        "y": 132,
                        "width": 12,
                        "height": 24
                    },
                    "k": {
                        "x": 4,
                        "y": 164,
                        "width": 12,
                        "height": 24
                    },
                    "l": {
                        "x": 24,
                        "y": 164,
                        "width": 12,
                        "height": 24
                    },
                    "m": {
                        "x": 45,
                        "y": 164,
                        "width": 12,
                        "height": 24
                    },
                    "n": {
                        "x": 65,
                        "y": 164,
                        "width": 12,
                        "height": 24
                    },
                    "o": {
                        "x": 86,
                        "y": 164,
                        "width": 12,
                        "height": 24
                    },
                    "p": {
                        "x": 107,
                        "y": 164,
                        "width": 12,
                        "height": 24
                    },
                    "q": {
                        "x": 127,
                        "y": 164,
                        "width": 12,
                        "height": 24
                    },
                    "r": {
                        "x": 148,
                        "y": 164,
                        "width": 12,
                        "height": 24
                    },
                    "s": {
                        "x": 168,
                        "y": 164,
                        "width": 12,
                        "height": 24
                    },
                    "t": {
                        "x": 189,
                        "y": 164,
                        "width": 12,
                        "height": 24
                    },
                    "u": {
                        "x": 210,
                        "y": 164,
                        "width": 12,
                        "height": 24
                    },
                    "v": {
                        "x": 230,
                        "y": 164,
                        "width": 12,
                        "height": 24
                    },
                    "w": {
                        "x": 251,
                        "y": 164,
                        "width": 12,
                        "height": 24
                    },
                    "x": {
                        "x": 271,
                        "y": 164,
                        "width": 12,
                        "height": 24
                    },
                    "y": {
                        "x": 292,
                        "y": 164,
                        "width": 12,
                        "height": 24
                    },
                    "z": {
                        "x": 4,
                        "y": 196,
                        "width": 12,
                        "height": 24
                    },
                    "{": {
                        "x": 24,
                        "y": 196,
                        "width": 12,
                        "height": 24
                    },
                    "|": {
                        "x": 45,
                        "y": 196,
                        "width": 12,
                        "height": 24
                    },
                    "}": {
                        "x": 65,
                        "y": 196,
                        "width": 12,
                        "height": 24
                    },
                    "~": {
                        "x": 86,
                        "y": 196,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 107,
                        "y": 196,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 127,
                        "y": 196,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 148,
                        "y": 196,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 168,
                        "y": 196,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 189,
                        "y": 196,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 210,
                        "y": 196,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 230,
                        "y": 196,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 251,
                        "y": 196,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 271,
                        "y": 196,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 292,
                        "y": 196,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 4,
                        "y": 228,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 24,
                        "y": 228,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 45,
                        "y": 228,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 65,
                        "y": 228,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 86,
                        "y": 228,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 107,
                        "y": 228,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 127,
                        "y": 228,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 148,
                        "y": 228,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 168,
                        "y": 228,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 189,
                        "y": 228,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 210,
                        "y": 228,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 230,
                        "y": 228,
                        "width": 12,
                        "height": 24
                    },
                    "": {
                        "x": 251,
                        "y": 228,
                        "width": 12,
                        "height": 24
                    },
                    "А": {
                        "x": 271,
                        "y": 228,
                        "width": 12,
                        "height": 24
                    },
                    "Б": {
                        "x": 292,
                        "y": 228,
                        "width": 12,
                        "height": 24
                    },
                    "В": {
                        "x": 4,
                        "y": 260,
                        "width": 12,
                        "height": 24
                    },
                    "Г": {
                        "x": 24,
                        "y": 260,
                        "width": 12,
                        "height": 24
                    },
                    "Д": {
                        "x": 45,
                        "y": 260,
                        "width": 12,
                        "height": 24
                    },
                    "Е": {
                        "x": 65,
                        "y": 260,
                        "width": 12,
                        "height": 24
                    },
                    "Ж": {
                        "x": 86,
                        "y": 260,
                        "width": 12,
                        "height": 24
                    },
                    "З": {
                        "x": 107,
                        "y": 260,
                        "width": 12,
                        "height": 24
                    },
                    "И": {
                        "x": 127,
                        "y": 260,
                        "width": 12,
                        "height": 24
                    },
                    "Й": {
                        "x": 148,
                        "y": 260,
                        "width": 12,
                        "height": 24
                    },
                    "К": {
                        "x": 168,
                        "y": 260,
                        "width": 12,
                        "height": 24
                    },
                    "Л": {
                        "x": 189,
                        "y": 260,
                        "width": 12,
                        "height": 24
                    },
                    "М": {
                        "x": 210,
                        "y": 260,
                        "width": 12,
                        "height": 24
                    },
                    "Н": {
                        "x": 230,
                        "y": 260,
                        "width": 12,
                        "height": 24
                    },
                    "О": {
                        "x": 251,
                        "y": 260,
                        "width": 12,
                        "height": 24
                    },
                    "П": {
                        "x": 271,
                        "y": 260,
                        "width": 12,
                        "height": 24
                    },
                    "Р": {
                        "x": 292,
                        "y": 260,
                        "width": 12,
                        "height": 24
                    },
                    "С": {
                        "x": 4,
                        "y": 292,
                        "width": 12,
                        "height": 24
                    },
                    "Т": {
                        "x": 24,
                        "y": 292,
                        "width": 12,
                        "height": 24
                    },
                    "У": {
                        "x": 45,
                        "y": 292,
                        "width": 12,
                        "height": 24
                    },
                    "Ф": {
                        "x": 65,
                        "y": 292,
                        "width": 12,
                        "height": 24
                    },
                    "Х": {
                        "x": 86,
                        "y": 292,
                        "width": 12,
                        "height": 24
                    },
                    "Ц": {
                        "x": 107,
                        "y": 292,
                        "width": 12,
                        "height": 24
                    },
                    "Ч": {
                        "x": 127,
                        "y": 292,
                        "width": 12,
                        "height": 24
                    },
                    "Ш": {
                        "x": 148,
                        "y": 292,
                        "width": 12,
                        "height": 24
                    },
                    "Щ": {
                        "x": 168,
                        "y": 292,
                        "width": 12,
                        "height": 24
                    },
                    "Ъ": {
                        "x": 189,
                        "y": 292,
                        "width": 12,
                        "height": 24
                    },
                    "Ы": {
                        "x": 210,
                        "y": 292,
                        "width": 12,
                        "height": 24
                    },
                    "Ь": {
                        "x": 230,
                        "y": 292,
                        "width": 12,
                        "height": 24
                    },
                    "Э": {
                        "x": 251,
                        "y": 292,
                        "width": 12,
                        "height": 24
                    },
                    "Ю": {
                        "x": 271,
                        "y": 292,
                        "width": 12,
                        "height": 24
                    },
                    "Я": {
                        "x": 292,
                        "y": 292,
                        "width": 12,
                        "height": 24
                    },
                    "а": {
                        "x": 4,
                        "y": 324,
                        "width": 12,
                        "height": 24
                    },
                    "б": {
                        "x": 24,
                        "y": 324,
                        "width": 12,
                        "height": 24
                    },
                    "в": {
                        "x": 45,
                        "y": 324,
                        "width": 12,
                        "height": 24
                    },
                    "г": {
                        "x": 65,
                        "y": 324,
                        "width": 12,
                        "height": 24
                    },
                    "д": {
                        "x": 86,
                        "y": 324,
                        "width": 12,
                        "height": 24
                    },
                    "е": {
                        "x": 107,
                        "y": 324,
                        "width": 12,
                        "height": 24
                    },
                    "ж": {
                        "x": 127,
                        "y": 324,
                        "width": 12,
                        "height": 24
                    },
                    "з": {
                        "x": 148,
                        "y": 324,
                        "width": 12,
                        "height": 24
                    },
                    "и": {
                        "x": 168,
                        "y": 324,
                        "width": 12,
                        "height": 24
                    },
                    "й": {
                        "x": 189,
                        "y": 324,
                        "width": 12,
                        "height": 24
                    },
                    "к": {
                        "x": 210,
                        "y": 324,
                        "width": 12,
                        "height": 24
                    },
                    "л": {
                        "x": 230,
                        "y": 324,
                        "width": 12,
                        "height": 24
                    },
                    "м": {
                        "x": 251,
                        "y": 324,
                        "width": 12,
                        "height": 24
                    },
                    "н": {
                        "x": 271,
                        "y": 324,
                        "width": 12,
                        "height": 24
                    },
                    "о": {
                        "x": 292,
                        "y": 324,
                        "width": 12,
                        "height": 24
                    },
                    "п": {
                        "x": 4,
                        "y": 356,
                        "width": 12,
                        "height": 24
                    },
                    "р": {
                        "x": 24,
                        "y": 356,
                        "width": 12,
                        "height": 24
                    },
                    "с": {
                        "x": 45,
                        "y": 356,
                        "width": 12,
                        "height": 24
                    },
                    "т": {
                        "x": 65,
                        "y": 356,
                        "width": 12,
                        "height": 24
                    },
                    "у": {
                        "x": 86,
                        "y": 356,
                        "width": 12,
                        "height": 24
                    },
                    "ф": {
                        "x": 107,
                        "y": 356,
                        "width": 12,
                        "height": 24
                    },
                    "х": {
                        "x": 127,
                        "y": 356,
                        "width": 12,
                        "height": 24
                    },
                    "ц": {
                        "x": 148,
                        "y": 356,
                        "width": 12,
                        "height": 24
                    },
                    "ч": {
                        "x": 168,
                        "y": 356,
                        "width": 12,
                        "height": 24
                    },
                    "ш": {
                        "x": 189,
                        "y": 356,
                        "width": 12,
                        "height": 24
                    },
                    "щ": {
                        "x": 210,
                        "y": 356,
                        "width": 12,
                        "height": 24
                    },
                    "ъ": {
                        "x": 230,
                        "y": 356,
                        "width": 12,
                        "height": 24
                    },
                    "ы": {
                        "x": 251,
                        "y": 356,
                        "width": 12,
                        "height": 24
                    },
                    "ь": {
                        "x": 271,
                        "y": 356,
                        "width": 12,
                        "height": 24
                    },
                    "э": {
                        "x": 292,
                        "y": 356,
                        "width": 12,
                        "height": 24
                    },
                    "ю": {
                        "x": 4,
                        "y": 388,
                        "width": 12,
                        "height": 24
                    },
                    "я": {
                        "x": 24,
                        "y": 388,
                        "width": 12,
                        "height": 24
                    },
                    "ѐ": {
                        "x": 45,
                        "y": 388,
                        "width": 12,
                        "height": 24
                    },
                    "ё": {
                        "x": 65,
                        "y": 388,
                        "width": 12,
                        "height": 24
                    },
                    "ђ": {
                        "x": 86,
                        "y": 388,
                        "width": 12,
                        "height": 24
                    },
                    "ѓ": {
                        "x": 107,
                        "y": 388,
                        "width": 12,
                        "height": 24
                    },
                    "є": {
                        "x": 127,
                        "y": 388,
                        "width": 12,
                        "height": 24
                    },
                    "ѕ": {
                        "x": 148,
                        "y": 388,
                        "width": 12,
                        "height": 24
                    },
                    "і": {
                        "x": 168,
                        "y": 388,
                        "width": 12,
                        "height": 24
                    },
                    "ї": {
                        "x": 189,
                        "y": 388,
                        "width": 12,
                        "height": 24
                    },
                    "ј": {
                        "x": 210,
                        "y": 388,
                        "width": 12,
                        "height": 24
                    },
                    "љ": {
                        "x": 230,
                        "y": 388,
                        "width": 12,
                        "height": 24
                    },
                    "њ": {
                        "x": 251,
                        "y": 388,
                        "width": 12,
                        "height": 24
                    },
                    "ћ": {
                        "x": 271,
                        "y": 388,
                        "width": 12,
                        "height": 24
                    }
                },
                "width": 320,
                "height": 416
            }
        }
    ],
    "TileMap": [
        {
            "id": 52,
            "width": 50,
            "height": 50,
            "type": "TileMap",
            "spriteSheet": {
                "id": 57,
                "type": "SpriteSheet"
            },
            "data": [
                [],
                null,
                null,
                [
                    null,
                    null,
                    null,
                    null,
                    2,
                    null,
                    null
                ],
                [
                    null,
                    null
                ],
                [
                    1,
                    null,
                    3,
                    null,
                    null,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1
                ],
                null,
                [
                    null,
                    1,
                    null,
                    1
                ]
            ]
        }
    ],
    "TextField": [
        {
            "id": 76,
            "name": "textField1",
            "width": 120,
            "height": 24,
            "pos": {
                "x": 22,
                "y": 25
            },
            "layerId": 2,
            "type": "TextField",
            "text": "textField1",
            "font": {
                "id": 22,
                "type": "Font"
            }
        }
    ]
};