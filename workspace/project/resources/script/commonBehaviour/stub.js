
Class.extend(
    {
        _parameters: {},
        _gameObject: null,
        initialize: function(_gameObj,_params){
            this._gameObject = _gameObj;
            this._parameters = ve.utils.merge(ve.utils.clone(ve.behaviours.Walk4Dir),_params);
        },
        onCreate: function(){

        },
        onUpdate: function(){

        }
    },
    {
        parameters: {
            testProperty:'testValue'
        },
        description:'Stub for commonBehaviour'
    }
);