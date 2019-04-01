
import Vue from 'vue';
import Router from 'vue-router';
import Overview from 'src/views/overview/overview.vue';
import Article from 'src/views/article/article.vue';
import Archive from 'src/views/archive/archive.vue';
import Page from 'src/views/page/page.vue';

Vue.use(Router);

const router: Router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Overview
        },
        {
            path: '/articles',
            component: Archive
        },
        {
            path: '/articles/:slug',
            component: Article
        },
        {
            path: '/:slug',
            component: Page,
        }
    ]
});

router.afterEach((to) => {
    // track page change with google analytics
    ga('set', 'page', to.path);
    ga('send', 'pageview');

    // scroll to top when navigating
    window.scrollTo(0, 0);
});

export default router;
