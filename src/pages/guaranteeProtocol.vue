<template>
	<div class="view-box">
		<div class="acc-mains scroll-box scroll-box-top scroll-box-bottom">
			<div class="protocol-wrap" v-if="this.query.type==0">
				<h2>保证合同</h2>
				<span class="txt-bold txt-r mb30">编号：<span class="line"></span></span>
				<p class="txt-bold mb10">甲方（委托人）： {{params.name}}</p>
				<p class="txt-bold mb10">证件类型： {{params.idtype}}</p>
				<p class="txt-bold mb60">证号： {{params.idcard}}</p> 
				<p class="txt-bold mb10">乙方（保证人）：浙江和平担保有限公司</p>
				<p class="txt-bold mb10">地址：杭州市下城区新坝21号</p>
				<p class="txt-bold mb60">法定代表人： 吴峰</p>
				<p>鉴于：</p>
				<p>1.甲方拟在杭州畅时贷网络科技有限公司运营管理的“畅享时贷”平台（域名为www.changxiangstyle.com， 以下简称“畅享时贷”）申请借款，借款金额为<span class="line">{{params.amount}}</span>元。</p>
				<p>2.甲方委托乙方为甲方的上述借款本金、利息及其他应付款项提供担保。</p>
				<p>3.乙方接受甲方的委托，为甲方提供连带责任保证。</p>
				<p>甲、乙双方就上述担保事项，经协商一致后，订立本合同，以供共同遵守。</p>

				<p class="txt-bold">第一条  委托期限</p>
				<p>1.甲方委托乙方为其提供担保，乙方的担保服务期限为<span class="line">{{fromDateArr[0]}}</span> 年 <span class="line">{{fromDateArr[1]}}</span>月<span class="line">{{fromDateArr[2]}}</span>日至<span class="line">{{toDateArr[0]}}</span>年<span class="line">{{toDateArr[1]}}</span>月 <span class="line">{{toDateArr[2]}} </span>日。</p>
				<p>2.任何一方可以单方面宣布解除本合同，另一方收到书面通知时即本合同解除之时。但是合同解除前已经发生的借款，双方权利义务仍然受本合同的约束。</p>
				<p class="txt-bold">第二条  担保金额</p>
				<p>乙方为甲方在“畅享时贷”的借款提供担保，甲方的借款金额由“畅享时贷”审核确定，并可以变更。乙方为甲方担保的债权本金额为<span class="line">{{params.amount}}</span>元。</p>
				<p class="txt-bold">第三条  权利义务</p>
				<p>1.甲方在还款期限届满后未按时还款，乙方应当履行保证义务。</p>
				<p>2.乙方为甲方提供担保的，乙方依照甲方借款金额的<span class="line">0.3</span>
				%（年化）收取担保服务费，该费用由杭州畅时贷网络科技有限公司向乙方支付，甲方不承担担保费用。</p>
				<p>3.甲方借款单期发生逾期，由乙方履行单期保证义务后，甲方应在代偿次日将代偿的金额支付给乙方。甲方在乙方代偿30天（含30天）内向乙方付清代偿款的，乙方根据代偿的金额，按照0.5%/日向甲方计收资金占用损失费；甲方在乙方代偿后的30天后仍未能付清代偿款的，超过30天的部分，乙方根据             借款本金金额为基数，按照1%/日向甲方计收资金占用损失费直至清偿完毕之日止（不含清偿完毕之日）。</p>
				<p>3.甲逾期超过60天后，借款被宣布提前到期，由乙方一次性全额代偿的，自该全额代偿的次日根据  借款本金  的金额为基数，按照<span class="line">0.1</span>%/日计算资金占用费直至清偿完毕之日止（不含清偿完毕之日），并根据借款金额的8%一次性计收违约金。</p>

				<p class="txt-bold">第四条  争议的解决</p>
				<p>1.因履行本协议发生争议的，应当协商解决。</p>
				<p>2.对本协议的任何补充和修改，经协商一致后，应当作出书面约定。</p>
				<p class="txt-bold">3.协商不成的，可以向甲方或乙方住所地人民法院提起诉讼。</p>

				<p>4.守约方因主张权利所指出的全部费用由违约方承担，包括律师代理费<span class="line red">（每个案件按照代偿金额的5%计算，最低不低于5000元）</span>及其他合理费用。</p>

				<p class="txt-bold">第五条  其他约定</p>
				<p>1.本协议经甲、乙双方签字（自然人）或盖章（法人）后生效；</p>
				<p class="mb30">2.本协议一式贰份，甲、乙双方各执壹份，具有同等法律效力。</p>
				<p class="mb30">
					<span>甲方（委托人）：{{params.name}}</span>
					<span>日期： {{fromDateArr[0]}} 年 {{fromDateArr[1]}} 月 {{fromDateArr[2]}} 日</span>
				</p>
				<p class="mb30">
					<span>乙方（保证人）：浙江和平担保有限公司</span>
					<span>日期： {{fromDateArr[0]}} 年 {{fromDateArr[1]}} 月 {{fromDateArr[2]}} 日</span>
				</p>
			</div>
			<div class="protocol-wrap" v-if="this.query.type==1">
				<h2>保证合同</h2>
				<span class="txt-bold txt-r mb30">编号：<span class="line"></span></span>
				<p class="txt-bold mb10">甲方（委托人）： {{params.name}}</p>
				<p class="txt-bold mb10">证件类型： {{params.idtype}}</p>
				<p class="txt-bold mb60">证号： {{params.idcard}}</p> 
				<p class="txt-bold mb10">乙方（保证人）：浙江和平担保有限公司</p>
				<p class="txt-bold mb10">地址：杭州市下城区新坝21号</p>
				<p class="txt-bold mb60">法定代表人： 吴峰</p>
				<p>鉴于：</p>
				<p>1.甲方拟在杭州畅时贷网络科技有限公司运营管理的“畅享时贷”平台（域名为www.changxiangstyle.com， 以下简称“畅享时贷”）申请借款，借款金额为<span class="line">{{params.amount}}</span>元。</p>
				<p>2.甲方委托乙方为甲方的上述借款本金、利息及其他应付款项提供担保。</p>
				<p>3.乙方接受甲方的委托，为甲方提供连带责任保证。</p>
				<p>甲、乙双方就上述担保事项，经协商一致后，订立本合同，以供共同遵守。</p>

				<p class="txt-bold">第一条  委托期限</p>
				<p>1.甲方委托乙方为其提供担保，乙方的担保服务期限为<span class="line">{{fromDateArr[0]}}</span> 年 <span class="line">{{fromDateArr[1]}}</span>月<span class="line">{{fromDateArr[2]}}</span>日至<span class="line">{{toDateArr[0]}}</span>年<span class="line">{{toDateArr[1]}}</span>月 <span class="line">{{toDateArr[2]}} </span>日。</p>
				<p>2.任何一方可以单方面宣布解除本合同，另一方收到书面通知时即本合同解除之时。但是合同解除前已经发生的借款，双方权利义务仍然受本合同的约束。</p>
				<p class="txt-bold">第二条  担保金额</p>
				<p>乙方为甲方在“畅享时贷”的借款提供担保，甲方的借款金额由“畅享时贷”审核确定，并可以变更。乙方为甲方担保的债权本金额为<span class="line">{{params.amount}}</span>元。</p>
				<p class="txt-bold">第三条  权利义务</p>
				<p>1.甲方在还款期限届满后未按时还款，乙方应当履行保证义务。</p>
				<p>2.乙方为甲方提供担保的，乙方依照甲方借款金额的<span class="line">0.3</span>
				%（年化）收取担保服务费，该费用由杭州畅时贷网络科技有限公司向乙方支付，甲方不承担担保费用。</p>
				<p>3.甲方借款单期发生逾期，由乙方履行单期保证义务后，甲方应在代偿次日将代偿的金额支付给乙方。甲方在乙方代偿30天（含30天）内向乙方付清代偿款的，乙方根据代偿的金额，按照0.5%/日向甲方计收资金占用损失费；甲方在乙方代偿后的30天后仍未能付清代偿款的，超过30天的部分，乙方根据             借款本金金额为基数，按照1%/日向甲方计收资金占用损失费直至清偿完毕之日止（不含清偿完毕之日）。</p>
				<p>3.甲逾期超过60天后，借款被宣布提前到期，由乙方一次性全额代偿的，自该全额代偿的次日根据  借款本金  的金额为基数，按照<span class="line">0.1</span>%/日计算资金占用费直至清偿完毕之日止（不含清偿完毕之日），并根据借款金额的8%一次性计收违约金。</p>

				<p class="txt-bold">第四条  争议的解决</p>
				<p>1.因履行本协议发生争议的，应当协商解决。</p>
				<p>2.对本协议的任何补充和修改，经协商一致后，应当作出书面约定。</p>
				<p class="txt-bold">3.协商不成的，可以向甲方或乙方住所地人民法院提起诉讼。</p>

				<p>4.守约方因主张权利所指出的全部费用由违约方承担，包括律师代理费<span class="line red">（每个案件按照代偿金额的5%计算，最低不低于5000元）</span>及其他合理费用。</p>

				<p class="txt-bold">第五条  其他约定</p>
				<p>1.本协议经甲、乙双方签字（自然人）或盖章（法人）后生效；</p>
				<p class="mb30">2.本协议一式贰份，甲、乙双方各执壹份，具有同等法律效力。</p>
				<p class="mb30">
					<span>甲方（委托人）：{{params.name}}</span>
					<span>日期： {{fromDateArr[0]}} 年 {{fromDateArr[1]}} 月 {{fromDateArr[2]}} 日</span>
				</p>
				<p class="mb30">
					<span>乙方（保证人）：浙江和平担保有限公司</span>
					<span>日期： {{fromDateArr[0]}} 年 {{fromDateArr[1]}} 月 {{fromDateArr[2]}} 日</span>
				</p>
			</div>
			<div class="protocol-wrap" v-if="this.query.type==2">
				<h2>保证合同</h2>
				<span class="txt-bold txt-r mb30">编号：<span class="line"></span></span>
				<p class="txt-bold mb10">甲方（委托人）： {{params.name}}</p>
				<p class="txt-bold mb10">证件类型： {{params.idtype}}</p>
				<p class="txt-bold mb60">证号： {{params.idcard}}</p> 
				<p class="txt-bold mb10">乙方（保证人）：浙江和平担保有限公司</p>
				<p class="txt-bold mb10">地址：杭州市下城区新坝21号</p>
				<p class="txt-bold mb60">法定代表人： 吴峰</p>
				<p>鉴于：</p>
				<p>1.甲方拟在杭州畅时贷网络科技有限公司运营管理的“畅享时贷”平台（域名为www.changxiangstyle.com， 以下简称“畅享时贷”）申请借款，借款金额为<span class="line">{{params.amount}}</span>元。</p>
				<p>2.甲方委托乙方为甲方的上述借款本金、利息及其他应付款项提供担保。</p>
				<p>3.乙方接受甲方的委托，为甲方提供连带责任保证。</p>
				<p>甲、乙双方就上述担保事项，经协商一致后，订立本合同，以供共同遵守。</p>

				<p class="txt-bold">第一条  委托期限</p>
				<p>1.甲方委托乙方为其提供担保，乙方的担保服务期限为<span class="line">{{fromDateArr[0]}}</span> 年 <span class="line">{{fromDateArr[1]}}</span>月<span class="line">{{fromDateArr[2]}}</span>日至<span class="line">{{toDateArr[0]}}</span>年<span class="line">{{toDateArr[1]}}</span>月 <span class="line">{{toDateArr[2]}} </span>日。</p>
				<p>2.任何一方可以单方面宣布解除本合同，另一方收到书面通知时即本合同解除之时。但是合同解除前已经发生的借款，双方权利义务仍然受本合同的约束。</p>
				<p class="txt-bold">第二条  担保金额</p>
				<p>乙方为甲方在“畅享时贷”的借款提供担保，甲方的借款金额由“畅享时贷”审核确定，并可以变更。乙方为甲方担保的债权本金额为<span class="line">{{params.amount}}</span>元。</p>
				<p class="txt-bold">第三条  权利义务</p>
				<p>1.甲方在还款期限届满后未按时还款，乙方应当履行保证义务。</p>
				<p>2.乙方为甲方提供担保的，乙方依照甲方借款金额的<span class="line">0.3</span>
				%（年化）收取担保服务费，该费用由杭州畅时贷网络科技有限公司向乙方支付，甲方不承担担保费用。</p>
				<p>3.甲方借款单期发生逾期，由乙方履行单期保证义务后，甲方应在代偿次日将代偿的金额支付给乙方。甲方在乙方代偿30天（含30天）内向乙方付清代偿款的，乙方根据代偿的金额，按照0.5%/日向甲方计收资金占用损失费；甲方在乙方代偿后的30天后仍未能付清代偿款的，超过30天的部分，乙方根据             借款本金金额为基数，按照1%/日向甲方计收资金占用损失费直至清偿完毕之日止（不含清偿完毕之日）。</p>
				<p>3.甲逾期超过60天后，借款被宣布提前到期，由乙方一次性全额代偿的，自该全额代偿的次日根据  借款本金  的金额为基数，按照<span class="line">0.1</span>%/日计算资金占用费直至清偿完毕之日止（不含清偿完毕之日），并根据借款金额的8%一次性计收违约金。</p>

				<p class="txt-bold">第四条  争议的解决</p>
				<p>1.因履行本协议发生争议的，应当协商解决。</p>
				<p>2.对本协议的任何补充和修改，经协商一致后，应当作出书面约定。</p>
				<p class="txt-bold">3.协商不成的，可以向甲方或乙方住所地人民法院提起诉讼。</p>

				<p>4.守约方因主张权利所指出的全部费用由违约方承担，包括律师代理费<span class="line red">（每个案件按照代偿金额的5%计算，最低不低于5000元）</span>及其他合理费用。</p>

				<p class="txt-bold">第五条  其他约定</p>
				<p>1.本协议经甲、乙双方签字（自然人）或盖章（法人）后生效；</p>
				<p class="mb30">2.本协议一式贰份，甲、乙双方各执壹份，具有同等法律效力。</p>
				<p class="mb30">
					<span>甲方（委托人）：{{params.name}}</span>
					<span>日期： {{fromDateArr[0]}} 年 {{fromDateArr[1]}} 月 {{fromDateArr[2]}} 日</span>
				</p>
				<p class="mb30">
					<span>乙方（保证人）：浙江和平担保有限公司</span>
					<span>日期： {{fromDateArr[0]}} 年 {{fromDateArr[1]}} 月 {{fromDateArr[2]}} 日</span>
				</p>
			</div>
			<div class="protocol-wrap" v-if="this.query.type==3">
				<h2>保证合同</h2>
				<span class="txt-bold txt-r mb30">编号：<span class="line"></span></span>
				<p class="txt-bold mb10">甲方（委托人）： {{params.name}}</p>
				<p class="txt-bold mb10">证件类型： {{params.idtype}}</p>
				<p class="txt-bold mb60">证号： {{params.idcard}}</p> 
				<p class="txt-bold mb10">乙方（保证人）：浙江和平担保有限公司</p>
				<p class="txt-bold mb10">地址：杭州市下城区新坝21号</p>
				<p class="txt-bold mb60">法定代表人： 吴峰</p>
				<p>鉴于：</p>
				<p>1.甲方拟在杭州畅时贷网络科技有限公司运营管理的“畅享时贷”平台（域名为www.changxiangstyle.com， 以下简称“畅享时贷”）申请借款，借款金额为<span class="line">{{params.amount}}</span>元。</p>
				<p>2.甲方委托乙方为甲方的上述借款本金、利息及其他应付款项提供担保。</p>
				<p>3.乙方接受甲方的委托，为甲方提供连带责任保证。</p>
				<p>甲、乙双方就上述担保事项，经协商一致后，订立本合同，以供共同遵守。</p>

				<p class="txt-bold">第一条  委托期限</p>
				<p>1.甲方委托乙方为其提供担保，乙方的担保服务期限为<span class="line">{{fromDateArr[0]}}</span> 年 <span class="line">{{fromDateArr[1]}}</span>月<span class="line">{{fromDateArr[2]}}</span>日至<span class="line">{{toDateArr[0]}}</span>年<span class="line">{{toDateArr[1]}}</span>月 <span class="line">{{toDateArr[2]}} </span>日。</p>
				<p>2.任何一方可以单方面宣布解除本合同，另一方收到书面通知时即本合同解除之时。但是合同解除前已经发生的借款，双方权利义务仍然受本合同的约束。</p>
				<p class="txt-bold">第二条  担保金额</p>
				<p>乙方为甲方在“畅享时贷”的借款提供担保，甲方的借款金额由“畅享时贷”审核确定，并可以变更。乙方为甲方担保的债权本金额为<span class="line">{{params.amount}}</span>元。</p>
				<p class="txt-bold">第三条  权利义务</p>
				<p>1.甲方在还款期限届满后未按时还款，乙方应当履行保证义务。</p>
				<p>2.乙方为甲方提供担保的，乙方依照甲方借款金额的<span class="line">0.3</span>
				%（年化）收取担保服务费，该费用由杭州畅时贷网络科技有限公司向乙方支付，甲方不承担担保费用。</p>
				<p>3.甲方借款单期发生逾期，由乙方履行单期保证义务后，甲方应在代偿次日将代偿的金额支付给乙方。甲方在乙方代偿30天（含30天）内向乙方付清代偿款的，乙方根据代偿的金额，按照0.5%/日向甲方计收资金占用损失费；甲方在乙方代偿后的30天后仍未能付清代偿款的，超过30天的部分，乙方根据             借款本金金额为基数，按照1%/日向甲方计收资金占用损失费直至清偿完毕之日止（不含清偿完毕之日）。</p>
				<p>3.甲逾期超过60天后，借款被宣布提前到期，由乙方一次性全额代偿的，自该全额代偿的次日根据  借款本金  的金额为基数，按照<span class="line">0.1</span>%/日计算资金占用费直至清偿完毕之日止（不含清偿完毕之日），并根据借款金额的8%一次性计收违约金。</p>

				<p class="txt-bold">第四条  争议的解决</p>
				<p>1.因履行本协议发生争议的，应当协商解决。</p>
				<p>2.对本协议的任何补充和修改，经协商一致后，应当作出书面约定。</p>
				<p class="txt-bold">3.协商不成的，可以向甲方或乙方住所地人民法院提起诉讼。</p>

				<p>4.守约方因主张权利所指出的全部费用由违约方承担，包括律师代理费<span class="line red">（每个案件按照代偿金额的5%计算，最低不低于5000元）</span>及其他合理费用。</p>

				<p class="txt-bold">第五条  其他约定</p>
				<p>1.本协议经甲、乙双方签字（自然人）或盖章（法人）后生效；</p>
				<p class="mb30">2.本协议一式贰份，甲、乙双方各执壹份，具有同等法律效力。</p>
				<p class="mb30">
					<span>甲方（委托人）：{{params.name}}</span>
					<span>日期： {{fromDateArr[0]}} 年 {{fromDateArr[1]}} 月 {{fromDateArr[2]}} 日</span>
				</p>
				<p class="mb30">
					<span>乙方（保证人）：浙江和平担保有限公司</span>
					<span>日期： {{fromDateArr[0]}} 年 {{fromDateArr[1]}} 月 {{fromDateArr[2]}} 日</span>
				</p>
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
				query: this.$route.params,
				fromDateArr: [],
				title: '',
				toDateArr: []
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
			this.fromDateArr = (this.params.fromDate && this.params.fromDate.split('-')) || [];
			this.toDateArr = (this.params.toDate && this.params.toDate.split('-')) || [];
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
		font-size: 28px;
		word-break: break-all;
		h2{
			text-align: center;
		}
		span{
			display: block;
		}
		.no-b{
			margin-bottom: 0;
		}
		.txt-bold{
			font-weight: bold;
		}
		.txt-r{
			text-align: right;
		}
		.txt-c{
			text-align: center;
		}
		p{
			text-indent: 50px;
		}
		.line{
			display: inline;
			height: 26px;
			line-height: 26px;
			padding: 0 40px;
			border-bottom: 1px solid #000;
		}
		.b-l,.b-r{
			width: 330px;
			display: inline-block;
		}
		.mb60{
			margin-bottom: 60px;
		}
		.mb30{
			margin-bottom: 30px;
		}
		.mb10{
			margin-bottom: 10px;
		}
		.red{
			color: red;
			border-bottom-color: red;
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

