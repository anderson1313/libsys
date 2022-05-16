//      引入创建虚拟节点和渲染方法
import Vue from 'vue'
import message from './Message.vue'
let MessageContructor = Vue.extend(message)


let seed = 1;
let instance;
let instances = []


export default (options) => {
    //创建实例
    instance = new MessageContructor({
        propsData: options
    })
    let userOnClose = options.onClose;
    let id = 'message_' + seed++;

    var close = (id, userOnClose) => {
        let len = instances.length;
        let index = -1;
        let removedHeight
        for (let i = 0; i < len; i++) {
            if (id === instances[i].id) {
                removedHeight = instances[i].$el.offsetHeight;
                index = i;
                if (typeof userOnClose === 'function') {
                    userOnClose(instances[i]);
                }
                instances[i].visible = false
                instances.splice(i,1)
                break;
            }
        }
       
        if (len <= 1 || index === -1 || index > instances.length - 1) return;

        //别的组件上移
        for (let i = index; i < len - 1; i++) {
            let dom = instances[i].$el;
    
            dom.style['top'] =
                parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
        }

    }
    var onClose = () => {
        close(id, userOnClose)
    }
    instance.$mount()
    document.body.appendChild(instance.$el)
  
    instance.id = id;
    instance.onClose = onClose
    let toptmp = 50
    instances.forEach(item => {
        toptmp += item.$el.offsetHeight + 16;
    });
    instance.top = toptmp;
    instance.visible = true
    
    
    
    instances.push(instance);
}