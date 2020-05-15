const path =  require('path');
const resolve = (dir) => path.join(__dirname, dir);
// const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

module.exports = {
    // publicPath: IS_PROD ? '/' : "/", // 默认'/'，部署应用包时的基本 URL
    outputDir: 'dist',
    assetsDir: "assets", // 静态资源目录
    devServer: {
        // overlay: { // 让浏览器 overlay 同时显示警告和错误
        //   warnings: true,
        //   errors: true
        // },
        // open: false, // 是否打开浏览器
        host: "localhost",
        port: "8080", // 代理断就
        https: false,
        hotOnly: false, // 热更新
        proxy: {
          "/api": {
            // target:
            //   "http://micro.cst-info.cn/api/", // 目标代理接口地址
            target:
              "http://dytz.cst-info.cn:8084/api/v2/", // 目标代理接口地址
            secure: false,
            changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
            // ws: true, // 是否启用websockets
            pathRewrite: {
              "^/api": "/"
            }
          }
        }
    },
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
          .set('vue$', 'vue/dist/vue.esm.js')
          .set('@api', resolve('src/api'))
          .set('@', resolve('src'))
          .set('@assets', resolve('src/assets'))
          .set('@scss', resolve('src/assets/scss'))
          .set('@components', resolve('src/components'))
          .set('@plugins', resolve('src/plugins'))
          .set('@views', resolve('src/views'))
          .set('@router', resolve('src/router'))
          .set('@store', resolve('src/store'))
          .set('@layouts', resolve('src/layouts'))
          .set('@static', resolve('src/static'));
    }
}