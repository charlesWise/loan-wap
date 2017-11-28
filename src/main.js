
require('./css/reset.css');//加载公共样式
require('./css/animate.css');//加载公共样式
require('./css/fonts.css');//加载公共样式

var Vue = require('vue');
var VueRouter = require('vue-router');
var VueScroll = require('vue-scroll');
var VueResource = require('vue-resource');
var fastclick = require('./js/fastclick');

fastclick.attach(document.body);

// register filters 自定义过滤器  金额格式化，
var filters = require('./js/filters');

Object.keys(filters).forEach(function(k) {
  Vue.filter(k, filters[k]);
});

var App = Vue.extend(require('./app.vue'));


/*
    如果还想声明一个vue实例
	要放在 Vue.use(VueRouter); 之前
	因为当使用了 Vue.use(VueRouter)后，改写了 Vue 的实例化方法。
 */
//var newV = new Vue();//注意看上面说明

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter(
	{
	  hashbang: true,  //为true的时候 example.com/#!/foo/bar ， false的时候 example.com/#/foo/bar
	  //abstract:true,  //地址栏不会有变化
	  //saveScrollPosition: false
	}
);

require('./routers')(router);

router.start(App,'#app');