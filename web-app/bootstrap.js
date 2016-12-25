
require('providers/resource');

const router = new VueRouter({
    //mode: 'abstract',
    routes: [
        {
            path: '/editor',
            component: require('pages/editor/editor')
        }
    ]
});

require('providers/userDefinedFns');

const app = new Vue(
    {
        router:router,
        components: {
            appConfirmDialog: require('components/confirmDialog/confirmDialog').component,
            appAlertDialog: require('components/alertDialog/alertDialog').component
        }
    }
)
.$mount('#app');


router.init(app);
