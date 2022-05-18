import Vue from 'vue';
import ConfirmBox from './ConfirmBox.vue';
const ConfirmBoxConstructor = Vue.extend(ConfirmBox);
let currentMsg, instance;


 function defaultCallback(action) {
    if (action === 'confirm') {
        instance.loading = true
        currentMsg.resolve(['confirm',instance]);
        instance = null
    }else{
        currentMsg.reject('cancle');
        document.body.removeChild(instance.$el);
        instance = null

    }
   

}

ConfirmBoxConstructor.prototype.callback = defaultCallback;


const initInstance = (options) => {
   
    instance = new ConfirmBoxConstructor({
        propsData: options,
        el: document.createElement('div')
    })
    if(options.beforeClose) {
        instance.beforeClose = options.beforeClose
    }
    
}
const showNextMsg = (options) => {
    if (!instance) {
        initInstance(options);
    }
   
    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
        instance.visible = true;
    });
}

const MyConfirmBox = function (options) {
    return new Promise((resolve, reject) => {
        showNextMsg(options);
        //保存这个promuse的回调，可以在别的地方调用
        currentMsg = {
            resolve,
            reject
        }
    });
}
export default MyConfirmBox