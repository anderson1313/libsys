
import { getDefaultBook } from "network/library.js";

export const ImgUrlMixIn = {
    computed: {
        GetImage() {
            return function (url) {
                if (url != undefined) {
                    let _u = url.substring(7); //_u:提取http://后面的部分
                return 'https://images.weserv.nl/?url=' + _u;

                }
                
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
            getDefaultBook()
                .then((res) => {
                    this.allbooks = res.rows;
                    this.total = res.total;
                    this.loading = false;
                })
                .catch((err) => {
                    this.loading = false;
                    this.allbooks=[]
                });
        },
    },
    created() {
        this.getDefaultBook();
    },

}
