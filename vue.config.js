const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,//关闭eslint校验
  //代理解决跨域
  devServer:{
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn',
        //pathRewrite:{'^/api': ''},
      }
    }
  }
})
