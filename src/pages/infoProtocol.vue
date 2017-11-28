<template>
	<div class="view-box">
		<div class="acc-mains scroll-box scroll-box-top scroll-box-bottom">
			<div class="protocol-wrap">
				<h2>个人信息采集授权书</h2>
				<span>杭州畅时贷网络科技有限公司：</span>
				<p>本人   {{params.name}}   （ 身份证号码：{{params.idcard}}                       ）</p>
				<span class="no-b">同意贵司在本人向贵司运营的畅享时贷平台申请办理相关业务和其后的相关风险管理中，授权贵司自行或通过第三方数据服务机构依法向中国人民银行个人信用信息基础数据库及其他经法律法规或中国人民银行认可的信息系统、信息数据库及第三方征信机构查询、打印、使用、保存本人的各项基本信息（包括但不限于身份信息、财产信息、工作信息、通信信息、消费信息、交通信息、贷款信息）和信用报告用于：</span>
				<span class="no-b">1、审核个人信贷业务借款申请；</span>
				<span class="no-b">2、对已发放的个人借款进行贷后管理及逾期诉讼及保全；</span>
				<span class="no-b">3、受理法人或其他组织的贷款申请或作为担保人，需要查询其法定代表人及出资人信用状况；</span>
				<span class="no-b">4、其他与借款相关的各项用途。</span>
				<p>同时本人授权贵司依法向上述系统、数据库或机构提供本人的各项基本信息和信用情况。但超出授权用途的后果及法律责任由贵司承担。</p>
				<span class="txt-r">授权人（签章）：{{params.name}}</span>
				<span class="txt-r"> {{dateArr[0]}} 年 {{dateArr[1]}} 月 {{dateArr[2]}} 日</span>

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
				params: this.$route.query,
				dateArr: []
			}
		},
		components: {
			top: top
		},
		methods: {
			goback: function() {
				bridge.goBack();
			}
		},
		created: function() {
			console.log(this.params);
			this.dateArr = (this.params.date && this.params.date.split('-')) || [];
		}
	};

</script>

<style scoped>
	.leftBtn{
		height:100%;
		position: absolute;
		left: 0;
		top: 0;  
		padding-left:50px; 
	}
	.protocol-wrap{
		padding: 30px;
		text-align: left;
		word-break: break-all;
		font-size: 28px;
		h2{
			text-align: center;
			margin-bottom: 30px;
		}
		span{
			display: block;
			margin-bottom: 30px;
		}
		.no-b{
			margin-bottom: 0;
		}
		.txt-r{
			text-align: right;
		}
		p{
			margin-bottom: 30px;
			text-indent: 50px;
		}
	}
</style>

