import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import VueResource from "vue-resource";

Vue.use(Router);
Vue.use(VueResource);

const router = new Router({
  hashbang: false,
  mode: "history",
  routes: [
    {
      path: "/",
      name: "",
      component: HelloWorld
    }
  ]
});

// 在全局导航守卫中检查元字段;
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!auth.loggedIn()) {
//       next({
//         path: "/login",
//         query: { redirect: to.fullPath }
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
