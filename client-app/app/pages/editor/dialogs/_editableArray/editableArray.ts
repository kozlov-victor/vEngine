
declare const RF;

import './editableArray.scss';

@RF.decorateComponent({
    name: 'app-editable-array',
    template: require('./editableArray.html')
})
export class EditableArray {

    array = [];

    newItemName = '';
    editableMap = {};

    addNewItem(){
        if (!this.newItemName) return;
        if (this.array.indexOf(this.newItemName)==-1)
            this.array.push(this.newItemName);
        this.newItemName = '';
    }

    setItemEditable(index){
        this.editableMap[index] = true;
    }

    removeItem(index){
        this.array.splice(index,1);
        this.editableMap = {};
    }

    updateItem(str,index){
        this.array[index] = str;
        this.editableMap = {};
    }

}