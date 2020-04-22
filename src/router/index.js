import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: () => import(/* webpackChunkName: "about" */ '../views/navbar.vue'),
  },
  {
    path: '/more',
    name: 'more',
    component: () => import(/* webpackChunkName: "about" */ '../views/More.vue'),
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue'),
  },
  {
    path: '/account',
    name: 'account',
    component: () => import(/* webpackChunkName: "about" */ '../views/Account.vue'),
  },
  {
    path: '/notification',
    name: 'notification',
    component: () => import(/* webpackChunkName: "about" */ '../views/Notification.vue'),
  },
  {
    path: '/detection',
    name: 'detection',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detection.vue'),
  },
  {
    path: '/detection/defect-detection',
    name: 'defect-detection',
    component: () => import(/* webpackChunkName: "about" */ '../views/Defect-Detection.vue'),
  },
  {
    path: '/more/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "about" */ '../views/more-setting/FAQ.vue'),
  },
  {
    path: '/more/legal-information',
    name: 'legal-information',
    component: () => import(/* webpackChunkName: "about" */ '../views/more-setting/Legal.vue'),
  },
  {
    path: '/more/notification-setting',
    name: 'notification-setting',
    component: () => import('../views/more-setting/Notification-Setting.vue'),
  },
  {
    path: '/more/privacy-policy',
    name: 'privacy-policy',
    component: () => import(/* webpackChunkName: "about" */ '../views/more-setting/Privacy-Policy.vue'),
  },
  {
    path: '/product/product-details',
    name: 'product-info',
    component: () => import(/* webpackChunkName: "about" */ '../views/Product-Info.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue'),
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import(/* webpackChunkName: "about" */ '../views/ForgotPassword.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
