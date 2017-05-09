import Vue from "vue";
import VueRouter from "vue-router";

import AuthenticationModule from "../module/authentication/authentication.module.vue";
import RegistrationModule from "../module/registration/registration.module.vue";
import PrimaryModule from "../module/primary/primary.module.vue";

import HomeModule from "../module/primary/home/home.module.vue";
import ProfileModule from "../module/primary/profile/profile.module.vue";
import AboutModule from "../module/primary/about/about.module.vue";

import AModule from "../module/primary/home/a/a.module.vue";
import BModule from "../module/primary/home/b/b.module.vue";

Vue.use(VueRouter);

let authenticated = true;//test!

module.exports = new VueRouter({
  routes: [
      {
          path: "/",
          redirect: to => {
              if (authenticated == true) {
                  return "/primary";
              } else {
                  return "/authentication"
              }
          }
      },

      {
          path: "/primary",
          redirect: to => { return "/home"; },
          name: "PrimaryModule",
          component: PrimaryModule,
          children: [
              {
                  path: "/home",
                  redirect: to => { return "/a"; },
                  name: "HomeModule",
                  component: HomeModule,
                  children: [
                      { path: "/a", name: "AModule", component: AModule },
                      { path: "/b", name: "BModule", component: BModule }
                  ]
              },
              { path: "/profile", name: "ProfileModule", component: ProfileModule },
              { path: "/about", name: "AboutModule", component: AboutModule }
          ]
      },

      { path: "/authentication", name: "AuthenticationModule", component: AuthenticationModule },

      { path: "/registration", name: "RegistrationModule", component: RegistrationModule },

      { path: "*", redirect: "/" },
  ]
});
