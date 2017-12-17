/*global DEBUG:true*/

import Game from './engine/core/game'
import gameProps from './app/gameProps.json'
import repository from './app/repository.json'

if (DEBUG && gameProps.startSceneId===undefined) throw 'start scene not specified';

let game = new Game(gameProps);
game.repository.setDescriptions(repository);

let startScene = game.repository.getObject(gameProps.startSceneId,'Scene');
game.runScene(startScene);
if (DEBUG) window.game = game;

