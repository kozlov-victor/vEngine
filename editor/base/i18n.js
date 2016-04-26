var _i18n = {};

_i18n.locale = 'en';

_i18n.bundle = {
    'en': {
        assets:'assets',
        addAsset:'add asset'
    }
};

_i18n.setLocate = function(_locale){
    _i18n.locale = _locale;
};


module.exports.get = function(key){
    return _i18n.bundle[_i18n.locale][key];
};

module.exports.getAll = function(){
    return _i18n.bundle[_i18n.locale];
};