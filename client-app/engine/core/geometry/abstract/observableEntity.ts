
import {ArrayEx} from "../../../declarations";

export default class ObservableEntity {

    private _onChanged:Array<()=>void> = [];

    protected triggerObservable(){
        for (let fn of this._onChanged) {
            fn();
        }
    }

    addListener(f:()=>void){
        this._onChanged.push(f);
    }

    removeListener(f:()=>void){
        (this._onChanged as ArrayEx<any>).remove(f);
    }

}