

module.exports = Vue.component('app-modal', {
    props: [],
    template: require('./modal.html'),
    data: function(){
        return {

        }
    },
    created: function(){

    },
    methods: {
        close: function(){
            this.$emit('close');
        }
    }
});