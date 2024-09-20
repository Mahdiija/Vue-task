import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Orders from "../pages/Orders.vue";
import Products from "../pages/Products.vue";
import Restaurants from "../pages/Restaurants.vue";
import Drivers from "../pages/Drivers.vue";

const routes = [
  { path: "/", component: Dashboard, name: "Dashboard" },
  { path: "/orders", component: Orders, name: "Orders" },
  { path: "/products", component: Products, name: "Products" },
  { path: "/restaurants", component: Restaurants, name: "Restaurants" },
  { path: "/drivers", component: Drivers, name: "Drivers" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
