let id = 0;

export default RF.registerComponent('app-collapsible', {
    template: {
        type:'string',
        value: require('./collapsible.html')
    },
    getInitialState(){
        return {
            title:'default',
            crud:'',
            object:'',
            meta:'',
            id:null,
            opened:false
        }
    },
    onMounted: function(){
        this.id = id;
        this.opened = localStorage['clps_'+this.id]=='true';
        id++;
    },
    toggle: function(){
        this.opened = ! this.opened;
        localStorage['clps_'+this.id] = this.opened;
    }
});