import {request} from "./request";
import {BOOK_EACH_PAGE} from 'common/const.js'

export function getBooksByPage(page) {
    return request({
        url: 'bookservice/book/getByPage',
        params: {  
            page: page,
            rows: BOOK_EACH_PAGE
         }
    })
}

export function getBooksByName(name) {
    return request({
        url: 'bookservice/book/getByName',
        params: {  
            name: name,
         }
    })

}