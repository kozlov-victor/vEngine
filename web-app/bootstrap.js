
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

//Vue.filter('nbsp', function (value) {
//    return value.split(' ').join('&nbsp;')
//});

const app = new Vue(
    {
        router:router
    }
)
.$mount('#app');

router.init(app);
