import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import "./assets/react.css";
//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
import { http } from './util/http'
import { Lazyload } from 'vant';

Vue.use(Lazyload);


//
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'


Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
    lazyComponent: true,
});
//引入http
Vue.prototype.$http = http;


Vue.use(Vant);

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')