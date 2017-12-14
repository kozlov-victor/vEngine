
export class MainSceneBehaviour {

    
    onCreate(){
        this.x = 0;
        this.y = 0;
        this.points = [];
        
        this.scene.on('mouseMove',e=>{
            //console.log(e.isMouseDown);
        });
        this.scene.on('mouseMove',e=>{
        //   this.x = e.screenX;
        //   this.y = e.screenY;
        //   this.points.push({x:e.screenX,y:e.screenY});
        });
    }

    onUpdate(){
        // this.game._renderer.fillRect(this.x,this.y,10,10,[1,0,0,1]);
        // this.points.forEach(p=>{
        //     this.game._renderer.fillRect(p.x,p.y,10,10,[1,0,0,1]);
        // });
    }

    onDestroy(){

    }

}