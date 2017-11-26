
        
export class CatBehaviour {

    onCreate(){
        this.gameObject.vel.x = -100;
    }

    onUpdate(){
        if (this.gameObject.pos.x<-100) this.gameObject.pos.x = 700;
    }

    onDestroy(){

    }

}
    