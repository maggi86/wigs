import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue';
// import dashboard from '../views/dashboard.vue';


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: '/daskhboard',
  //   name: 'dashboard',
  //   component: dashboard,
  // },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import("../views/Admin.vue"),
  },
  {
    path: "/wigs",
    name: "Wigs",
    component: () =>
      import("../views/WigsForSale.vue"),
  },
  {
    path: "/wigs/:id",
    name: "singleWig",
    component: () =>
      import("../views/SingleWigDetails.vue"),
    props: true,
  },
  {
    path: '/register',
    name: 'register',
    component: () => 
    import('../views/register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => 
    import('../views/login.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => 
    import('../components/ContactForm.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
