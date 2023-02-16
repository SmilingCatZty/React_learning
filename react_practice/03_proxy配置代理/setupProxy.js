/** 
 * 原写法
 * http-proxy-middleware 1.x 版本前配置代理使用

const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api1', {
      target: 'http://localhost:5000',
      changeOrigin: true, // 让服务器知道请求从哪发的
      pathRewriter: { '^/api1': '' } // 把api1替换掉
    }),
    proxy('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true, // 让服务器知道请求从哪发的
      pathRewriter: { '^/api1': '' } // 把api1替换掉
    })
  )
}
*/

const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      target: 'http://localhost:5000',
      changeOrigin: true, // 让服务器知道请求从哪发的 --- 控制服务器收到的响应头中 “HOST” 字段的值
      pathRewriter: { '^/api1': '' } // 把api1替换掉 --- 重写请求
    }),
    createProxyMiddleware('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewriter: { '^/api2': '' }
    })
  )
}