/*global RF:true*/
/*global alertEx:true*/

import BaseComponent from 'app/baseComponent'

import ParticleSystem from 'coreEngine/src/model/generic/particleSystem';

@RF.decorateComponent({
    name: 'app-particle-systems',
    template: require('./particleSystems.html')
})
export default class ParticleSystems extends BaseComponent {
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
    deleteParticleSystem(model){
        this.utils.deleteModel(model);
    }
}