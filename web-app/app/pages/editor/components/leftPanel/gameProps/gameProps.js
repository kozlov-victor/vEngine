Vue.component('app-game-props', {
    props: [],
    template: require('./gameProps.html'),
    data: function(){
        return {
            errors: {},
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {
        appCollapsible: require('components/collapsible/collapsible')
    },
    methods: {

    }
});