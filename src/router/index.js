import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import productInfo from "../components/productInfo.vue";
import DetailPage from "../components/productDetail.vue";

// const productstPage = () => import("../views/productListPage.vue");
// const productPage = () => import("../views/productDetailPage.vue");
// const productInfo = () => import("../components/productInfo.vue");
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
    path: "/product/:name",
    name: "product-detail",
    props: true,
    component: DetailPage,
  },
  //   {
  //     path: "/",
  //     name: "detil",
  //     component: DetailPage,
  //   },
  {
    path: "/product/:id",
    component: DetailPage,
    props: true,
    children: [{ path: "", name: "product-info", component: productInfo }],
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
