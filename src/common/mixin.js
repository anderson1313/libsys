export const  ImgUrlMixIn = {  
 computed: {
     GetImage(){
        return function(url) {
            let _u = url.substring(7); //_u:提取http://后面的部分
            return 'https://images.weserv.nl/?url=' + _u;
         }
        
     }

 }
}
