module.exports = function(router){
	router.map({
		'/authEntication/:type/:city':{
			name:'authEntication',
			title: '认证',
			component: require('./pages/authEntication.vue'),
			auth: false
		},
		'/selectCity/:type':{
			name:'selectCity',
			title: '缴纳城市',
			component: require('./pages/selectCity.vue'),
			auth: false
		},
		'/loginProtocol':{
			name:'protocol',
			title: '畅享时贷注册协议',
			component: require('./pages/loginProtocol.vue'),
			auth: false
		},
		'/infoProtocol':{
			name:'infoProtocol',
			title: '个人信息采集授权书',
			component: require('./pages/infoProtocol.vue'),
			auth: false
		},
		'/payProtocol':{
			name:'payProtocol',
			title: '快捷支付协议',
			component: require('./pages/payProtocol.vue'),
			auth: false
		},
		'/signProtocol/:name/:amount/:limit/:rate/:monthamount/:date':{
			name:'signProtocol',
			title: '畅享时贷电子合同电子签章委托协议书',
			component: require('./pages/signProtocol.vue'),
			auth: false
		},
		// '/workProtocol/:name/:username/:idtype/:idcard/:amount/:use/:rate/:term/:repayType/:monthamount/:repayDate/:bankName/:bankCard/:fromDate/:toDate':{
		// 	name:'workProtocol',
		// 	title: '长富贷工薪贷协议',
		// 	component: require('./pages/workProtocol.vue'),
		// 	auth: false
		// },
		// '/secondProtocol/:name/:username/:idtype/:idcard/:amount/:use/:rate/:term/:repayType/:bankName/:bankCard/:fromDate/:toDate':{
		// 	name:'secondProtocol',
		// 	title: '长富贷秒贷协议',
		// 	component: require('./pages/secondProtocol.vue'),
		// 	auth: false
		// },
		// '/productProtocol/:type':{
		// 	name:'productProtocol',
		// 	title: '产品协议',
		// 	component: require('./pages/productProtocol.vue'),
		// 	auth: false
		// },
		'/guaranteeProtocol/:type':{ //0（秒贷 ）1（工薪贷）2（购车宝）3（惠装贷）
			name:'guaranteeProtocol',
			title: '保证合同',
			component: require('./pages/guaranteeProtocol.vue'),
			auth: false
		}, 
		'/loanProtocol/:type':{
			name:'loanProtocol',
			title: '借款合同',
			component: require('./pages/loanProtocol.vue'),
			auth: false
		}, 
		'/serviceProtocol/:type':{
			name:'serviceProtocol',
			title: '融资居间服务协议',
			component: require('./pages/serviceProtocol.vue'),
			auth: false
		}, 
		'/bannarOne':{
			name:'bannarOne',
			title: '提额攻略',
			component: require('./pages/bannarOne.vue'),
			auth: false
		},
		'/bannarTwo':{
			name:'bannarTwo',
			title: '申请攻略',
			component: require('./pages/bannarTwo.vue'),
			auth: false
		},
	});

	window.routeList=[];
	router.beforeEach(function(transition){

		if(routeList.length > 1 && transition.to.name==routeList[routeList.length-2]['name']){
			router.app.effect='back';
			routeList.splice(routeList.length-1,1);
		} else {
			router.app.effect='fade';
			routeList.push({
				name : transition.to.name,
				path : transition.to.path,
				query : transition.to.query,
				params : transition.to.params,
				timer: +new Date
			});
		}

		transition.next();
	});
}