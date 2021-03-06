export let repository:any = 
	{
    "Scene": [
        {
            "id": 2,
            "name": "mainScene",
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
            "useBG": true,
            "colorBG": {
                "r": 245,
                "g": 253,
                "b": 242
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
                    "width": 1200,
                    "height": 800,
                    "gravityConstant": 0,
                    "scaleStrategy": 1,
                    "startSceneId": 2,
                    "preloadingSceneId": 2
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
            "id": 29,
            "name": "levelComplete",
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
                    "id": 31
                }
            ],
            "colorBG": {
                "r": 22,
                "g": 30,
                "b": 67,
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
                    "width": 1200,
                    "height": 800,
                    "gravityConstant": 0,
                    "scaleStrategy": 1,
                    "startSceneId": 2,
                    "preloadingSceneId": 2
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
        },
        {
            "id": 31,
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
            "type": "Layer",
            "children": [
                {
                    "type": "TextField",
                    "id": 32
                }
            ]
        }
    ],
    "SpriteSheet": [
        {
            "id": 3,
            "name": "tank",
            "width": 228,
            "height": 148,
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
                "main": "resources/tank.png"
            },
            "type": "SpriteSheet",
            "frameRect": {
                "x": {
                    "x": {
                        "x": {
                            "x": {
                                "x": 0,
                                "y": 0,
                                "width": 0,
                                "height": 0
                            }
                        }
                    }
                }
            }
        },
        {
            "id": 7,
            "name": "tankHead",
            "width": 228,
            "height": 148,
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
                "main": "resources/tankHead.png"
            },
            "type": "SpriteSheet",
            "frameRect": {
                "x": {
                    "x": {
                        "x": 0,
                        "y": 0,
                        "width": 0,
                        "height": 0
                    }
                }
            }
        },
        {
            "id": 13,
            "name": "helicopterBody",
            "width": 400,
            "height": 246,
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
                "main": "resources/helicopterBody.png"
            },
            "type": "SpriteSheet",
            "frameRect": {
                "x": {
                    "x": {
                        "x": {
                            "x": 0,
                            "y": 0,
                            "width": 0,
                            "height": 0
                        }
                    }
                }
            }
        },
        {
            "id": 14,
            "name": "helicopterHead",
            "width": 400,
            "height": 246,
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
                "main": "resources/helicopterHead.png"
            },
            "type": "SpriteSheet",
            "frameRect": {
                "x": {
                    "x": {
                        "x": {
                            "x": {
                                "x": {
                                    "x": {
                                        "x": {
                                            "x": 0,
                                            "y": 0,
                                            "width": 0,
                                            "height": 0
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        {
            "id": 17,
            "name": "fireSmoke",
            "width": 59,
            "height": 54,
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
                "main": "resources/fireSmoke.png"
            },
            "type": "SpriteSheet",
            "frameRect": {
                "x": {
                    "x": {
                        "x": {
                            "x": {
                                "x": {
                                    "x": {
                                        "x": {
                                            "x": {
                                                "x": 0,
                                                "y": 0,
                                                "width": 0,
                                                "height": 0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        {
            "name": "explosion",
            "width": 250,
            "height": 125,
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
                "main": "resources/explosion.png"
            },
            "type": "SpriteSheet",
            "numOfFramesH": 8,
            "numOfFramesV": 4,
            "frameRect": {
                "x": 0,
                "y": 0,
                "width": 0,
                "height": 0
            },
            "id": 19
        },
        {
            "name": "fire",
            "width": 256,
            "height": 256,
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
                "main": "resources/fire.png"
            },
            "type": "SpriteSheet",
            "numOfFramesH": 4,
            "numOfFramesV": 4,
            "frameRect": {
                "x": 0,
                "y": 0,
                "width": 0,
                "height": 0
            },
            "id": 23
        },
        {
            "name": "fire2",
            "width": 320,
            "height": 320,
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
                "main": "resources/fire2.png"
            },
            "type": "SpriteSheet",
            "numOfFramesH": 5,
            "numOfFramesV": 5,
            "frameRect": {
                "x": 0,
                "y": 0,
                "width": 0,
                "height": 0
            },
            "id": 26
        },
        {
            "name": "doow",
            "width": 418,
            "height": 418,
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
                "main": "resources/doow.jpg"
            },
            "type": "SpriteSheet",
            "frameRect": {
                "x": 0,
                "y": 0,
                "width": 0,
                "height": 0
            },
            "id": 34
        }
    ],
    "GameObjectProto": [
        {
            "id": 4,
            "name": "tank",
            "width": 228,
            "height": 148,
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
            "rigid": true,
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 3,
                "type": "SpriteSheet"
            },
            "commonBehaviour": [
                {
                    "type": "CommonBehaviour",
                    "id": 22
                }
            ],
            "groupNames": [
                "tank"
            ],
            "collideWith": [
                "tank"
            ],
            "shaderMaterial": {
                "shininess": 10
            },
            "velocity": {
                "x": 0,
                "y": 0
            }
        },
        {
            "name": "tankHead",
            "width": 148,
            "height": 228,
            "pos": {
                "x": 0,
                "y": 0
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 7,
                "type": "SpriteSheet"
            },
            "shaderMaterial": {
                "shininess": 10
            },
            "id": 8
        },
        {
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
            "anchor": {
                "x": 0,
                "y": 0
            },
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 14,
                "type": "SpriteSheet"
            },
            "shaderMaterial": {
                "shininess": 10
            },
            "id": 15
        },
        {
            "id": 16,
            "name": "helicopterBody",
            "width": 400,
            "height": 246,
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
            "rigid": true,
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 13,
                "type": "SpriteSheet"
            },
            "groupNames": [
                "helicopter"
            ],
            "shaderMaterial": {
                "shininess": 10
            },
            "velocity": {
                "x": 0,
                "y": 0
            }
        },
        {
            "id": 18,
            "name": "fireSmoke",
            "width": 59,
            "height": 54,
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
            "rigid": true,
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 17,
                "type": "SpriteSheet"
            },
            "shaderMaterial": {
                "shininess": 10
            },
            "velocity": {
                "x": 0,
                "y": 0
            }
        },
        {
            "id": 20,
            "name": "explosion",
            "width": 31,
            "height": 31,
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
                "id": 19,
                "type": "SpriteSheet"
            },
            "frameAnimations": [
                {
                    "type": "FrameAnimation",
                    "id": 21
                }
            ],
            "shaderMaterial": {
                "shininess": 10
            },
            "velocity": {
                "x": 0,
                "y": 0
            }
        },
        {
            "id": 24,
            "name": "fire",
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
            "anchor": {
                "x": 0,
                "y": 0
            },
            "rigid": true,
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 23,
                "type": "SpriteSheet"
            },
            "frameAnimations": [
                {
                    "type": "FrameAnimation",
                    "id": 25
                }
            ],
            "startFrameAnimationName": "explode",
            "shaderMaterial": {
                "shininess": 10
            },
            "velocity": {
                "x": 0,
                "y": 0
            }
        },
        {
            "id": 27,
            "name": "fire2",
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
            "anchor": {
                "x": 0,
                "y": 0
            },
            "rigid": true,
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 26,
                "type": "SpriteSheet"
            },
            "frameAnimations": [
                {
                    "type": "FrameAnimation",
                    "id": 28
                }
            ],
            "startFrameAnimationName": "explode",
            "shaderMaterial": {
                "shininess": 10
            },
            "velocity": {
                "x": 0,
                "y": 0
            }
        },
        {
            "name": "doow",
            "width": 418,
            "height": 418,
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
                "id": 34,
                "type": "SpriteSheet"
            },
            "velocity": {
                "x": 0,
                "y": 0
            },
            "id": 35
        }
    ],
    "GameObject": [
        {
            "id": 10,
            "name": "tank",
            "pos": {
                "x": -127,
                "y": -203
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 4,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 11,
            "name": "tankHead",
            "pos": {
                "x": -135,
                "y": -210
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 8,
                "type": "GameObjectProto"
            }
        }
    ],
    "Font": [
        {
            "id": 12,
            "name": "default",
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
                "main": "resources/default.png"
            },
            "type": "Font",
            "fontSize": 31,
            "fontFamily": "Blackadder ITC",
            "fontContext": {
                "symbols": {
                    "0": {
                        "x": 4,
                        "y": 52,
                        "width": 11,
                        "height": 40
                    },
                    "1": {
                        "x": 23,
                        "y": 52,
                        "width": 7,
                        "height": 40
                    },
                    "2": {
                        "x": 39,
                        "y": 52,
                        "width": 10,
                        "height": 40
                    },
                    "3": {
                        "x": 57,
                        "y": 52,
                        "width": 10,
                        "height": 40
                    },
                    "4": {
                        "x": 76,
                        "y": 52,
                        "width": 12,
                        "height": 40
                    },
                    "5": {
                        "x": 96,
                        "y": 52,
                        "width": 11,
                        "height": 40
                    },
                    "6": {
                        "x": 115,
                        "y": 52,
                        "width": 11,
                        "height": 40
                    },
                    "7": {
                        "x": 134,
                        "y": 52,
                        "width": 11,
                        "height": 40
                    },
                    "8": {
                        "x": 154,
                        "y": 52,
                        "width": 11,
                        "height": 40
                    },
                    "9": {
                        "x": 173,
                        "y": 52,
                        "width": 11,
                        "height": 40
                    },
                    " ": {
                        "x": 4,
                        "y": 4,
                        "width": 4,
                        "height": 40
                    },
                    "!": {
                        "x": 16,
                        "y": 4,
                        "width": 10,
                        "height": 40
                    },
                    "\"": {
                        "x": 35,
                        "y": 4,
                        "width": 10,
                        "height": 40
                    },
                    "#": {
                        "x": 53,
                        "y": 4,
                        "width": 21,
                        "height": 40
                    },
                    "$": {
                        "x": 82,
                        "y": 4,
                        "width": 13,
                        "height": 40
                    },
                    "%": {
                        "x": 104,
                        "y": 4,
                        "width": 13,
                        "height": 40
                    },
                    "&": {
                        "x": 126,
                        "y": 4,
                        "width": 18,
                        "height": 40
                    },
                    "'": {
                        "x": 152,
                        "y": 4,
                        "width": 5,
                        "height": 40
                    },
                    "(": {
                        "x": 165,
                        "y": 4,
                        "width": 12,
                        "height": 40
                    },
                    ")": {
                        "x": 185,
                        "y": 4,
                        "width": 12,
                        "height": 40
                    },
                    "*": {
                        "x": 205,
                        "y": 4,
                        "width": 11,
                        "height": 40
                    },
                    "+": {
                        "x": 225,
                        "y": 4,
                        "width": 15,
                        "height": 40
                    },
                    ",": {
                        "x": 248,
                        "y": 4,
                        "width": 6,
                        "height": 40
                    },
                    "-": {
                        "x": 263,
                        "y": 4,
                        "width": 9,
                        "height": 40
                    },
                    ".": {
                        "x": 281,
                        "y": 4,
                        "width": 6,
                        "height": 40
                    },
                    "/": {
                        "x": 296,
                        "y": 4,
                        "width": 11,
                        "height": 40
                    },
                    ":": {
                        "x": 193,
                        "y": 52,
                        "width": 7,
                        "height": 40
                    },
                    ";": {
                        "x": 208,
                        "y": 52,
                        "width": 7,
                        "height": 40
                    },
                    "<": {
                        "x": 223,
                        "y": 52,
                        "width": 7,
                        "height": 40
                    },
                    "=": {
                        "x": 239,
                        "y": 52,
                        "width": 15,
                        "height": 40
                    },
                    ">": {
                        "x": 262,
                        "y": 52,
                        "width": 7,
                        "height": 40
                    },
                    "?": {
                        "x": 278,
                        "y": 52,
                        "width": 15,
                        "height": 40
                    },
                    "@": {
                        "x": 4,
                        "y": 100,
                        "width": 24,
                        "height": 40
                    },
                    "A": {
                        "x": 36,
                        "y": 100,
                        "width": 26,
                        "height": 40
                    },
                    "B": {
                        "x": 70,
                        "y": 100,
                        "width": 26,
                        "height": 40
                    },
                    "C": {
                        "x": 104,
                        "y": 100,
                        "width": 24,
                        "height": 40
                    },
                    "D": {
                        "x": 136,
                        "y": 100,
                        "width": 25,
                        "height": 40
                    },
                    "E": {
                        "x": 170,
                        "y": 100,
                        "width": 23,
                        "height": 40
                    },
                    "F": {
                        "x": 201,
                        "y": 100,
                        "width": 18,
                        "height": 40
                    },
                    "G": {
                        "x": 228,
                        "y": 100,
                        "width": 25,
                        "height": 40
                    },
                    "H": {
                        "x": 261,
                        "y": 100,
                        "width": 27,
                        "height": 40
                    },
                    "I": {
                        "x": 297,
                        "y": 100,
                        "width": 15,
                        "height": 40
                    },
                    "J": {
                        "x": 4,
                        "y": 148,
                        "width": 19,
                        "height": 40
                    },
                    "K": {
                        "x": 31,
                        "y": 148,
                        "width": 32,
                        "height": 40
                    },
                    "L": {
                        "x": 72,
                        "y": 148,
                        "width": 21,
                        "height": 40
                    },
                    "M": {
                        "x": 101,
                        "y": 148,
                        "width": 36,
                        "height": 40
                    },
                    "N": {
                        "x": 146,
                        "y": 148,
                        "width": 26,
                        "height": 40
                    },
                    "O": {
                        "x": 180,
                        "y": 148,
                        "width": 24,
                        "height": 40
                    },
                    "P": {
                        "x": 212,
                        "y": 148,
                        "width": 21,
                        "height": 40
                    },
                    "Q": {
                        "x": 242,
                        "y": 148,
                        "width": 29,
                        "height": 40
                    },
                    "R": {
                        "x": 279,
                        "y": 148,
                        "width": 26,
                        "height": 40
                    },
                    "S": {
                        "x": 4,
                        "y": 196,
                        "width": 22,
                        "height": 40
                    },
                    "T": {
                        "x": 34,
                        "y": 196,
                        "width": 16,
                        "height": 40
                    },
                    "U": {
                        "x": 59,
                        "y": 196,
                        "width": 30,
                        "height": 40
                    },
                    "V": {
                        "x": 98,
                        "y": 196,
                        "width": 26,
                        "height": 40
                    },
                    "W": {
                        "x": 132,
                        "y": 196,
                        "width": 32,
                        "height": 40
                    },
                    "X": {
                        "x": 173,
                        "y": 196,
                        "width": 29,
                        "height": 40
                    },
                    "Y": {
                        "x": 211,
                        "y": 196,
                        "width": 23,
                        "height": 40
                    },
                    "Z": {
                        "x": 243,
                        "y": 196,
                        "width": 26,
                        "height": 40
                    },
                    "[": {
                        "x": 278,
                        "y": 196,
                        "width": 12,
                        "height": 40
                    },
                    "\\": {
                        "x": 298,
                        "y": 196,
                        "width": 11,
                        "height": 40
                    },
                    "]": {
                        "x": 4,
                        "y": 244,
                        "width": 12,
                        "height": 40
                    },
                    "^": {
                        "x": 24,
                        "y": 244,
                        "width": 15,
                        "height": 40
                    },
                    "_": {
                        "x": 47,
                        "y": 244,
                        "width": 15,
                        "height": 40
                    },
                    "`": {
                        "x": 70,
                        "y": 244,
                        "width": 15,
                        "height": 40
                    },
                    "a": {
                        "x": 93,
                        "y": 244,
                        "width": 11,
                        "height": 40
                    },
                    "b": {
                        "x": 112,
                        "y": 244,
                        "width": 11,
                        "height": 40
                    },
                    "c": {
                        "x": 131,
                        "y": 244,
                        "width": 9,
                        "height": 40
                    },
                    "d": {
                        "x": 149,
                        "y": 244,
                        "width": 12,
                        "height": 40
                    },
                    "e": {
                        "x": 170,
                        "y": 244,
                        "width": 9,
                        "height": 40
                    },
                    "f": {
                        "x": 187,
                        "y": 244,
                        "width": 9,
                        "height": 40
                    },
                    "g": {
                        "x": 205,
                        "y": 244,
                        "width": 11,
                        "height": 40
                    },
                    "h": {
                        "x": 224,
                        "y": 244,
                        "width": 12,
                        "height": 40
                    },
                    "i": {
                        "x": 244,
                        "y": 244,
                        "width": 7,
                        "height": 40
                    },
                    "j": {
                        "x": 260,
                        "y": 244,
                        "width": 7,
                        "height": 40
                    },
                    "k": {
                        "x": 275,
                        "y": 244,
                        "width": 12,
                        "height": 40
                    },
                    "l": {
                        "x": 295,
                        "y": 244,
                        "width": 7,
                        "height": 40
                    },
                    "m": {
                        "x": 4,
                        "y": 292,
                        "width": 16,
                        "height": 40
                    },
                    "n": {
                        "x": 28,
                        "y": 292,
                        "width": 12,
                        "height": 40
                    },
                    "o": {
                        "x": 49,
                        "y": 292,
                        "width": 10,
                        "height": 40
                    },
                    "p": {
                        "x": 67,
                        "y": 292,
                        "width": 13,
                        "height": 40
                    },
                    "q": {
                        "x": 89,
                        "y": 292,
                        "width": 10,
                        "height": 40
                    },
                    "r": {
                        "x": 108,
                        "y": 292,
                        "width": 9,
                        "height": 40
                    },
                    "s": {
                        "x": 125,
                        "y": 292,
                        "width": 9,
                        "height": 40
                    },
                    "t": {
                        "x": 143,
                        "y": 292,
                        "width": 8,
                        "height": 40
                    },
                    "u": {
                        "x": 160,
                        "y": 292,
                        "width": 14,
                        "height": 40
                    },
                    "v": {
                        "x": 182,
                        "y": 292,
                        "width": 11,
                        "height": 40
                    },
                    "w": {
                        "x": 201,
                        "y": 292,
                        "width": 15,
                        "height": 40
                    },
                    "x": {
                        "x": 225,
                        "y": 292,
                        "width": 13,
                        "height": 40
                    },
                    "y": {
                        "x": 246,
                        "y": 292,
                        "width": 13,
                        "height": 40
                    },
                    "z": {
                        "x": 268,
                        "y": 292,
                        "width": 12,
                        "height": 40
                    },
                    "{": {
                        "x": 288,
                        "y": 292,
                        "width": 12,
                        "height": 40
                    },
                    "|": {
                        "x": 4,
                        "y": 340,
                        "width": 15,
                        "height": 40
                    },
                    "}": {
                        "x": 27,
                        "y": 340,
                        "width": 12,
                        "height": 40
                    },
                    "~": {
                        "x": 47,
                        "y": 340,
                        "width": 25,
                        "height": 40
                    },
                    "": {
                        "x": 80,
                        "y": 340,
                        "width": 15,
                        "height": 40
                    },
                    "": {
                        "x": 104,
                        "y": 340,
                        "width": 0,
                        "height": 40
                    },
                    "": {
                        "x": 112,
                        "y": 340,
                        "width": 0,
                        "height": 40
                    },
                    "": {
                        "x": 120,
                        "y": 340,
                        "width": 15,
                        "height": 40
                    },
                    "": {
                        "x": 143,
                        "y": 340,
                        "width": 15,
                        "height": 40
                    },
                    "": {
                        "x": 167,
                        "y": 340,
                        "width": 15,
                        "height": 40
                    },
                    "": {
                        "x": 190,
                        "y": 340,
                        "width": 24,
                        "height": 40
                    },
                    "": {
                        "x": 223,
                        "y": 340,
                        "width": 15,
                        "height": 40
                    },
                    "": {
                        "x": 246,
                        "y": 340,
                        "width": 15,
                        "height": 40
                    },
                    "": {
                        "x": 270,
                        "y": 340,
                        "width": 11,
                        "height": 40
                    },
                    "": {
                        "x": 289,
                        "y": 340,
                        "width": 24,
                        "height": 40
                    },
                    "": {
                        "x": 4,
                        "y": 388,
                        "width": 14,
                        "height": 40
                    },
                    "": {
                        "x": 26,
                        "y": 388,
                        "width": 15,
                        "height": 40
                    },
                    "": {
                        "x": 50,
                        "y": 388,
                        "width": 30,
                        "height": 40
                    },
                    "": {
                        "x": 89,
                        "y": 388,
                        "width": 0,
                        "height": 40
                    },
                    "": {
                        "x": 97,
                        "y": 388,
                        "width": 0,
                        "height": 40
                    },
                    "": {
                        "x": 105,
                        "y": 388,
                        "width": 0,
                        "height": 40
                    },
                    "": {
                        "x": 113,
                        "y": 388,
                        "width": 0,
                        "height": 40
                    },
                    "": {
                        "x": 121,
                        "y": 388,
                        "width": 6,
                        "height": 40
                    },
                    "": {
                        "x": 135,
                        "y": 388,
                        "width": 6,
                        "height": 40
                    },
                    "": {
                        "x": 149,
                        "y": 388,
                        "width": 13,
                        "height": 40
                    },
                    "": {
                        "x": 170,
                        "y": 388,
                        "width": 13,
                        "height": 40
                    },
                    "": {
                        "x": 191,
                        "y": 388,
                        "width": 0,
                        "height": 40
                    },
                    "А": {
                        "x": 199,
                        "y": 388,
                        "width": 22,
                        "height": 40
                    },
                    "Б": {
                        "x": 230,
                        "y": 388,
                        "width": 17,
                        "height": 40
                    },
                    "В": {
                        "x": 256,
                        "y": 388,
                        "width": 20,
                        "height": 40
                    },
                    "Г": {
                        "x": 284,
                        "y": 388,
                        "width": 17,
                        "height": 40
                    },
                    "Д": {
                        "x": 4,
                        "y": 436,
                        "width": 21,
                        "height": 40
                    },
                    "Е": {
                        "x": 33,
                        "y": 436,
                        "width": 18,
                        "height": 40
                    },
                    "Ж": {
                        "x": 60,
                        "y": 436,
                        "width": 27,
                        "height": 40
                    },
                    "З": {
                        "x": 95,
                        "y": 436,
                        "width": 15,
                        "height": 40
                    },
                    "И": {
                        "x": 119,
                        "y": 436,
                        "width": 22,
                        "height": 40
                    },
                    "Й": {
                        "x": 149,
                        "y": 436,
                        "width": 22,
                        "height": 40
                    },
                    "К": {
                        "x": 180,
                        "y": 436,
                        "width": 20,
                        "height": 40
                    },
                    "Л": {
                        "x": 208,
                        "y": 436,
                        "width": 21,
                        "height": 40
                    },
                    "М": {
                        "x": 237,
                        "y": 436,
                        "width": 27,
                        "height": 40
                    },
                    "Н": {
                        "x": 273,
                        "y": 436,
                        "width": 22,
                        "height": 40
                    },
                    "О": {
                        "x": 4,
                        "y": 484,
                        "width": 22,
                        "height": 40
                    },
                    "П": {
                        "x": 34,
                        "y": 484,
                        "width": 22,
                        "height": 40
                    },
                    "Р": {
                        "x": 64,
                        "y": 484,
                        "width": 17,
                        "height": 40
                    },
                    "С": {
                        "x": 90,
                        "y": 484,
                        "width": 20,
                        "height": 40
                    },
                    "Т": {
                        "x": 118,
                        "y": 484,
                        "width": 18,
                        "height": 40
                    },
                    "У": {
                        "x": 145,
                        "y": 484,
                        "width": 21,
                        "height": 40
                    },
                    "Ф": {
                        "x": 175,
                        "y": 484,
                        "width": 24,
                        "height": 40
                    },
                    "Х": {
                        "x": 208,
                        "y": 484,
                        "width": 22,
                        "height": 40
                    },
                    "Ц": {
                        "x": 238,
                        "y": 484,
                        "width": 22,
                        "height": 40
                    },
                    "Ч": {
                        "x": 268,
                        "y": 484,
                        "width": 20,
                        "height": 40
                    },
                    "Ш": {
                        "x": 4,
                        "y": 532,
                        "width": 31,
                        "height": 40
                    },
                    "Щ": {
                        "x": 43,
                        "y": 532,
                        "width": 31,
                        "height": 40
                    },
                    "Ъ": {
                        "x": 82,
                        "y": 532,
                        "width": 21,
                        "height": 40
                    },
                    "Ы": {
                        "x": 112,
                        "y": 532,
                        "width": 27,
                        "height": 40
                    },
                    "Ь": {
                        "x": 147,
                        "y": 532,
                        "width": 17,
                        "height": 40
                    },
                    "Э": {
                        "x": 173,
                        "y": 532,
                        "width": 20,
                        "height": 40
                    },
                    "Ю": {
                        "x": 201,
                        "y": 532,
                        "width": 31,
                        "height": 40
                    },
                    "Я": {
                        "x": 241,
                        "y": 532,
                        "width": 20,
                        "height": 40
                    },
                    "а": {
                        "x": 270,
                        "y": 532,
                        "width": 13,
                        "height": 40
                    },
                    "б": {
                        "x": 292,
                        "y": 532,
                        "width": 15,
                        "height": 40
                    },
                    "в": {
                        "x": 4,
                        "y": 580,
                        "width": 14,
                        "height": 40
                    },
                    "г": {
                        "x": 26,
                        "y": 580,
                        "width": 12,
                        "height": 40
                    },
                    "д": {
                        "x": 47,
                        "y": 580,
                        "width": 15,
                        "height": 40
                    },
                    "е": {
                        "x": 71,
                        "y": 580,
                        "width": 13,
                        "height": 40
                    },
                    "ж": {
                        "x": 92,
                        "y": 580,
                        "width": 21,
                        "height": 40
                    },
                    "з": {
                        "x": 122,
                        "y": 580,
                        "width": 12,
                        "height": 40
                    },
                    "и": {
                        "x": 142,
                        "y": 580,
                        "width": 16,
                        "height": 40
                    },
                    "й": {
                        "x": 167,
                        "y": 580,
                        "width": 16,
                        "height": 40
                    },
                    "к": {
                        "x": 191,
                        "y": 580,
                        "width": 15,
                        "height": 40
                    },
                    "л": {
                        "x": 214,
                        "y": 580,
                        "width": 15,
                        "height": 40
                    },
                    "м": {
                        "x": 238,
                        "y": 580,
                        "width": 19,
                        "height": 40
                    },
                    "н": {
                        "x": 265,
                        "y": 580,
                        "width": 16,
                        "height": 40
                    },
                    "о": {
                        "x": 290,
                        "y": 580,
                        "width": 15,
                        "height": 40
                    },
                    "п": {
                        "x": 4,
                        "y": 628,
                        "width": 16,
                        "height": 40
                    },
                    "р": {
                        "x": 28,
                        "y": 628,
                        "width": 15,
                        "height": 40
                    },
                    "с": {
                        "x": 52,
                        "y": 628,
                        "width": 13,
                        "height": 40
                    },
                    "т": {
                        "x": 73,
                        "y": 628,
                        "width": 13,
                        "height": 40
                    },
                    "у": {
                        "x": 95,
                        "y": 628,
                        "width": 15,
                        "height": 40
                    },
                    "ф": {
                        "x": 118,
                        "y": 628,
                        "width": 20,
                        "height": 40
                    },
                    "х": {
                        "x": 146,
                        "y": 628,
                        "width": 15,
                        "height": 40
                    },
                    "ц": {
                        "x": 170,
                        "y": 628,
                        "width": 16,
                        "height": 40
                    },
                    "ч": {
                        "x": 195,
                        "y": 628,
                        "width": 15,
                        "height": 40
                    },
                    "ш": {
                        "x": 218,
                        "y": 628,
                        "width": 23,
                        "height": 40
                    },
                    "щ": {
                        "x": 250,
                        "y": 628,
                        "width": 23,
                        "height": 40
                    },
                    "ъ": {
                        "x": 282,
                        "y": 628,
                        "width": 16,
                        "height": 40
                    },
                    "ы": {
                        "x": 4,
                        "y": 676,
                        "width": 20,
                        "height": 40
                    },
                    "ь": {
                        "x": 32,
                        "y": 676,
                        "width": 14,
                        "height": 40
                    },
                    "э": {
                        "x": 54,
                        "y": 676,
                        "width": 13,
                        "height": 40
                    },
                    "ю": {
                        "x": 76,
                        "y": 676,
                        "width": 23,
                        "height": 40
                    },
                    "я": {
                        "x": 107,
                        "y": 676,
                        "width": 14,
                        "height": 40
                    },
                    "ѐ": {
                        "x": 129,
                        "y": 676,
                        "width": 13,
                        "height": 40
                    },
                    "ё": {
                        "x": 151,
                        "y": 676,
                        "width": 13,
                        "height": 40
                    },
                    "ђ": {
                        "x": 173,
                        "y": 676,
                        "width": 14,
                        "height": 40
                    },
                    "ѓ": {
                        "x": 196,
                        "y": 676,
                        "width": 12,
                        "height": 40
                    },
                    "є": {
                        "x": 216,
                        "y": 676,
                        "width": 13,
                        "height": 40
                    },
                    "ѕ": {
                        "x": 238,
                        "y": 676,
                        "width": 12,
                        "height": 40
                    },
                    "і": {
                        "x": 258,
                        "y": 676,
                        "width": 8,
                        "height": 40
                    },
                    "ї": {
                        "x": 274,
                        "y": 676,
                        "width": 8,
                        "height": 40
                    },
                    "ј": {
                        "x": 291,
                        "y": 676,
                        "width": 8,
                        "height": 40
                    },
                    "љ": {
                        "x": 4,
                        "y": 724,
                        "width": 22,
                        "height": 40
                    },
                    "њ": {
                        "x": 34,
                        "y": 724,
                        "width": 22,
                        "height": 40
                    },
                    "ћ": {
                        "x": 64,
                        "y": 724,
                        "width": 15,
                        "height": 40
                    }
                },
                "width": 320,
                "height": 768
            }
        }
    ],
    "FrameAnimation": [
        {
            "id": 21,
            "name": "explode",
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
                29,
                30,
                31
            ],
            "duration": 2000
        },
        {
            "name": "explode",
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
                15
            ],
            "duration": 800,
            "id": 25
        },
        {
            "name": "explode",
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
                24
            ],
            "id": 28
        }
    ],
    "CommonBehaviour": [
        {
            "name": "Draggable",
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
            "type": "CommonBehaviour",
            "id": 22
        }
    ],
    "TextField": [
        {
            "name": "textField1",
            "pos": {
                "x": 375,
                "y": 156
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "anchor": {
                "x": 0,
                "y": 0
            },
            "layerId": 2,
            "drawingRect": {
                "x": 0,
                "y": 0,
                "width": 0,
                "height": 0
            },
            "type": "TextField",
            "text": "textField1",
            "font": {
                "id": 12,
                "type": "Font"
            },
            "id": 30
        },
        {
            "id": 32,
            "name": "txtInfo",
            "pos": {
                "x": 399,
                "y": 175
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "anchor": {
                "x": 0,
                "y": 0
            },
            "layerId": 31,
            "drawingRect": {
                "x": {
                    "x": 0,
                    "y": 0,
                    "width": 0,
                    "height": 0
                }
            },
            "type": "TextField",
            "text": "textField2",
            "font": {
                "id": 12,
                "type": "Font"
            }
        }
    ]
};