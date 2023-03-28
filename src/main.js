import Vue from 'vue'
import App from './App.vue'
import vue3dLoader from "vue-3d-loader";
Vue.use(vue3dLoader)
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
