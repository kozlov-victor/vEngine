var resource = require('providers/resource');

module.exports = Vue.component('app-scenes', {
    props: [],
    template: require('./scenes.html'),
    data: function(){
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {
        appGameObjectThumb: require('./gameObjectThumb/gameObjectThumb')
    },
    methods: {

    }
});
