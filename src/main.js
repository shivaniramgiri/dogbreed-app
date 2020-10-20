import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.config.ignoredElements = ["grid-item", "grid-layout"];
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Vue.components({
//   GridLayout: VueGridLayout.GridLayout,
//   GridItem: VueGridLayout.GridItem
// }),
new Vue({
  router,
  BootstrapVue,
  IconsPlugin,
  store,
  render: h => h(App)
}).$mount("#app");
