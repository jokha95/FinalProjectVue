import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
// import productInfo from "../components/productInfo.vue";
// import DetailPage from "../components/productDetail.vue";
const StarRating = () => import("../components/StarRating.vue");

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

// import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../views/HomePage.vue";
// import AboutPage from "../views/AboutPage.vue";

// const productsPage = () => import("../views/productListPage.vue");
// const productPage = () => import("../views/productDetailPage.vue");
// const productInfo = () => import("../components/productInfo.vue");
// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: HomePage,
//   },
//   {
//     path: "/about",
//     name: "about",
//     component: AboutPage,
//   },
//   {
//     path: "/products",
//     name: "products",
//     component: productsPage,
//   },
//   {
//     path: "/product/:id",
//     component: productPage,
//     props: true,
//     children: [{ path: "", name: "product-info", component: productInfo }],
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;
