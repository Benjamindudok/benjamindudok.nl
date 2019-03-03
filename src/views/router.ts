
import Vue from 'vue';
import Router from 'vue-router';

import Page from './page/page.vue';
import PageOverview from './page/overview/page-overview.vue';
import PageContent from 'src/views/page/content/page-content.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Page,
            children: [
                {
                    path: '/',
                    name: 'overview',
                    component: PageOverview
                },
                {
                    path: 'page/:entryId',
                    component: PageContent
                },
                {
                    path: 'page/5klzWs8nW9pLmeWh0u86B5',
                    alias: '/about',
                    name: 'about',
                    component: PageContent,
                    meta: {
                        entry: '5klzWs8nW9pLmeWh0u86B5'
                    }
                }
            ]
        }
    ]
});
