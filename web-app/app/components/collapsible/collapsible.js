var id = 0;

module.exports = Vue.component('app-collapsible', {
    props: ['title','crud','object'],
    template: require('./collapsible.html'),
    data: function(){
        return {
            opened: false,
            id:null
        }
    },
    created: function(){
        this.id = id;
        this.opened = localStorage['clps_'+this.id]=='true';
        id++;
    },
    methods: {
        toggle: function(){
            this.opened = ! this.opened;
            localStorage['clps_'+this.id] = this.opened;
        }
    }
});