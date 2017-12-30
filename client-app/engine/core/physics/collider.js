/*global window:true*/

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
        let playerRigidBody = player.rigidBody;
        playerRect.x+=deltaPoint.x;
        playerRect.y+=deltaPoint.y;
        let collidedByX = false, collidedByY = false;

        let expectedY = player.pos.y + deltaPoint.y;
        playerRigidBody._onFloorInPrevFrame = playerRigidBody._onFloorInCurrFrame;

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
                    player.pos.setY(obstacleRect.y - playerRect.height);
                    collidedByY = true;
                }
                else if (pathToBottom===minPath) { // closest path to move player to resolve collision is path to bottom
                    player.pos.setY(obstacleRect.bottom);
                    collidedByY = true;
                }
                else if (pathToLeft===minPath) { // closest path to move player to resolve collision is path to left
                    player.pos.setX(obstacleRect.x - playerRect.width);
                    collidedByX = true;
                }
                else if (pathToRight===minPath) { // closest path to move player to resolve collision is path to right
                    player.pos.setX(obstacleRect.x + obstacleRect.width);
                    collidedByX = true;
                }

            }
        }
        if (!collidedByX) player.pos.addX(deltaPoint.x);
        if (!collidedByY) player.pos.addY(deltaPoint.y);

        playerRigidBody._onFloorInCurrFrame = expectedY > player.pos.y;
        playerRigidBody.onFloor =
            playerRigidBody.vel.y>=0 &&
            (playerRigidBody._onFloorInPrevFrame || playerRigidBody._onFloorInCurrFrame);
        if (player.rigidBody.onFloor) player.rigidBody.vel.setY(0);
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
        player.pos.setX(point.x);
        player.pos.setY(point.y);
    }


}