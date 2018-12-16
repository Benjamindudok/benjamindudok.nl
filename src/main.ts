import Vue from 'vue';
import App from 'src/components/app.vue';
import router from 'src/views/router';
import store from 'src/store/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
