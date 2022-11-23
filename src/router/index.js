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
  {
    path: "/country/:name",
    name: "country-detail",
    props: true,
    component: DetailPage,
  },
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
