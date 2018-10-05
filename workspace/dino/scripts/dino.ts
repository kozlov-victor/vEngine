

export class DinoBehaviour {

    gameObject: any;
    game:any;

    public onCreate(){

    }

    public onUpdate(){
        this.gameObject.pos.x-=1;
        if (this.gameObject.pos.x<-this.gameObject.width) this.gameObject.pos.x = this.game.width + this.gameObject.width;
    }

    public onDestroy(){

    }

}
