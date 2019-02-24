
import Vue from 'vue';
import Router from 'vue-router';
import Home from './overview/overview.vue';

import About from './about/about.vue';

import Page from './page/page.vue';
import PageContent from 'src/views/page/content/page-content.vue';

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
            path: '/page/:entryId',
            component: Page,
            children: [
                {
                    path: '',
                    component: PageContent
                }
            ]
        }
    ]
});
