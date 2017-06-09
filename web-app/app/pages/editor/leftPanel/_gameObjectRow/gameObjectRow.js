
import utils from 'providers/utils';

export default RF.registerComponent('app-game-object-row', {
    template: {
        type: 'string',
        value: require('./gameObjectRow.html')
    },
    getInitialState(){
        return {
            crud: null,
            gameObject: {}
        }
    },
    calcZoom(gameObject = {}) {
        if (!gameObject.height) gameObject.height = 30;
        return gameObject.height>30?
            30/gameObject.height:
            1;
    },
    utils
});