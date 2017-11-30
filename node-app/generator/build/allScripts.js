
        
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
        this.gameObject.rigidBody.mass = 200;
        this.gameObject.rigidBody.static = true;
    }

    onUpdate(){

    }

    onDestroy(){

    }

}
    