
import { getBooksByPage } from "network/library.js";

export const ImgUrlMixIn = {
    computed: {
        GetImage() {
            return function (url) {
                let _u = url.substring(7); //_u:提取http://后面的部分
                return 'https://images.weserv.nl/?url=' + _u;
            }

        }

    }
}

export const GetBooks = {
    data() {
        return {
            loading: false,
            allbooks: [],
            total: 0,

        }
    },
    methods: {
        getDefaultBook() {
            this.loading = true;
            getBooksByPage(1)
                .then((res) => {
                    this.allbooks = res.rows;
                    this.total = res.total;
                    this.loading = false;
                })
                .catch((err) => {
                    this.$popmessage({
                        type: "error",
                        message: "数据请求错误，请稍后再试",
                    });
                    this.loading = true;
                });
        },
    },
    created() {
        this.getDefaultBook();
    },

}
