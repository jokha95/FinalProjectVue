import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import CountryPage from "../components/Countries.vue";
import DetailPage from "..//components/CountryDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  //   {
  //     path: "/",
  //     name: "country",
  //     component: CountryPage,
  //   },
  //   {
  //     path: "/",
  //     name: "detil",
  //     component: DetailPage,
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
