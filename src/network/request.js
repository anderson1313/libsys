import axios from "axios"
export function request(config) {

    const instance = axios.create({
        baseURL: '/api',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        return config
    }, error => {
        console.log(error)
    })

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    return instance(config)

}