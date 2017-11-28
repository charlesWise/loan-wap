<template>
  <div class="hk-daoh">

    <a :class="['hka', {'hka2': isLoan}]" @click="goLoan">
      <i :class="['hk-tu', {'hk-cs': isLoan}]"></i>
      <span>借款</span>
    </a>

    <a :class="['hka', {'hka2': isRepay}]" @click="goRepay">
      <i :class="['hk-tu2', {'hk-cs2': isRepay}]"></i>
      <span>还款</span>
    </a>

    <a :class="['hka', {'hka2': isAccount}]" @click="goAccount">
      <i :class="['hk-tu3', {'hk-cs3': isAccount}]"></i>
      <span>账户</span>
    </a>

  </div>
</template>

<script>
	module.exports = {
    data: function() {
      return {
        isAccount: (this.$root.$route.name == 'user') ? true : false,
        isRepay: (this.$root.$route.name == 'huankuan1') ? true : false,
        isLoan: (this.$root.$route.name == 'loan') ? true : false
      }
    },
    props: ['query'],
    methods: {
      goLoan: function() {
        this.$set('isRepay', false);
        this.$set('isAccount', false);
        this.$set('isLoan', true);
        this.$root.$route.router.go('/account/loan?mobile='+this.query.mobile);
      },
      goRepay: function() {
        this.$set('isRepay', true);
        this.$set('isAccount', false);
        this.$set('isLoan', false);
        this.$root.$route.router.go('/account/huankuan1?mobile='+this.query.mobile);
      },
      goAccount: function() {
        this.$set('isRepay', false);
        this.$set('isAccount', true);
        this.$set('isLoan', false);
        this.$root.$route.router.go('/account?mobile='+this.query.mobile);
      }
    }
	}
</script>

<style>
  .hk-daoh{
  height: 96px;
  background: #fff;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  .hka{
    display:block;
    width:33.3%;
    float:left;
    font-size:22px;
    color:#666;
    i{
     display:block;
     margin:13px auto 8px auto;
    }
    .hk-tu{
      background:#fff url("../assets/images/tab01.png") no-repeat;
      background-size: 100%;
      width:44px;
      height:36px;
    }
    .hk-tu2{
      background:#fff url("../assets/images/tab03.png") no-repeat;
      background-size: 100%;
      width:44px;
      height:39px;
    } 
    .hk-tu3{
      background:#fff url("../assets/images/tab05.png") no-repeat;
      background-size: 100%;
      width:36px;
      height:40px;
    }       
  }
  .hka2{
    color:#FD7101;
    .hk-cs{
      background:#fff url("../assets/images/tab02.png") no-repeat;
      background-size: 100%;      
    }
    .hk-cs2{
      background:#fff url("../assets/images/tab04.png") no-repeat;
      background-size: 100%;      
    } 
    .hk-cs3{
      background:#fff url("../assets/images/tab06.png") no-repeat;
      background-size: 100%;      
    }       
  }
}
</style>