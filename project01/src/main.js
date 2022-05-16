import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import style from "./assets/css/common.css";

//vue-js-modal
import VModal from 'vue-js-modal';
Vue.use(VModal, { dynamic: true });

//bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' //Vuetify 2
Vue.use(Vuetify);



//material-design-icon
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false; 

new Vue({
  router,
  style,
  vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount("#app");