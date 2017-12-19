
export class MainSceneBehaviour {

    
    onCreate(){
        this.x = 0;
        this.y = 0;
        this.color = [1,0,0,1];//[1,0,0,1] 'rgba(255,0,0,255)'
        this.points = [];
        
        this.scene.on('mouseMove',e=>{
            //console.log(e.isMouseDown);
        });
        this.scene.on('mouseMove',e=>{
          this.x = e.screenX;
          this.y = e.screenY;
          this.points.push({x:e.screenX,y:e.screenY});
        });
    }

    onUpdate(){
        this.game.renderer.fillRect(this.x,this.y,10,10,this.color);
        this.points.forEach(p=>{
            //this.game.renderer.fillCircle(p.x,p.y,50,this.color);
            this.game.renderer.drawLine(p.x,p.y,p.x+20,p.y+30,this.color);
        });
        //this.game.renderer.log(this.points.length);
    }

    onDestroy(){

    }

}