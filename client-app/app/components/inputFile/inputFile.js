
import './inputFile.less'

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
            let fileNameArr = file.name.split('.');
            let ext = fileNameArr.pop();
            let name = fileNameArr.join('');
            let url = window.URL || window.webkitURL;
            let src = url.createObjectURL(file);
            this.onFilePicked(src,file,name,ext);
            RF.digest();
        }
    }
});
