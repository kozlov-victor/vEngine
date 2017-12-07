
        
export class DudeBehaviour {

    onCreate(){
        this.game.camera.followTo(this.gameObject);
    }

    onUpdate(){
        //console.log('on floor',this.gameObject.rigidBody.onFloor);
        if (this.game.keyboard.isJustPressed(this.game.keyboard.KEY.UP)){
            //console.log('just pressed',this.gameObject.rigidBody.onFloor);
            if (this.gameObject.rigidBody.onFloor) this.gameObject.rigidBody.vel.add(0,-340);
        }
        
        if (this.game.keyboard.isJustPressed(this.game.keyboard.KEY.A)){
            console.log('pr');
            this.gameObject.rigidBody.vel.add(0,-50);
        }    
    }

    onDestroy(){

    }

}
    