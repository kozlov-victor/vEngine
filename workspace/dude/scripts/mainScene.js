
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
          //this.points.push({x:e.screenX,y:e.screenY});
        });
        this.offsetX = 0;
        this.cnt=0;
        
        
        this.scene.pointLight.color = [0.8,0.8,0.6,1];
        this.scene.pointLight.radius = 65;
        this.scene.ambientLight.color = [0.1,0.1,0.2,1];
        
    }

    onUpdate(){
        this.cnt++;
        if (this.cnt===5) {
            this.points.shift();
            this.cnt=0;
        }    
        this.game.renderer.fillRect({x:this.x,y:this.y,width:10,height:10},this.color);
       
        this.points.forEach(p=>{
            //this.game.renderer.fillRect({x:p.x,y:p.y,width:50,height:50},this.color);
            //this.game.renderer.fillCircle(p.x,p.y,25,[0,1,0,1]);
            //this.game.renderer.log(p.x);
            //this.game.renderer.drawLine(p.x,p.y,p.x+50,p.y+30,[0,1,1,1]);
        });
        //this.game.renderer.log(this.points.length);
        //this.game.renderer.log({a:2});
        let camera = this.game.camera;
        let camRect = this.game.camera.getRectScaled();
        this.game.renderer.drawTiledImage('resources/tile.jpg',
            {x:130,y:0,width:130,height:61},
            {x:camRect.x, y:camRect.y, width:100, height:100},
            {x:this.offsetX,y:this.offsetX}
        );
        this.game.renderer.log(camRect);
        this.offsetX+=0.1;
    }

    onDestroy(){

    }

}