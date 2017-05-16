import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import config from './config';
import api from './api/';
import utility from './tools/utility';
import ZsBasic from './components/zs';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";
import './mock/index.js';
Vue.use(ElementUI);
ZsBasic.install(Vue);
Vue.prototype.$config = config;
axios.defaults.headers.common['appid'] = config.appid;
Vue.prototype.$axios = axios;
Vue.prototype.$api = api;
Vue.prototype.$uti = utility;
//拦截器
router.beforeEach((to, from, next) => {
    if (!axios.defaults.headers.common['accesstoken']) {
        axios.defaults.headers.common['accesstoken'] = window.localStorage.getItem(config.tokenkey);
    }
    if (to.path != '/login') {  
        if (axios.defaults.headers.common['accesstoken']) {
            next();
        }
        else {
            next({
                path: '/login',
                //query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
});

var vm = new Vue({
    router,
    render: h => h(App)
})
api.init(vm);
utility.init(vm);
api.data.loadConfig(function (d) {
    Vue.prototype.$appcfg = d;
    document.title = d.appTitle;
    vm.$mount('#app');
});