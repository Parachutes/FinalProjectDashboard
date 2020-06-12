import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from "element-ui/lib/locale/lang/en";
import vueHeadful from 'vue-headful';

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ElementUI, {locale});
Vue.component('vue-headful', vueHeadful);

new Vue({
    render: h => h(App),
}).$mount('#app')
