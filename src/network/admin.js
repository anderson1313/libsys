import { request } from "./request";

// export function delBook() {
//     return request({
//         url:
//         data:{

//         }
//     })
// }
export function adminLogin(aname,apass) {
    return request({
        url:"adminservice/admin/login",
        params:{
            adminName:aname,
            adminPassword:apass

        }
    })

}