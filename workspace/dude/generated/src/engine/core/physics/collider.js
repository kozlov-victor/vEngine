

import {overlapTest} from '../mathEx'

export default class Collider {

    constructor(game){
        this.game = game;
    }

    moveBy(player, deltaPoint) {

        let rigidObjects =
            this.game.getCurrScene().getAllGameObjects().
            concat(this.game._currentScene.tileMap.getTilesAtRect(player.getRect()));

        let playerRect = player.getRect();
        playerRect.x+=deltaPoint.x;
        playerRect.y+=deltaPoint.y;
        let collidedByX = false, collidedByY = false;

        let expectedY = player.pos.y + deltaPoint.y;

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
                else if (pathToBottom===minPath) { // closest path to move player to resolve collision is path to bottom
                    //console.log('bottom');
                    player.pos.y = obstacleRect.bottom;
                    collidedByY = true;
                }
                else if (pathToLeft===minPath) { // closest path to move player to resolve collision is path to left
                    //console.log('left');
                    player.pos.x = obstacleRect.x - playerRect.width;
                    collidedByX = true;
                }
                else if (pathToRight===minPath) { // closest path to move player to resolve collision is path to right
                    //console.log('right');
                    player.pos.x = obstacleRect.x + obstacleRect.width;
                    collidedByX = true;
                }

            }
        }
        if (!collidedByX) player.pos.x+=deltaPoint.x;
        if (!collidedByY) player.pos.y+=deltaPoint.y;

        player.rigidBody.onFloor = expectedY > player.pos.y;
        if (player.id===7) this.game.renderer.log('onFloor',expectedY,player.pos.y,player.rigidBody.onFloor);
        //if (player.rigidBody.onFloor) player.rigidBody.vel.y = 0;
    }



    moveTo(player,point){ // todo not works!
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
        player.pos.x = point.x;
        player.pos.y = point.y;
    }


}