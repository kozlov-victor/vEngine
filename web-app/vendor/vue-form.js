
var baseRule = {
    required: function(value){
        return value!=='';
    }
};

var rules = {
    min: function (value,pattern) {
        return Number(value)>=Number(pattern);
    },
    max: function (value,pattern) {
        return Number(value)<=Number(pattern)
    }
};


var checkRule = function(rulesObject,ruleName,el,bindings){
    var formObject = bindings.value.form;
    var prop = bindings.value.prop;
    if (formObject[prop]==undefined) {
        Vue.set(formObject,prop,{});
    }

    var ruleValue = el.getAttribute(ruleName);
    var ruleFn = rulesObject[ruleName];
    var result = ruleFn(el.value,ruleValue);
    if (!result) {
        el.classList.add('error');
    }
    Vue.set(formObject[prop],ruleName,result);
    return result;
};

var validate = function(el,bindings){
    el.classList.remove('error');

    var isRequired = //


    Object.keys(rules).forEach(function(rule){
        checkRule(rules,rule,el,bindings);
    });
};

Vue.directive('control', {
    inserted: function (el,bindings) {
        var frm = bindings.value.form;
        frm.valid = function(){
            var res = true;
            Object.keys(frm).forEach(function(prp){
                var _prp = frm[prp];
                if (_prp.call) return;
                Object.keys(_prp).forEach(function(rule){
                    if (!_prp[rule]) res = false;
                })
            });
            return res;
        };
        validate(el,bindings);
    },
    update: function(el,bindings){
        validate(el,bindings);
    }
});