
module.exports = Vue.component('app-user-interface', {
    props: [],
    template: require('./userInterface.html'),
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