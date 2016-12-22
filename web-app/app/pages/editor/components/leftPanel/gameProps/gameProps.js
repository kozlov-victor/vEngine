Vue.component('app-game-props', {
    props: [],
    template: require('./gameProps.html'),
    data: function(){
        return {
            form:require('providers/validator').new(),
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {
        appCollapsible: require('components/collapsible/collapsible')
    },
    methods: {
        saveGameProps: function(){
            console.log('save',JSON.stringify(this.editData.gameProps));
        }
    }
});