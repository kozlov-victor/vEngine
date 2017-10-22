
import {draggable} from '../vendor/draggable'

/*global RF:true*/
@RF.decorateComponent({
    name: 'app-draggable'
})
export default class DraggableDirective {

    onMount(el,objVal){
        draggable(el,objVal);
    }

}