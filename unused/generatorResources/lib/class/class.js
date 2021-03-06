let Class = function() {};
// проверка кирилицы
Class.extend = function(props, staticProps) {

    let mixins = [];
    let firstArg = {};

    if (arguments[0].slice) {
        mixins = arguments[0];
        props = arguments[1];
        staticProps = arguments[2];
    } else if (arguments[0].call) {
        let obj = {};
        firstArg.obj = obj;
        firstArg.fn = props;
        props(obj);
        props = obj;
    }

    function Instance() {
        firstArg.fn && firstArg.fn(firstArg.obj);
        this._init && this._init.apply(this, arguments);
        this.construct && this.construct.apply(this,arguments);
    }

    Instance.prototype = Class.inherit(this.prototype);

    Instance.prototype.constructor = Instance;

    Instance.extend = Class.extend;

    copyWrappedProps(staticProps, Instance, this);

    for (let i = 0; i < mixins.length; i++) {
        copyWrappedProps(mixins[i], Instance.prototype, this.prototype);
    }
    copyWrappedProps(props, Instance.prototype, this.prototype);

    return Instance;
};

let fnTest = /xyz/.test(function() {xyz}) ? /\b_super\b/ : /./;

function copyWrappedProps(props, targetPropsObj, parentPropsObj) {
    if (!props) return;

    for (let name in props) {
        if (typeof props[name] == "function"
            && typeof parentPropsObj[name] == "function"
            && fnTest.test(props[name])) {
            // скопировать, завернув в обёртку
            targetPropsObj[name] = wrap(props[name], parentPropsObj[name]);
        } else {
            targetPropsObj[name] = props[name];
        }
    }

}

function wrap(method, parentMethod) {
    return function() {
        let backup = this._super;

        this._super = parentMethod;

        try {
            return method.apply(this, arguments);
        } finally {
            this._super = backup;
        }
    }
}

Class.inherit = Object.create || function(proto) {
    function F() {}
    F.prototype = proto;
    return new F;
};

exports.extend = Class.extend.bind(Class);



