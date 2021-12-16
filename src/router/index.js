import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    meta: {
      title: "Главная страница",
      layout: "main-layout",
    },
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/info",
    name: "InfoPage",
    meta: {
      title: "Информация",
      layout: "main-layout",
    },
    component: () => import("@/pages/Info.vue"),
  },

  {
    path: "/login",
    name: "LoginPage",
    meta: {
      title: "Вход",
      layout: "auth-layout",
    },
    component: () => import("@/pages/Login.vue"),
  },

  {
    path: "/registration",
    name: "RegistrationPage",
    meta: {
      title: "Регистрация",
      layout: "auth-layout",
    },
    component: () => import("@/pages/Registration.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { accessToken } = localStorage

  if (accessToken || to.name === 'LoginPage' || to.name === "RegistrationPage") {
    next();
  } else {
    next("/login");
  }
});

export default router;
