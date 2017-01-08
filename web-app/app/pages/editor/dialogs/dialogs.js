
module.exports = Vue.component('app-dialogs', {
    props: [],
    template: require('./dialogs.html'),
    data: function () {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {
        appSoundDialog: require('./soundDialog/soundDialog').component,
        appParticleSystemDialog: require('./particleSystemDialog/particleSystemDialog').component,
        appParticleSystemPreviewDialog: require('./particleSystemPreviewDialog/particleSystemPreviewDialog').component,
        appFontDialog: require('./fontDialog/fontDialog').component,
        appSpriteSheetDialog: require('./spriteSheetDialog/spriteSheetDialog').component,
        appGameObjectDialog: require('./gameObjectDialog/gameObjectDialog').component,
        appFrameAnimationDialog: require('./frameAnimationDialog/frameAnimationDialog').component
    },
    methods: {

    }
});