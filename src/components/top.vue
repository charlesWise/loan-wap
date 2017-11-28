<template>
  <div class="reg-tit">
    <p>{{title}}</p>
    <slot name="leftBtn">
      <a @click="goback"></a>
    </slot>
  </div>
</template>

<script>
  var bridge = require('../js/bridge.js');

	module.exports = {
    props: ['title', 'backevent'],
    methods: {
      goback: function(){
        if (this.backevent) {
          this.backevent();
        } else {
          if (bridge.clientType == 'noapp') {
            history.go(-1);
          } else {
            bridge.goBack();
          }
        }
      }
    }
	}
</script>

<style>
  .reg-tit{
    height:88px;
    line-height:88px;
    background:#FAFAFA;
    border-bottom:1px solid rgba(0,0,0,0.12);
    font-size:32px;
    color:#000;
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    z-index: 999;
    p{
     width:100%;
    }
    a{
      width:10%;
      height:70px;
      position: absolute;
      left: 0;
      top: 18px;  
      padding-left:50px; 
      &:before{
        position: absolute;
        left: 10px;
        top: 8px;
        width: 0;
        height: 0;
        content: '';
        border: 20px solid transparent;
        border-right: 20px solid #333333;    
      }
      &:after{
        position: absolute;
        left: 12px;
        top: 8px;
        width: 0;
        height: 0;
        content: '';
        border:20px solid transparent;
        border-right: 20px solid #FAFAFA;    
      }
    }
  }
</style>