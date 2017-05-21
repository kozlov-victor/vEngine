
const baseRule = {
    required:(value)=>{
        return value!=='';
    }
};

const rules = {
    min: (value,pattern)=> {
        return Number(value)>=Number(pattern);
    },
    max: (value,pattern)=> {
        return Number(value)<=Number(pattern)
    },
    maxlength: (value,pattern)=>{
        return (''+value).length<=+pattern
    }
};


const checkRule = (rulesObject,ruleName,el,bindings)=>{
    let formObject = bindings.value.form;
    let prop = bindings.value.prop;
    if (formObject[prop]==undefined) {
        Vue.set(formObject,prop,{});
    }
    if (!el.hasAttribute(ruleName)) return true;

    let ruleValue = el.getAttribute(ruleName);
    let ruleFn = rulesObject[ruleName];
    let currModelValue = bindings.value.model[bindings.value.prop];
    if (currModelValue===undefined || currModelValue===null) currModelValue = '';
    currModelValue = currModelValue.toString().trim();
    let result = ruleFn(currModelValue,ruleValue);
    if (!result) {
        el.classList.add('error');
    }
    Vue.set(formObject[prop],ruleName,result);
    return result;
};

const validate = (el,bindings)=>{
    el.classList.remove('error');

    let isRequiredPassed = checkRule(baseRule,'required',el,bindings);
    if (!isRequiredPassed) return;

    Object.keys(rules).forEach(function(rule){
        checkRule(rules,rule,el,bindings);
    });
};

Vue.directive('control', {
    inserted: function (el,bindings) {
        let frm = bindings.value.form;
        frm.valid = function(){
            let res = true;
            Object.keys(frm).forEach(function(prp){
                let _prp = frm[prp];
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