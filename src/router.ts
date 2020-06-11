import Vue from 'vue';
import Router, { Route } from 'vue-router';
import Home from '@/views/Home.vue';
import PersonalInfo from '@/components/PersonalInfo/index.vue';
import Experience from '@/components/Experience/index.vue';
import AboutMyself from '@/components/AboutMyself/index.vue';
import FooterBottom from '@/components/FooterBottom/index.vue';

import store from '@/store';

const ifNotAuthenticated = (to: Route, from: Route, next: (route?: any) => void) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next({ name: 'home' });
};

const ifAuthenticated = (to: Route, from: Route, next: (route?: any) => void) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/');
};

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/index.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ '@/views/index.vue'),
        },
      ],
    },
    {
      path: '/personalinfo',
      name: 'personalinfo',
      component: PersonalInfo,
      props: true,
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience,
      props: true,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutMyself,
      props: true,
    },
    {
      path: '/contact',
      name: 'contact',
      component: FooterBottom,
      props: true,
    },
  ],
});
