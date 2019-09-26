import Vue from "vue";
import "./cube-ui";
import App from "./App.vue";
import router from "./router";
import "amfe-flexible";
import store from './store/index';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  }
}).$mount("#app");
