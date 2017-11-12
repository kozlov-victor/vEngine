/*global RF:true*/
import BaseComponent from 'app/baseComponent'

//opts: minify minify engineOnly embedResources embedScript

let w;
@RF.decorateComponent({
    name: 'app-top-panel',
    template: require('./topPanel.html')
})
export default class TopPanel extends BaseComponent {

    constructor(){
        super();
    }

    openWindow(){
        let buildOpts = this.editData.buildOpts;
        if (buildOpts.windowed) {
            w = window.open(
                `/${this.editData.projectName}/out`,
                this.editData.projectName,
                `
                left=${(window.screen.width - this.editData.game.width)/2},
                top=${(window.screen.height - this.editData.game.height)/2},
                width=${this.editData.game.width},
                height=${this.editData.game.height},
                toolbar=0,resizable=0`
            );
        } else {
            w = window.open('/'+this.editData.projectName+'/out');
        }
    }

    async run(){
        let buildOpts = this.editData.buildOpts;
        await this.http.get(
            '/resource/generate',
            {
                debug: buildOpts.debug?'1':'',
                r: Math.random(),
                projectName: this.editData.projectName,
                minify: buildOpts.minify?'1':''
            }
        );

        if (!w || w.closed) {
            this.openWindow();
            if (w==null) {
                RF.getComponentById('popupBlockedModal').open();
            }
        }
        else {
            w.location.reload();
        }
        w && w.focus();

    }

    showBuildDialog() {
        RF.getComponentById('buildModal').open();
    }

    toExplorer(){
        RF.Router.navigateTo('explorer');
    }
}