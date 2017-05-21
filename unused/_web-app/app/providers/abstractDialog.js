
module.exports = {
    data: function () {
        return {
            opened: false
        }
    },
    methods: {
        open: function () {
            this.opened = true;
        },
        close: function(){
            this.opened = false;
        }
    }
};