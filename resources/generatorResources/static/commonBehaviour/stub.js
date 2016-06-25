
Class.extend(
    {
        _parameters: {},
        _gameObject: null,
        init: function(_gameObj,_params){
            this._gameObject = _gameObj;
            this._parameters = ve.utils.merge(ve.utils.clone(ve.behaviours.Walk4Dir),_params);
        },
        onCreate: function(){

        },
        onUpdate: function(){

        }
    },
    {
        defaultParameters: {
            testProperty:'testValue'
        },
        description:'Stub for commonBehaviour'
    }
);