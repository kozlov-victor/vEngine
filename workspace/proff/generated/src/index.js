/*global DEBUG:true*/

import Game from './engine/core/game'
import gamePropsData from './app/gameProps.json'
import repositoryData from './app/repository.json'

let gameProps = JSON.parse(gamePropsData);
let repository = JSON.parse(repositoryData);

if (DEBUG && gameProps.startSceneId===undefined) throw 'start scene not specified';

let game = new Game(gameProps);
game.repository.setDescriptions(repository);

let startScene = game.repository.getObject(gameProps.startSceneId,'Scene');
game.runScene(startScene);
if (DEBUG) window.repository = game.repository;

