var rules = {
    min: function (value,pattern) {
        return Number(value)>=Number(pattern);
    },
    max: function (value,pattern) {
        return Number(value)<=Number(pattern)
    }
};


var checkRule = function(ruleName,el,bindings){
    var formObject = bindings.value.form;
    var prop = bindings.value.prop;
    if (formObject[prop]==undefined) {
        Vue.set(formObject,prop,{});
    }

    if (el.value==='') {
        if (!el.getAttribute('required')) return;
    } else {
        Vue.set(formObject[prop],'required',false);
        return;
    }

    var ruleValue = el.getAttribute(ruleName);
    var ruleFn = rules[ruleName];
    var result = ruleFn(el.value,ruleValue);
    if (!result) {
        el.classList.add('error');
    }
    Vue.set(formObject[prop],ruleName,result);
};

var validate = function(el,bindings){
    el.classList.remove('error');
    Object.keys(rules).forEach(function(rule){
        checkRule(rule,el,bindings);
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