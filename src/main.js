import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Message from 'components/common/message/index.js'


import {sessionCache} from 'common/storage'
import {localCache} from 'common/storage'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$popmessage =  Message
Vue.prototype.sessionCache =  sessionCache
Vue.prototype.localCache =  localCache


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



