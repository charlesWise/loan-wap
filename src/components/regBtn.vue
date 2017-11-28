<template>
  <div :class="['reg-butt', sclass]">
    <button @click="next">{{msg}}</button>
  </div>
</template>

<script>

	module.exports = {
     props: ['msg', 'txt', 'sclass'],
     methods: {
        next: function() {
          if (this.txt) {
            this.$dispatch('next', this);
          }
        }
     }
	}

</script>

<style>
  .reg-butts{
    margin-top:0;
  }
  .reg-butt{
    margin-top:82px;
    button{
      background: -webkit-linear-gradient(to bottom, #f8a916, #fa7409);
      background: -o-linear-gradient(to bottom, #f8a916, #fa7409);
      background: -moz-linear-gradient(to bottom, #f8a916, #fa7409);
      background: linear-gradient(to bottom, #f8a916, #fa7409);
      color: #fff;
      border-radius: 6px;
      font-size:36px;
      width:100%;
      height:88px;
      text-align:center;
    }
  }
</style>