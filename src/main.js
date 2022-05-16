import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Message from 'components/common/message/index.js'
import ConfirmBox from 'components/common/confirmbox'


import {sessionCache} from 'common/storage'
import {localCache} from 'common/storage'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$popmessage =  Message
Vue.prototype.$popconfirm =  ConfirmBox

Vue.prototype.sessionCache =  sessionCache
Vue.prototype.localCache =  localCache
if (!sessionCache.getItem("isadmin")){
  sessionCache.setItem("isadmin",false)
  sessionCache.setItem("version","user")
  sessionCache.setItem("isLogin",false)

}



new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app')



