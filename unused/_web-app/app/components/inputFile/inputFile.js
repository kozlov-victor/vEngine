
module.exports = Vue.component('app-input-file', {
    props: ['title','accept'],
    template: require('./inputFile.html'),
    data: function(){
        return {

        }
    },
    created: function(){

    },
    mounted: function(){
        var btn = this.$el.querySelector('button');
        var input = this.$el.querySelector('input');
        btn.onclick = function(){
            input.click();
        };
        var self = this;
        input.onchange = function(){
            var file = input.files[0];
            var name = file.name.split('.')[0];
            var url = window.URL || window.webkitURL;
            var src = url.createObjectURL(file);
            self.$emit('picked',src,file,name);
        }
    },
    methods: {
        toggle: function(){

        }
    }
});
