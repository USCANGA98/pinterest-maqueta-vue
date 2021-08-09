import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/imagen-api",
    name: "ImagenVista",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Imagen-Vista.vue"),
  },
  {
    path: "/hoy",
    name: "Hoy",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Hoy.vue"),
  },
  {
    path: "/siguiendo",
    name: "Siguiendo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Siguiendo.vue"),
  },
  {
    path: "/@luisangeluscangamacario",
    name: "Perfil",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Perfil.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
