<template>
  <div id="app">
    <router-view class="view" id="view" :transition="effect" transition-mode="out-in"></router-view>
    <!--toast-->
    <toast v-ref:toast :toast.sync="toast">
       <div slot = "content" >{{toast.content}}</div>
    </toast>
  </div>
</template>

<script>

  var toast = require('./components/toast');

  module.exports = {
    data: function() {
      return {
        toast: {content:'正在加载。。。', callback: function(){}}
      }
    },
    components: {
      toast: toast
    },
    events: {
      showToast: function(txt, callback) {
        this.toast.content = txt;
        callback && (this.toast.callback = callback);
      }
    }
  }

</script>

<style>
  [v-cloak]{
      display:none;
  }

  html, body{
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: 'Hiragino Sans GB W3','Hiragino Sans GB','Microsoft YaHei','WenQuanYi Micro Hei',sans-serif;
    position: relative;
  }
  body{
    background: #F0F0F0;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100%;
    height: 100%;
    color: #2c3e50;
  }
  .scroll-box{
    width: 100%;
    position: absolute;
    top: 88px;
    bottom: 96px;
    overflow-y: scroll;
    overflow-x: visible;
    -webkit-overflow-scrolling: touch; 
  }
  .scroll-box-top{
    top: 0;
  }
  #view{
    width: 100%;
    height: 100%;
  }
  .scroll-box-bottom{
    bottom: 0;
  }
  .view {
    transition: all .3s ease;
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  .fade-enter{
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }

  .fade-leave {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }

  .back-enter {
    opacity: 1;
    transform: translate3d(-110%, 0, 0);
  }
  .back-leave{
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }


  .v-link-active {
    color: red;
  }

  .custom-active-class {
    color: #f60;
  }
</style>
