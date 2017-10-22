/*global RF:true*/
@RF.decorateComponent({
    name: 'app-angle-picker',
    template: require('./anglePicker.html')
})
export default class AnglePicker {

    constructor(){
        this.object = {val:0};
        this.value = 'val';
    }

    angleInDeg(){
        if (!this.object) return 0;
        let res =  (this.object[this.value] * 180 / Math.PI) % 360;
        return +(res.toFixed(2)) || 0
    }

    calcAngleFromEvent(e){
        if (!this.object) return;
        let el = this.$el.querySelector('[data-container]');
        let rect = el.getBoundingClientRect();
        let x = e.clientX - rect.left, y = e.clientY - rect.top;
        let angle = Math.atan2((y -15),(x - 15));
        if (angle<0) angle = 2*Math.PI + angle;
        angle = +(angle.toFixed(2)) || 0;
        this.object[this.value] = angle;
    }
    click(e){
        this.calcAngleFromEvent(e);
    }
    mouseMove(e){
        if (e.buttons!==1) return;
        this.calcAngleFromEvent(e);
    }
}