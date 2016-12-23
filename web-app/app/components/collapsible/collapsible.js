

module.exports = Vue.component('app-collapsible', {
    props: ['title','id','crud','object'],
    template: require('./collapsible.html'),
    data: function(){
        return {
            opened: localStorage[this.id]=='true'
        }
    },
    methods: {
        toggle: function(){
            this.opened = ! this.opened;
            localStorage[this.id] = this.opened;
        }
    }
});