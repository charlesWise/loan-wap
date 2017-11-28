<template>
	<div class="view-box">
		<div class="acc-mains scroll-box scroll-box-top scroll-box-bottom">
			<img src="../assets/images/bannar2.png" width="100%" />
			<div class="tab-switch">
				<div :class="['tab-switch-item', {'active': selectIndex == 0}]" @click="tabSwitch(0)">
					<div class="img"><img src="../assets/images/icon1.png" /></div>
					<span class="txt">征信认证</span>
				</div>

				<div :class="['tab-switch-item', {'active': selectIndex == 1}]" @click="tabSwitch(1)">
					<div class="img"><img src="../assets/images/icon2.png" /></div>
					<span class="txt">公积金认证</span>
				</div>

				<div :class="['tab-switch-item', {'active': selectIndex == 2}]" @click="tabSwitch(2)">
					<div class="img"><img src="../assets/images/icon3.png" /></div>
					<span class="txt">社保认证</span>
				</div>
			</div>

			<div class="tab-list">
				<div :class="['tab-list-item', {'active': selectIndex == 0}]">
					<div class="title">
						<span class="circle">01</span>
						<span class="txt">登录中国人民银行征信中心</span>
					</div>
					<div class="content">
						<span class="line"></span>
						<img class="con1" src="../assets/images/con1.png" />
					</div>
					<div class="title">
						<span class="circle">02</span>
						<span class="txt">点击马上开始</span>
					</div>
					<div class="content">
						<span class="line"></span>
						<img class="con2" src="../assets/images/con2.png" />
					</div>
					<div class="title">
						<span class="circle">03</span>
						<span class="txt">开始并完成注册</span>
					</div>
					<div class="content">
						<span class="line"></span>
						<img class="con3" src="../assets/images/con3.png" />
					</div>
					<div class="title">
						<span class="circle">04</span>
						<span class="txt">生成报告，等待征信中心所发短信验证码</span>
					</div>
					<div class="content">
						<span class="line"></span>
						<img class="con4" src="../assets/images/con4.png" />
					</div>
				</div>
				<div :class="['tab-list-item', {'active': selectIndex == 1}]">
					<div class="title">
						<span class="circle">01</span>
						<span class="txt">公积金账号密码获取</span>
					</div>
					<div class="content">
						<span class="line"></span>
						<img class="con5" src="../assets/images/con5.png" />
						<img class="con6" src="../assets/images/con6.png" />
					</div>
					<div class="title">
						<span class="circle">02</span>
						<span class="txt">可向贵司人事部门询问</span>
					</div>
					<div class="content">
						<span class="line"></span>
					</div>
					<div class="title">
						<span class="circle">03</span>
						<span class="txt">个人携带身份证、公积金卡到公积金管理中心查询</span>
					</div>
				</div>
				<div :class="['tab-list-item', {'active': selectIndex == 2}]">
					<div class="title">
						<span class="circle">01</span>
						<span class="txt">社保账号密码获取</span>
					</div>
					<div class="content">
						<span class="line"></span>
						<img class="con5" src="../assets/images/con7.png" />
						<img class="con6" src="../assets/images/con8.png" />
					</div>
					<div class="title">
						<span class="circle">02</span>
						<span class="txt">可携带身份证到各区社会保险经办机构业务办理大厅查询</span>
					</div>
				</div>
			</div>
		</div>
    </div>

</template>

<script>

	var top = require('../components/top');
	var bridge = require('../js/bridge.js');

	module.exports = {
		data: function() {
			return {
				selectIndex: 0
			}
		},
		components: {
			top: top
		},
		methods: {
			goback: function() {
				bridge.goBack();
			},
			tabSwitch: function(index){
				this.selectIndex = index;
			}
		},
		created: function() {
		}
	};

</script>

<style scoped>
	.tab-switch{
		font-size: 0;
		background: #484747;
		height: 214px;
		.tab-switch-item{
			padding-top: 40px;
			font-size: 30px;
			color: #fff;
			display: inline-block;
			width: 250px;
			height: 214px;
			text-align: center;
			position: relative;
			&.active{
				background: #a50909;
			}
			&:after{
				position: absolute;
			    left: 50%;
			    bottom: -0.1rem;
			    transform: translate(-50%, 0);
			    width: 0;
			    height: 0;
			    content: '';
			    border: .15rem solid transparent;
			    border-bottom: 0.3rem solid #F0F0F0;
			    display: none;
			}
			&.active:after{
				display: block;
			}
			.img{
				text-align: center;
			}
			img{
				width: 80px;
				height: 84px;
			}
			.txt{
				height: 90px;
				line-height: 90px;
				display: block;
			}
		}
	}
	.tab-list{
		.tab-list-item{
			margin: 30px 0;
			display: none;
			&.active{
				display: inherit;
			}
			.title{
				font-size: 0;
				padding: 0 24px;
				text-align: left;
				.circle{
					background: #9e0909;
					width: 48px;
					height: 48px;
					line-height: 48px;
					border-radius: 50%;
					display: inline-block;
					font-size: 30px;
					color: #fff;
					margin-right: 15px;
					text-align: center;
					vertical-align: top;
				}
				.txt{
					font-size: 28px;
					display: inline-block;
					vertical-align: top;
					width: 540px;
				}
			}
			.content{
				padding: 20px 0;
				margin: 2px 46px;
				text-align: left;
				font-size: 0;
				position: relative;
				&:last-child{
					padding-bottom: 0;
				};
				.line{
					width: 2px;/*no*/
					height: 100%;
					background: #9e0909;
					position: absolute;
					left: 0;
					top: 0;
				}
				img{
					margin-left: 30px;
				}
				.con1{
					width: 641px;
					height: 193px;
				}
				.con2{
					width: 642px;
					height: 167px;
				}
				.con3{
					width: 641px;
					height: 198px;
				}
				.con4{
					width: 642px;
					height: 254px;
				}
				.con5{
					width: 641px;
					height: 422px;
					margin-bottom: 10px;
				}
				.con6{
					width: 642px;
					height: 422px;
				}
			}
		}
	}
</style>

