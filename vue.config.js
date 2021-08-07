//vue.config.js
module.exports = {
  devServer: {
      proxy: {
          '/api': {
              // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
              target: 'https://xg.nyist.vip/v1/trace/Student/dailyreportadd',
              // 允许跨域
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                  '^/api': ''
              }
          }
      }
  }
}