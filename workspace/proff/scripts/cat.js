
        
export class CatBehaviour {

    onCreate(){
        this.object.vel.x = -100;
    }

    onUpdate(){
        if (this.object.pos.x<-100) this.object.pos.x = 700;
    }

    onDestroy(){

    }

}
    