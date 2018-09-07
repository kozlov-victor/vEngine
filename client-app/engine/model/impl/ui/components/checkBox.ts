
import {Container} from "../generic/container";
import {Rectangle} from "../drawable/rectangle";
import {Color} from "../../../../core/color";

export class CheckBox extends Container {

    private rNormal:Container;
    private rChecked: Container;

    checked: boolean = false;

    constructor(game) {
        super(game);
        let rNormal = new Rectangle(game);
        rNormal.width = 10;
        rNormal.height = 10;
        rNormal.fillColor = new Color(10,10,10,100);

        let rChecked = new Rectangle(game);
        rChecked.width = 10;
        rChecked.height = 10;
        rChecked.fillColor = new Color(10,50,10,100);

        this.rNormal = rNormal;
        this.rChecked = rChecked;
        this.on('click',()=>this.toggle());
    }

    toggle(){
        this.checked = !this.checked;
    }

    onGeometryChanged(){
        this.rNormal.setWH(this.width,this.height);
        this.rChecked.setWH(this.width,this.height);
    }

    protected getBgByState():Container{
        if (this.checked) return this.rChecked;
        return this.rNormal;
    }

    draw(){
        let bg:Container = this.getBgByState();
        if (!bg) return;
        bg.draw();
    }
}