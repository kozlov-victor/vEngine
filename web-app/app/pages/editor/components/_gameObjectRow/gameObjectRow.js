
module.exports = Vue.component('app-game-object-row', {
    props: ['gameObject','crud'],
    template: require('./gameObjectRow.html'),
    data: function(){
        return {
            utils: require('providers/utils')
        }
    },
    components: {

    },
    methods: {

    }
});