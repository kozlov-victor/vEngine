
        
export class DudeBehaviour {

    onCreate(){
        this.game.camera.followTo(this.gameObject);
    }

    onUpdate(){
        
        if (
            this.game.keyboard.isJustPressed(this.game.keyboard.KEY.UP) ||
            this.game.keyboard.isJustPressed(this.game.keyboard.KEY.GAME_PAD_1)
        ){
            if (this.gameObject.rigidBody.onFloor) this.gameObject.rigidBody.vel.addXY(0,-340);
        }
        
        if (
            this.game.keyboard.isPressed(this.game.keyboard.KEY.A) ||
            this.game.keyboard.isPressed(this.game.keyboard.KEY.GAME_PAD_5)
        ){
            this.gameObject.rigidBody.vel.addXY(0,-50);
        }
    
        
        
    }

    onDestroy(){

    }

}
    