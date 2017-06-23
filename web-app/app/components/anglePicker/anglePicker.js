
export default RF.registerComponent('app-angle-picker', {

    getInitialState(){
        return {
            object:{val:0},
            value:'val'
        }
    },
    template: {
        type: 'string',
        value: require('./anglePicker.html')
    },

    angleInDeg: function(){
        if (!this.object) return 0;
        let res =  (this.object[this.value] * 180 / Math.PI) % 360;
        return +(res.toFixed(2)) || 0
    },

    calcAngleFromEvent: function(e){
        if (!this.object) return;
        let el = this.$el.querySelector('[data-container]');
        let rect = el.getBoundingClientRect();
        let x = e.clientX - rect.left, y = e.clientY - rect.top;
        let angle = Math.atan2((y -15),(x - 15));
        if (angle<0) angle = 2*Math.PI + angle;
        angle = +(angle.toFixed(2)) || 0;
        this.object[this.value] = angle;
    },
    click: function(e){
        this.calcAngleFromEvent(e);
    },
    mouseMove: function(e){
        if (e.buttons!==1) return;
        this.calcAngleFromEvent(e);
    }
});