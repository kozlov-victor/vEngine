
Class.extend(
    {
        _parameters: {},
        _gameObject: null,
        initialize: function(_gameObj,_params){
            this._gameObject = _gameObj;
            this._parameters = _params;
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