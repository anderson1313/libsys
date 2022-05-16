import {request} from "./request";

export function getAllBooks() {
    return request({
        url: '/book/findAll'
    })
}