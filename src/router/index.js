import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";

const StarRating = () => import("../components/category.vue");

const productListPage = () => import("../views/productListPage.vue");
const productDetaPage = () => import("../views/productDetailPage.vue");
const productInfo = () => import("../components/productInfo.vue");
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
    path: "/products",
    name: "products",
    props: true,
    component: productListPage,
  },

  {
    path: "/products/:id",
    component: productDetaPage,
    props: true,
    children: [
      { path: "", name: "product-info", component: productInfo },
      { path: "star", name: "star-rating", component: StarRating },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
