import restResource from 'providers/rest/resource';
import i18n from 'providers/i18n';
import editData from 'providers/editData';

export default RF.registerComponent('app-game-props', {
    template: {
        type:'string',
        value: require('./gameProps.html')
    },
    form: {valid: ()=>{return true}},
    editData,
    i18n: i18n.getAll(),
    scales: _require('consts').SCALE_STRATEGY,
    saveGameProps: function(){
        restResource.saveGameProps(this.editData.gameProps);
    }
});