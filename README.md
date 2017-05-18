# zs-manage #
基于Vue.js 2.x系列 + Element UI 的公司后台管理系统解决方案。
1、对基本组件进行封装，基于webapi获取动态表单；
2、select、checkboxgroup、radiogroup等和约定格式的webapi进行绑定，简化开发工作；
3、使用指令对dom进行权限控制
# 说明 #
全部功能只能在公司内网使用，基础功能使用mockjs拦截http请求进行webapi模拟，可以在/src/mock/datasource.js添加模拟webapi。
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
