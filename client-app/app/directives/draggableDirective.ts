
import {draggable} from '../vendor/draggable.js'

declare const RF;
@RF.decorateComponent({
    name: 'app-draggable'
})
export class DraggableDirective {

    onMount(el,objVal){
        draggable(el,objVal);
    }

}