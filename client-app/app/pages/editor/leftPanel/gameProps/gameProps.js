import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import editData from 'app/providers/editData';

import {SCALE_STRATEGY} from 'coreEngine/src/engine/consts'

export default RF.registerComponent('app-game-props', {
    template: {
        type:'string',
        value: require('./gameProps.html')
    },
    form: {valid: ()=>{return true}},
    editData,
    i18n: i18n.getAll(),
    scales: SCALE_STRATEGY,
    saveGameProps: function(){
        restResource.saveGameProps(this.editData.game);
    }
});