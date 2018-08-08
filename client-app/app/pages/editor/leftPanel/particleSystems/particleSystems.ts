import {BaseComponent} from "../../../../baseComponent";
import {ParticleSystem} from "../../../../../engine/model/impl/particleSystem";
import {alertEx} from "../../../../providers/userDefinedFns";

declare const RF;


@RF.decorateComponent({
    name: 'app-particle-systems',
    template: require('./particleSystems.html')
})
export class ParticleSystems extends BaseComponent {
    constructor(){
        super();
    }
    createParticleSystem(){
        this.editData.currParticleSystemInEdit =
            new ParticleSystem(this.editData.game);
        let go = this.editData.game.repository.getArray('GameObjectProto')[0];

        if (!go) {
            alertEx(this.i18n.noGameObject);
            return;
        }

        RF.getComponentById('particleSystemModal').open();
    }
    editParticleSystem(ps){
        this.editData.currParticleSystemInEdit = ps.clone();
        RF.getComponentById('particleSystemModal').open();
    }
    async deleteParticleSystem(model){
        await this.utils.deleteModel(model);
    }
}