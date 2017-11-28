<template>
<div>
	<div class="mask_transparent" v-if="show"></div>
	<div class="toast" transition="toast" v-if="show">
		<slot name="content"></slot>
	</div>
</div>
</template>
<script>
	module.exports = {
		data:function(){
			return {
				show : false
			}
		},
		props: ['toast'],
		watch:{
			'toast.content':function(val,oldVal){

				if(val == ''){
					return;
				}

				var _this = this;
				_this.show = true;
				setTimeout(function(){
					_this.show = false;

					setTimeout(function(){
						_this.toast.content = '';
						delete _this.toast.timer ;
						console.log(_this.toast.callback);
						_this.toast.callback && _this.toast.callback();
					},310);

				},_this.toast.timer || 2000);
			}
		}
	}
</script>

<style>
.mask_transparent {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.toast{
	position: absolute;
	top:50%;
	left:50%;
	transform:translateX(-50%) translateY(-50%);
	color:#FFFFFF;
    text-align: center;
    padding: 30px 50px;
    opacity:1;
    transition:opacity .3s linear;
    background:rgba(0,0,0,0.8);
	border-radius:5px;
	color:#fff;
	font-size:32px;
	white-space: nowrap;
}


.toast-leave{
	opacity:0;
}

</style>