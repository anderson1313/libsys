import axios from "axios"
import Message from 'components/common/message/index.js'
export function request(config) {

    const instance = axios.create({
        
        baseURL: '/',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        return config
    }, error => {
        // console.log(error)
    })

    instance.interceptors.response.use(res => {
    
        return res.data
    }, err => {
       
        // Message({
        //     type: "error",
        //     message: "数据请求错误，请稍后再试",
        // })
        // console.log(err);
        return Promise.reject(new Error("server failed"))
    })

    return instance(config)

}