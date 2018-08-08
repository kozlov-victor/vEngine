
import {BaseComponent} from "../../../baseComponent";

declare const RF;


//opts: minify minify engineOnly embedResources embedScript


@RF.decorateComponent({
    name: 'app-top-panel',
    template: require('./topPanel.html')
})
export class TopPanel extends BaseComponent {

    w;

    constructor(){
        super();
    }

    openWindow(){
        let buildOpts = this.editData.buildOpts;
        if (buildOpts.windowed) {
            this.w = window.open(
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
            this.w = window.open('/'+this.editData.projectName+'/out');
        }
        return this.w;
    }

    async run(){
        let w = this.w;
        let buildOpts = this.editData.buildOpts;
        if (w && w.document && w.document.body) {
            w.document.title = w.document.body.innerHTML='loading...'
        }
        await this.http.get(
            '/resource/generate',
            {
                debug: buildOpts.debug?'1':'',
                r: Math.random(),
                projectName: this.editData.projectName,
                minify: buildOpts.minify?'1':'',
                embedResources: buildOpts.embedResources?'1':''
            }
        );

        if (!w || w.closed) {
            w = this.openWindow();
            if (!w) {
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