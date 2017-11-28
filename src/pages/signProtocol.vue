<template>
	<div class="view-box">
		<div class="acc-mains scroll-box scroll-box-top scroll-box-bottom">
			<div class="protocol-wrap">
				<h2>畅享时贷电子合同电子签章委托协议书</h2>
				<span class="no-b">甲方:畅享时贷借款人（委托人）</span>
				<span>用户名：{{params.name}}</span>
				<span>乙方:杭州畅时贷网络科技有限公司（受托人）</span>
				<p>甲乙双方根据国家有关法律、法规，就网上委托的有关事项达成如下协议：</p>
				<span class="txt-bold no-b">第一章  网上委托风险揭示书</span>
				<span class="no-b">第一条 甲方已详细阅读本章，认识到由于互联网是开放性的公众网络，网上委托除具有委托行为本身固有的风险外，还充分了解和认识到其具有以下风险：</span>
    			<p class="no-b">一、由于互联网数据传输等原因，委托指令可能会出现中断、停顿、延迟、数据错误等情况；</p>
    			<p class="no-b">二、委托人密码泄露或委托人身份可能被仿冒；</p>
    			<p class="no-b">三、由于互联网上存在黑客恶意攻击的可能性，互联网服务器可能会出现故障及其他不可预测的因素，委托信息及其他信息可能会出现错误或延迟；</p>
    			<p class="no-b">四、委托人的电脑设备及软件系统与畅享时贷平台提供的网上交易系统不相匹配，无法下达委托或委托失败；</p>
    			<p class="no-b">五、委托人不具备一定网上交易经验，可能因操作不当造成委托失败或委托失误。</p>
    			<p>上述风险可能会导致委托人（甲方）发生损失。</p>
    			<span class="txt-bold no-b">第二章 委托事项</span> 
    			<p>第二条 本协议所表述的“网上委托”是指甲方委托乙方通过杭州天谷信息科技有限公司开发的e签宝产品，<b>以甲方的名义对与甲方借款申请有关的电子合同的通过e签宝系统进行用户注册并进行借款合同等协议的电子签名。</b></p>
				<p class="no-b">甲方委托乙方签署的借款合同的主要内容如下：</p>
				<table width="100%" border="0" cellpadding="0" cellspacing="0">
					<tr>
						<td>借款金额</td>
						<td>借款期限</td>
						<td>借款总费率（含利息及服务费）</td>
						<td>每月还款金额（分期产品）</td>
					</tr>
					<tr>
						<td>{{params.amount}}元整</td>
						<td>{{params.limit}}月</td>
						<td>{{params.rate}}%</td>
						<td>{{params.monthamount}}元整</td>
					</tr>
				</table>
				<p class="no-b">注：<b>上述内容仅作为提示，甲方借款的具体权利义务以借款合同及相关的协议为准。</b></p>
				<p>特别提示：<b>由于作为借款人甲方的借款申请在募集过程中存在由于募集不足的情形，故甲方的借款申请无法全部满足，在这种情况下甲方仍同意乙方在实际借款金额小于借款申请金额的情况下代理甲方签署《借款合同》、《平台服务协议》等相关文件。</b></p>
				<p class="no-b red txt-bold">特别提示：由于作为借款人甲方的借款申请在募集过程中存在由于募集不足的情形，故甲方的借款申请无法全部满足，在这种情况下甲方仍同意乙方在实际借款金额小于借款申请金额的情况下代理甲方签署《借款合同》、《保证合同》、《融资居间服务合同》等相关文件。</p>
				<p class="no-b">第三条 甲方为在“畅享时贷”平台的借款申请人，乙方为“畅享时贷”平台的运营商，甲方在签署本委托书后，<b>即不可撤销地确认乙方有权代表甲方对《借款合同》、《保证合同》、《融资居间服务合同》等相关文件在借款项目募集完成后通过e签宝系统进行上述协议的电子签名。</b></p>
				<p class="no-b"><b>甲方在签署本委托书前应当仔细阅读《借款合同》、《保证合同》、《融资居间服务合同》等相关文件，如对上述文件存在异议的，应当拒绝签署本委托书。</b></p>
				<p class="no-b">第四条 基于委托事项，甲方需要向乙方提供甲方的身份证号和手机号码并授权乙方将上述信息提供给杭州天谷信息科技有限公司。</p>
				<p class="no-b">第五条 甲方为进行网上委托所使用的软件应当为乙方开发的正版软件，甲方使用非正版软件导致委托行为发生问题的，由此产生的后果由甲方自行承担。</p>
				<p class="no-b">第六条 凡使用甲方的畅享时贷账号、交易密码进行的网上委托均视为甲方亲自办理，由此所产生的一切后果由甲方承担。</p>
				<p class="no-b">第七条 凡使用甲方的畅享时贷账号、交易密码进行的网上委托，委托后所产生的电子协议，均视为甲方签署并自愿依照该电子合同承担义务。</p>
				<p class="no-b">第八条 甲方应单独使用网上委托系统，不得与他人共享，或者冒用他人的账号进行交易委托。</p>
				<p class="no-b">第九条 当甲方有违反本协议第八条约定的情形时，乙方有权采取适当的形式追究甲方的法律责任。</p>
				<p class="no-b">第十条 当本协议第一条列举的网上委托系统所蕴含的风险所指的事项发生时，由此导致的甲方损失，乙方不承担任何赔偿责任。</p><p class="no-b">第十一条发生下列情形之一，本协议终止：</p>
				<p class="no-b">一、甲乙双方委托事项完结（即借款项目项下的义务已经全部履行完毕）；</p>
				<p class="no-b">二、一方违反协议，另一方书面要求终止；</p>
				<p class="no-b">三、甲乙双方协商同意终止。</p>
				<p class="no-b">第十二条 本协议有效期为甲方签署本协议至借款事项全部完结，无任何遗留事项，如甲方发起新的新的借款申请的，应当重新签署委托书。</p>
				<span class="txt-r">甲方（委托人）：{{params.name}}</span>
				<span class="txt-r">委托时间： {{dateArr[0]}} 年 {{dateArr[1]}} 月 {{dateArr[2]}} 日</span>
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
				params: this.$route.params,
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
			this.dateArr = this.params.date.split('-')
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
		.txt-bold{
			font-weight: bold;
		}
		.red{
			color: red;
		}
		p{
			margin-bottom: 30px;
			text-indent: 50px;
		}
		table{
			border-right: 1px #000 solid;
			border-bottom: 1px #000 solid;
			margin-bottom: 30px;
		}
		td{
			border-top: 1px #000 solid;
			border-left: 1px #000 solid;
			height: 100px;
			text-align: center;
		}
	}
</style>

