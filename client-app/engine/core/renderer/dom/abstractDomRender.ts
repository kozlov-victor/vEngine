
import AbstractRenderer from '../abstract/abstractRenderer'

export default class AbstractDomRenderer extends AbstractRenderer{

    constructor(game) {
        super(game);
    }

    setNodeAttribute(el,name,value){}

    setPropertyIfChanged(el,p1 = {},p2 = {},field,fn) {
        if (field && p1[field]===p2[field]) return;
        if (field) {
            p1[field] = p2[field];
        }
        let newProps = fn(field && p2[field],p2);
        let _k;
        Object.keys(newProps).forEach(k=>{
            _k = k;
        });
        if (!field) {
            field = _k;
            if (p1[field] && p1[field]===p2[field]) return;
            p1[field] = p2[field] = newProps[_k];
        }
        this.setNodeAttribute(el,_k,newProps[_k]);
        //console.log(newProps);
    }

    setPropertiesIfChanged(el,arr){
        arr.forEach(p=>{
            this.setPropertyIfChanged(el,p[0],p[1],p[2],p[3])
        });
    }

}