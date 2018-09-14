import {Game} from "@engine/core/game";
import {gameProps} from "./gameProps";
import {repository} from "./repository";
import * as allBehaviours from "./allBehaviours";

declare const DEBUG:boolean;
declare const EMBED_RESOURCES:boolean;

if (DEBUG && gameProps.startSceneId===undefined) throw 'start scene not specified';

let game = new Game();
game.fromJSON(gameProps);
game.repository.setDescriptions(repository);
game.repository.allBehaviours = allBehaviours;
if (EMBED_RESOURCES) {
    game.repository.embeddedResources = require('./embeddedResources').embeddedResources;
}

let startScene = game.repository.getObject(gameProps.startSceneId,'Scene');
game.runScene(startScene);

