Vue.component('left-panel', {
    props: [],
    template: require('./gameProps.html'),
    data: function(){
        return {
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