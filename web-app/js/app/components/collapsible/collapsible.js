module.exports = Vue.component('app-collapsible', {
    props: ['title'],
    template: require('./collapsible.html'),
    data: function(){
        return {
            opened: false
        }
    },
    methods: {

    }
});