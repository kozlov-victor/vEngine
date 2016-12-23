
module.exports = Vue.component('app-game-object-thumb', {
    props: ['gameObject'],
    template: require('./gameObjectThumb.html'),
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