
import './collapsible.less'

export default RF.registerComponent('app-collapsible', {
    template: {
        type:'string',
        value: require('./collapsible.html')
    },
    getInitialState(){
        return {
            title:'default_title',
            crud:'',
            object:{},
            meta:{},
            id:null,
            opened:false
        }
    },
    toggle: function(){
        this.opened = !this.opened;
    }
});