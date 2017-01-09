
module.exports = Vue.component('app-scene-game-object', {
    props: [],
    template: require('./sceneGameObject.html'),
    data: function () {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {

    },
    methods: {

    }
});