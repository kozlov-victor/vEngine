Vue.component('left-panel', {
    props: [],
    template: require('./leftPanel.html'),
    data: function(){
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    methods: {

    }
});