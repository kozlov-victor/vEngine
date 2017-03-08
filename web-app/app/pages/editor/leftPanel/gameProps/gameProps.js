const restResource = require('providers/rest/resource');

module.exports = Vue.component('app-game-props', {
    props: [],
    template: require('./gameProps.html'),
    data: function(){
        return {
            form:require('providers/validator').new(),
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll(),
            scales: _require('consts').SCALE_STRATEGY
        }
    },
    methods: {
        saveGameProps: function(){
            restResource.saveGameProps(this.editData.gameProps);
        }
    }
});