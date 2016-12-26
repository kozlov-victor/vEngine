
module.exports = Vue.component('app-angle-picker', {
    props: ['object','value'],
    template: require('./anglePicker.html'),
    data: function(){
        return {
           angleInDeg: 0,
           angleInRad: 0
        }
    },
    created: function(){
        this.angleInRad = this.object[this.value];
        this.angleInDeg = this.angleInRad * 180 / Math.PI;
    },
    methods: {
        calcAngleFromEvent: function(e){
            var el = this.$el.querySelector('[data-container]');
            var rect = el.getBoundingClientRect();
            var x = e.clientX - rect.left, y = e.clientY - rect.top;
            var angle = Math.atan2((y -15),(x - 15));
            if (angle<0) angle = 2*Math.PI + angle;
            this.angleInRad = angle;
            this.angleInDeg = angle * 180 / Math.PI;
            this.object[this.value] = this.angleInRad;
        },
        click: function(e){
            this.calcAngleFromEvent(e);
        },
        mouseMove: function(e){
            if (e.buttons!==1) return;
            this.calcAngleFromEvent(e);
        }
    }
});