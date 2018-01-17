declare const RF;
import './inputFile.less'

@RF.decorateComponent({
    name: 'app-input-file',
    template: require('./inputFile.html')
})
export default class InputFile {

    title = '';
    accept = '';
    onFilePicked = null;
    $el;

    constructor(){
        this.title = '';
        this.accept = '';
        this.onFilePicked = null;
    }


    onMount(){
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
            let url = window.URL || window['webkitURL'];
            let src = url.createObjectURL(file);
            this.onFilePicked(src,file,name,ext);
            RF.digest();
        }
    }
}
