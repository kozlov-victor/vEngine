

export default RF.registerComponent('app-modal', {
    template: {
        type:'string',
        value:require('./modal.html')
    },
    getInitialState: function() {
        return {
            opened:false
        }
    },
    close: function(){
        this.opened = false;
    },
    open: function(){
        this.opened = true;
    }
});