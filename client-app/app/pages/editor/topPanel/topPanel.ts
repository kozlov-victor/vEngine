
import {BaseComponent} from "../../../baseComponent";
import {WsClient} from "../../../providers/wsClient";

declare const RF;


//opts: minify minify engineOnly embedResources embedScript


@RF.decorateComponent({
    name: 'app-top-panel',
    template: require('./topPanel.html')
})
export class TopPanel extends BaseComponent {

    w;
    clientId = ~~(Math.random()*1000) + '_' + ~~(Math.random()*1000);

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

    private writeDataToPopup(w,data){
        if (!w || w.closed) return;
        w.document.title = data.message;
        w.document.body && (w.document.body.innerHTML = `
            <div style="
                text-align: center;
                padding-top: 20px;
                font-family: monospace;
                font-size: 24px;
                color: #179809;
                display: block;
            ">${data.message}</div>
        `);
    }

    async run(){
        let w = this.w;
        let buildOpts = this.editData.buildOpts;
        if (w && w.document && w.document.body) {
            w.document.title = w.document.body.innerHTML='loading...'
        }
        let wsClient = new WsClient(this.clientId);
        wsClient.onData(data=>{
            this.writeDataToPopup(w,data);
        });

        await this.http.get(
            '/resource/generate',
            {
                debug: buildOpts.debug?'1':'',
                r: Math.random(),
                projectName: this.editData.projectName,
                minify: buildOpts.minify?'1':'',
                embedResources: buildOpts.embedResources?'1':'',
                clientId:this.clientId
            }
        );

        wsClient.close();
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