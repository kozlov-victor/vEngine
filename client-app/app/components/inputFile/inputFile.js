
export default RF.registerComponent('app-input-file', {
    getInitialState: ()=>{
        return {
            title:'',
            accept:'',
            onFilePicked:null
        }
    },
    template: {
        type: 'string',
        value: require('./inputFile.html')
    },
    onMount: function(){
        let btn = this.$el.querySelector('button');
        let input = this.$el.querySelector('input');
        btn.onclick = function(){
            input.click();
        };
        input.onchange = ()=>{
            let file = input.files[0];
            let name = file.name.split('.')[0];
            let url = window.URL || window.webkitURL;
            let src = url.createObjectURL(file);
            this.onFilePicked(src,file,name);
            RF.digest();
        }
    }
});
