//default
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

//Pages
import Home from "@/pages/Home";
import NotFound from "@/pages/404";
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";

//Routering

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/vue2-store/",
      name: "home",
      component: Home,
    },
    {
      path: "/vue2-store/shop",
      name: "shop",
      component: Shop,
    },
    {
      path: "/vue2-store/shop/:id",
      name: "product",
      component: Product,
    },
    {
      path: "/vue2-store/*",
      name: "notFound",
      component: NotFound,
    },
  ],
});
