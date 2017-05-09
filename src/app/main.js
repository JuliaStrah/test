import Vue from "vue";
import VueResource from "vue-resource";

import Store from "./store/store";
import Router from "./router/router";
import ApplicationModule from "./module/application/application.module.vue";

Vue.use(VueResource);

new Vue({
  el: "#application",
  store: Store,
  router: Router,
  render: h => h(ApplicationModule)
});
