//防抖函数
export function debounce(fn, delay, immediate = false) {
    let timer = null
    let isInvoke = false
    const _debounce = function (...args) {
        if (timer) clearTimeout(timer);
        if (immediate && !isInvoke) {
            fn.apply(this, args)
            isInvoke = true
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
            isInvoke = false
        }, delay)
    }

    _debounce.cancel = function () {
        if (timer) clearTimeout(timer)
        timer = null
        isInvoke = false
    }
    return _debounce
}


//confirm请求函数-fn是请求
export function confirmRequest(fn, msg) {

    //
    return (...args) => {
        var that = this; //that表示调用这个方法的组件
        this.$popconfirm({
            confirmMsg: msg,
            beforeClose: (instance) => {
                that.currentInstance = instance;
            },
        })
        //callback执行
            .then((res) => {
                fn.apply(this,[args,res[1]])
            })
            .catch((err) => {

                this.$popmessage({
                    type: "error",
                    message: "你已取消",
                });
            });
    }
}

