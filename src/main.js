import Vue from "vue";
import App from "./App.vue";
import router from "./router"
import VueTouch from "vue-touch"
import "@components/Card"
import '@common/filter'
import {
  Card,
  ActionSheet
} from 'vant';
Vue.use(Card);
Vue.use(ActionSheet);


Vue.config.productionTip = false;
Vue.use(VueTouch, {
  name: 'v-touch'
})
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");