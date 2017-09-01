
import Game from 'coreEngine/src/engine/game'
import * as allScripts from 'build/allScripts'
//import Compressor from 'coreEngine/src/utils/compressor'

let gameProps = GAME_PROPS_DATA;
if (DEBUG && !gameProps.startSceneId) throw 'start scene not specified';

let game = new Game(GAME_PROPS_DATA);
game._repository.setDescriptions(REPOSITORY_DATA);

let startScene = game._repository.getObject(gameProps.startSceneId,'Scene');
startScene.layers.forEach(l=>{
   l.gameObjects.forEach(g=>{
      let scriptName = `${g.name[0].toUpperCase()}${g.name.substr(1)}Behaviour`;
      let bh = allScripts[scriptName];
      if (bh) g.setIndividualBehaviour(bh);
   });
});
game.runScene(startScene);

