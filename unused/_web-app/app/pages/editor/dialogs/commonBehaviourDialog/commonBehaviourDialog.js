"use strict";

const abstractDialog = require('providers/abstractDialog');
const editData = require('providers/editData');
const restResource = require('providers/rest/resource');

module.exports.component = Vue.component('app-common-behaviour-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./commonBehaviourDialog.html'),
    data: ()=> {
        return {
            form:require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils')

        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {

    },
    methods: {
        open:function(){
            this.opened = true;
        },
        createOrEditCommonBehaviour:function(){
            let cb = editData.currCommonBehaviourInEdit;
            let self = this;
            restResource.
            save(cb).
            then((resp)=>{
                if (resp.created) {
                    cb.id = resp.id;
                    editData.commonBehaviourList.add(cb);
                    editData.currGameObjectInEdit.commonBehaviour.add(cb);
                    return restResource.save(editData.currGameObjectInEdit)
                }
            }).
            then(function(){
                editData.currGameObjectInEdit.updateCloner();
                self.close();
            }).
            catch(window.catchPromise)
        }
    }
});