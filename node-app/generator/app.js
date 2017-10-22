
import Game from 'coreEngine/src/engine/game'
//import Compressor from 'coreEngine/src/utils/compressor'

let gameProps = GAME_PROPS_DATA;
if (DEBUG && gameProps.startSceneId==null) throw 'start scene not specified';

let game = new Game(GAME_PROPS_DATA);
game.repository.setDescriptions(REPOSITORY_DATA);

let startScene = game.repository.getObject(gameProps.startSceneId,'Scene');
game.runScene(startScene);
if (DEBUG) window.repository = game.repository;

