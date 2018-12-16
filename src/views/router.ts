import Vue from 'vue';
import Router from 'vue-router';
import Home from './overview/overview.vue';

import About from './about/about.vue';
import Page from './page/page.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'overview',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/page/:id',
            name: 'page',
            component: Page
        }
    ]
});
