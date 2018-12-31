import Vue from 'vue';
import App from 'src/components/app.vue';
import router from 'src/views/router';
import store from 'src/store/store';

import Footer from 'src/components/footer/footer.vue';
import Header from 'src/components/header/header.vue';

Vue.component('the-footer', Footer);
Vue.component('the-header', Header);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
