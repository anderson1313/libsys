import {request} from "./request";
import {BOOK_EACH_PAGE} from 'common/const.js'




export function getBooks({name=null,type=null,time=null,order=0,page,rows=BOOK_EACH_PAGE}) {
    return request({
        url:'bookservice/book/getBooks',
        params:{
            name,
            type,
            time,
            order,
            page,
            rows
        }
    })
}


export function getDefaultBook() {
    return getBooks({page:1})
}

