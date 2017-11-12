
        
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
    

export class MainSceneBehaviour {

    onCreate(){

    }

    onUpdate(){

    }

    onDestroy(){

    }

}

        
export class MulticolorTanksBehaviour {

    onCreate(){
        this.object.vel.x = 10;
    }

    onUpdate(){
        
    }

    onDestroy(){

    }

}
    

        
export class ProfessorBehaviour {

    onCreate(){

    }

    onUpdate(){

    }

    onDestroy(){

    }

}
    