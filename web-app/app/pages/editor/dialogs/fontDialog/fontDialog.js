
var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var Font = _require('font');

var fontSample = 'test font';
var systemFontList = [{displayName:'monospace'}];
var chrome = require('providers/chrome');

module.exports.component = Vue.component('app-font-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./fontDialog.html'),
    data: function () {
        return {
            form:require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils'),
            fontSample:fontSample,
            systemFontList: systemFontList || []
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {
        appColorPicker: require('components/colorPicker/colorPicker')
    },
    methods: {
        open: function(){
            this.opened = true;
            if (systemFontList.length==1) {
                var self = this;
                chrome.requestToApi({method:'getFontList'},function(list){
                    list.forEach(function(item,i){
                        Vue.set(self.systemFontList,i,item);
                    });
                });
            }
        }
    }
});