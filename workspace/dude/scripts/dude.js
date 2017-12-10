
        
export class DudeBehaviour {

    onCreate(){
        this.game.camera.followTo(this.gameObject);
    }

    onUpdate(){
        if (this.game.keyboard.isJustPressed(this.game.keyboard.KEY.UP)){
            if (this.gameObject.rigidBody.onFloor) this.gameObject.rigidBody.vel.addXY(0,-340);
        }
        
        if (this.game.keyboard.isPressed(this.game.keyboard.KEY.A)){
            console.log('pr');
            this.gameObject.rigidBody.vel.addXY(0,-50);
        }    
        
        //let tilesInfo = this.game.getCurrScene().tileMap.getTilesAtRect(this.gameObject.getRect());
        //if (tilesInfo.length) console.log(tilesInfo,this.gameObject.pos);
        
    }

    onDestroy(){

    }

}
    