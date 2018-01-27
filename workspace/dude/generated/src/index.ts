declare const DEBUG:boolean;

import Game from "./engine/core/game";
import {gameProps} from "./app/gameProps";
import {repository} from "./app/repository";

if (DEBUG && gameProps.startSceneId===undefined) throw 'start scene not specified';

let game = new Game();
game.fromJSON(gameProps);
game.repository.setDescriptions(repository);

let startScene = game.repository.getObject(gameProps.startSceneId,'Scene');
game.runScene(startScene);
if (DEBUG) window['game'] = game;

