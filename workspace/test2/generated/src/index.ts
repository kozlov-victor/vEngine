declare const DEBUG:boolean;
declare const EMBED_RESOURCES:boolean;

import {Game} from "./engine/core/game";
import {gameProps} from "./app/gameProps";
import {repository} from "./app/repository";

if (DEBUG && gameProps.startSceneId===undefined) throw 'start scene not specified';

let game = new Game();
game.fromJSON(gameProps);
game.repository.setDescriptions(repository);
if (EMBED_RESOURCES) {
    game.repository.embeddedResources = require('./app/embeddedResources').embeddedResources;
}

let startScene = game.repository.getObject(gameProps.startSceneId,'Scene');
game.runScene(startScene);

