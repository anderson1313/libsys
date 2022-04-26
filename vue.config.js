module.exports = {

    configureWebpack: {
      resolve: {
        alias: {
          'assets': '@/assets',
          'common': '@/common',
          'divs': '@/divs',
          'components': '@/components',
          'network': '@/network',
  
        }
  
      }
    },
    devServer: {
      open: true, //是否自动弹出浏览器页面
      host: "localhost", 
      port: '8081',
      https: false,
      hotOnly: false, 
      proxy: {
          '/api': {
              target: 'https://hpsnx.top', //API服务器的地址
              changeOrigin: true,
              pathRewrite: {
                  '^/api': ''
              }
          }
      },
  }
 
  }
  