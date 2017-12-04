
        
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
    }

    onDestroy(){

    }

}
    

export class MainSceneBehaviour {

    onCreate(){
        
    }

    onUpdate(){

    }

    onDestroy(){

    }

}

        
export class PlatformBehaviour {

    onCreate(){
        this.gameObject.rigidBody.static = true;
    }

    onUpdate(){

    }

    onDestroy(){

    }

}
    