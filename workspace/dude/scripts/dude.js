
        
export class DudeBehaviour {

    onCreate(){
        this.gameObject.rigidBody.mass = 100;
    }

    onUpdate(){
        if (this.game._keyboard.isPressed(32)){
            this.gameObject.rigidBody.vel.add(0,-2);
        }
    }

    onDestroy(){

    }

}
    