
module.exports = Vue.component('explorer', {
    props: [],
    template: require('./explorer.html'),
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