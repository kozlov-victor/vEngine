
import {draggable} from '../vendor/draggable'

declare const RF;
@RF.decorateComponent({
    name: 'app-draggable'
})
export default class DraggableDirective {

    onMount(el,objVal){
        draggable(el,objVal);
    }

}