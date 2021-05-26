import Vue from 'vue'
import App from './App.vue'

// Bootstrap
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import router from './router/index'
import VueRouter from 'vue-router'
// Tailwind
import 'tailwindcss/dist/base.min.css'
import 'tailwindcss/dist/components.min.css'
import 'tailwindcss/dist/utilities.min.css'
import axios from 'axios'
import store from './stores'

Vue.config.productionTip = false

Vue.prototype.$user = {
    name: 'test',
    email: 'test@test.com'
};
Vue.prototype.$axios = axios;

Vue.use(VueRouter);

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
