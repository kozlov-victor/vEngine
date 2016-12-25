
module.exports = Vue.component('app-game-objects', {
    props: [],
    template: require('./gameObjects.html'),
    data: function(){
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {
        appGameObjectRow: require('../_gameObjectRow/gameObjectRow')
    },
    methods: {
        createGameObject: function(){
            console.log('create go');
        },
        editGameObjectScript: function(){
            console.log('edit scr');
        },
        editGameObject: function(){
            console.log('create go');
        }
    }
});
