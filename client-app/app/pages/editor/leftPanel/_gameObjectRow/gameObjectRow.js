
import utils from 'app/providers/utils';

export default RF.registerComponent('app-game-object-row', {
    template: {
        type: 'string',
        value: require('./gameObjectRow.html')
    },
    getInitialState(){
        return {
            crud: null,
            gameObject: {},
            draggable:false
        }
    },
    utils
});