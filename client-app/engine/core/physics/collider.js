

import {overlapTest} from '../mathEx'

export default class Collider {

    constructor(game){
        this.game = game;
    }

    moveBy(player, dX, dY) {

        let rigidObjects =
            this.game.getCurrScene().getAllGameObjects().
            concat(this.game._currentScene.tileMap.getTilesAtRect(player.getRect()));

        let playerRect = player.getRect();
        playerRect.x+=dX;
        playerRect.y+=dY;
        let collidedByX = false, collidedByY = false;

        for (let i = 0,len = rigidObjects.length;i<len;i++) {
            let obstacle = rigidObjects[i];
            let obstacleRect = obstacle.getRect();
            if (player!==rigidObjects[i] && overlapTest(playerRect, obstacleRect)) {

                let pathToTop = playerRect.bottom - obstacleRect.y;
                let pathToBottom = obstacleRect.bottom - playerRect.y;
                let pathToLeft = playerRect.x + playerRect.width - obstacleRect.x;
                let pathToRight = obstacleRect.right - playerRect.x;

                let minPath = Math.min(pathToTop,pathToBottom,pathToLeft,pathToRight);

                if (pathToTop===minPath) { // closest path to move player to resolve collision is path to top
                    //console.log('top');
                    player.pos.y = obstacleRect.y - playerRect.height;
                    collidedByY = true;
                }
                else if (pathToBottom===minPath) { // closest path to move player to resolve collision is path to top
                    //console.log('bottom');
                    player.pos.y = obstacleRect.bottom;
                    collidedByY = true;
                }
                else if (pathToLeft===minPath) { // closest path to move player to resolve collision is path to top
                    //console.log('left');
                    player.pos.x = obstacleRect.x - playerRect.width;
                    collidedByX = true;
                }
                else if (pathToRight===minPath) { // closest path to move player to resolve collision is path to top
                    //console.log('right');
                    player.pos.x = obstacleRect.x + obstacleRect.width;
                    collidedByX = true;
                }

            }
        }
        if (!collidedByX) player.pos.x+=dX;
        if (!collidedByY) player.pos.y+=dY;
    }



    moveTo(player,newX,newY){ // todo not works!
        let pRect = player.getRect();
        let collided = false;
        if (player.rigidBody) {
            this.game.getCurrScene().getAllGameObjects().
            concat(this.game._currentScene.tileMap.getTilesAtRect(pRect)).
            some(g=>{
                if (overlapTest(pRect,g.getRect())) {
                    collided = true;
                    return true;
                }
            });
        }
        if (collided) return;
        player.pos.x = newX;
        player.pos.y = newY;
    }


}