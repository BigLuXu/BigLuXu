const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  const backendServerName = process.env.s ? process.env.s.toString() : 'release'
  app.use(
    'api',
    createProxyMiddleware({
      target: `https://app${backendServerName}.karbonvcc.com`,
      changeOrigin: true,
    })

    // 可以配置多个代理
    // createProxyMiddleware('/api', {
    //   target: 'http://localhost:6000',
    //   changeOrigin: true,
    //   pathRewrite: { '^/api': '' },
    // })
  )
}

// http-proxy-middleware的版本如果是1.x以上，需要这么写：

// const {createProxyMiddleware} = require('http-proxy-middleware')
