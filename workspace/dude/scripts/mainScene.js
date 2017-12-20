
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
        this.offsetX = 0;
    }

    onUpdate(){
        this.game.renderer.fillRect(this.x,this.y,10,10,this.color);
        this.points.forEach(p=>{
            //this.game.renderer.fillCircle(p.x,p.y,50,this.color);
            //this.game.renderer.drawLine(p.x,p.y,p.x+20,p.y+30,this.color);
        });
        //this.game.renderer.log(this.points.length);
        //this.game.renderer.log({a:2});
        // this.game.renderer.drawTiledImage('resources/tile.jpg',
        //           0, 0, this.game.width, this.game.height,
        //           this.offsetX,0);
        //this.offsetX+=0.1;
    }

    onDestroy(){

    }

}