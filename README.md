# v-app

## 跨域解决
# nginx配置反向代理
server {
    listen       8094;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        root   html;
        index  index.html index.htm;
    }
    location /apis {
        rewrite  ^.+apis/?(.*)$ /$1 break;
        include  uwsgi_params;
        proxy_pass   http://localhost:1894;
    }
}

# node服务器http-proxy-middleware模块设置代
const proxy = require('http-proxy-middleware');//引入代理中间件
app.use('/api', proxy({
    target: "http://localhost:8001",
    pathRewrite: {
        '^/api' : ''
    },
    changeOrigin: true
}));

# vue-cli 3.*
vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      }
    }
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8001/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
