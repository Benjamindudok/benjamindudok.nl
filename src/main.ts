import Vue from 'vue';
import App from 'src/components/app.vue';
import router from 'src/views/router';

import Footer from 'src/components/footer/footer.vue';
import Header from 'src/components/header/header.vue';
import Pagination from 'src/components/pagination/pagination.vue';

import formatDate from 'src/utils/filters/formatDate';
import truncate from 'src/utils/filters/truncate';

Vue.component('the-footer', Footer);
Vue.component('the-header', Header);
Vue.component('the-pagination', Pagination);

Vue.filter('formatDate', formatDate);
Vue.filter('truncate', truncate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
