

export class DudeBehaviour {

    onCreate(){
        this.gameObject.rigidBody.fixedAngle = true;
        this.game.camera.followTo(this.gameObject);
    }

    onUpdate(){

        let p1 = this.game.lightArray.getLightAt(0);
        //p1.pos.setXY(this.gameObject.pos.x + 16,this.gameObject.pos.y + 16);

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
            //this.gameObject.rigidBody.fixedAngle = true;
        }



    }

    onDestroy(){

    }

}
