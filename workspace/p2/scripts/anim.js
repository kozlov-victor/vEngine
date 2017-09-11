
        
export class AnimBehaviour {

    onCreate(){
       this.object.playFrameAnimation('walk');
       this.vel = Math.random()*4;
    }

    onUpdate(){
        //this.object.pos.x+=this.vel;
        //if (this.object.pos.x>this.game.width) this.object.pos.x = -10;
    }

    onDestroy(){

    }

}
    