module.exports = {

    configureWebpack: {
      resolve: {
        alias: {
          'assets': '@/assets',
          'common': '@/common',
          'views': '@/views',
          'components': '@/components',
          'network': '@/network',
        }
      },
     
    },

    //开发环境跨域
    devServer: {
      open: true, //是否自动弹出浏览器页面
      host: "localhost", 
      port: '8081',
      https: false,
      hotOnly: false, 
      proxy: {
          '/bookservice': {
              target: 'http://10.252.76.43:8443', //API服务器的地址
              changeOrigin: true,
              pathRewrite: {
                  '^/bookservice': ''
              }
          },
          '/adminservice': {
            target: 'http:// 10.252.76.43:8446', //API服务器的地址
            changeOrigin: true,
            pathRewrite: {
                '^/adminservice': ''
            }
        }
      },
  }
 
 
  }
  