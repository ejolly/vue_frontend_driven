import Vue from "vue";
import Buefy from "buefy";
import App from "./App.vue";
import router from "./router";

require("./assets/main.scss");

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: "fas"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
