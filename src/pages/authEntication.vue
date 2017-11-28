<template>
	<div class="view-box">
		<top :title="authType" v-el:top></top>
		<div class="acc-mains scroll-box scroll-box-bottom" v-if="this.authConfig[this.params.type][this.params.city]">
			<div class="social-list">
				<div :class="['social-list-title', {'active': selectIndex == $index}]" @click="tabSwitch($index)" v-for="item in currentConfig[0]">{{item.text}}</div>
			</div>

			<div class="social-list social-list-top">
				<span class="social-list-l">姓名</span>
				<input placeholder="请输入姓名" type="text" class="social-list-r" v-model="inputData.name" v-el:name />
			</div>
			<div class="social-list">
				<span class="social-list-l">身份证号</span>
				<input placeholder="请输入身份证号码" type="text" class="social-list-r" v-model="inputData.identityId" v-el:identityid />
			</div>

			<div class="social-list">
				<span class="social-list-l">手机号码</span>
				<input placeholder="请输入绑定手机号" type="text" maxlength="11" class="social-list-r" v-model="inputData.mobile" />
			</div>
			
			<div class="social-list-top">
				<div class="social-list">
					<span class="social-list-l">{{currentConfig[0][selectIndex].text}}</span>
					<input :placeholder="currentConfig[0][selectIndex].placeText" type="password" class="social-list-r" v-model="inputData[currentConfig[0][selectIndex].type]" v-if="currentConfig[0][selectIndex].isPwd"/>
					<input :placeholder="currentConfig[0][selectIndex].placeText" type="text" class="social-list-r" v-model="inputData[currentConfig[0][selectIndex].type]" v-else/>
				</div>
				<div class="social-list">
					<span class="social-list-l">{{currentConfig[1].text}}</span>
					<input :placeholder="currentConfig[1].placeText" type="password" class="social-list-r" v-model="inputData[currentConfig[1].type]" v-if="currentConfig[1].isPwd"/>
					<input :placeholder="currentConfig[1].placeText" type="text" class="social-list-r" v-model="inputData[currentConfig[1].type]" v-else/>
				</div>
			</div>

			<div :class="['common-btn', 'social-btn', { 'common-btn-active': isCanSubmit }]" @click="submitAuth()">提交</div>
		</div>
		<div class="acc-mains scroll-box scroll-box-bottom" v-else>
			<div class="no-support">此地区暂不支持</div>
		</div>
    </div>

</template>

<script>

	var top = require('../components/top');
	var Utils = require('../js/utils');
	var bridge = require('../js/bridge.js');
	var apiUrl = require('../config.js');
	var authConfig = require('../config/authConfig');
	var Vue = require('vue');

	module.exports = {
		data: function() {
			return {
				params: this.$route.params,
				query: this.$route.query,
				authType: '',
				isCanSubmit: false,
				mobileText: '手机号码格式不正确',
				identityCodeTxt: '身份证号码格式不正确',
				keyName: '',
				selectIndex: 0,
				inputData: {
					name: '',
					identityId: '',
					mobile: Utils.getParam('CFD_AUTH_MOBILE')
				},
				currentConfig: [],
				authConfig: authConfig
			}
		},
		components: {
			top: top
		},
		methods: {
			getAuthType: function() {
				switch(this.params.type) {
					case '3':
						this.authType = '社保认证';
						break;
					case '2':
						this.authType = '公积金认证';
						break;
				}
				this.inputData.sort = this.currentConfig[0][this.selectIndex].sort;
			},
			submitAuth: function() {
				if (!this.isCanSubmit) return;

				if (!Utils.validMobile(this.inputData.mobile)) {
					this.$dispatch('showToast', this.mobileText);
					return;
				}

				if (!Utils.validIdCard(this.inputData.identityId)) {
					this.$dispatch('showToast', this.identityCodeTxt);
					return;
				}

				var opt = { type: this.params.type, area: this.params.city };
				if (this.query.source) opt.source = this.query.source;
				opt = Utils.extend(opt, this.inputData, true);

				Utils.setParam('CFD_AUTH_MOBILE', opt.mobile);
				Utils.setParam(this.keyName, opt[this.currentConfig[0][this.selectIndex].type]);

				bridge.showLoading && bridge.showLoading();
				Utils.ajax(this, {
					data: opt,
					url: apiUrl.admHost + apiUrl.doAuthentication,
					success: function(json) {
						bridge.hideLoading && bridge.hideLoading();
						if (json.success) {
							bridge.goBack();
						} else {
							if (json.code == '403') {
								bridge.goLuckDraw();
							} else {
								this.$dispatch('showToast', json.message);
							}
						}
					}
				});
			},
			tabSwitch: function(index) {
				Vue.delete(this.inputData, [this.currentConfig[0][this.selectIndex].type]);
				this.selectIndex = index;
				Vue.set(this.inputData, [this.currentConfig[0][this.selectIndex].type], Utils.getParam(this.keyName));
				this.inputData.sort = this.currentConfig[0][this.selectIndex].sort;
			}
		},
		watch: {
			inputData: {
				handler: function(newVal, oldVal) {
					if (Utils.isObjectValEmpty(document.querySelectorAll('.social-list-r'))) {
						this.isCanSubmit = true;
					} else {
						this.isCanSubmit = false;
					}
				},
				deep: true
			}
		},
		compiled: function() {
			if (this.query.idcard) {
				this.$els.identityid.disabled = "disabled";
			} else {
				this.$els.identityid.disabled = "";
			}

			if (this.query.name) {
				this.$els.name.disabled = "disabled";
			} else {
				this.$els.name.disabled = "";
			}
		},
		created: function() {
			this.keyName = this.params.type == 2 ? 'CFD_AUTH_SOCIAL' : 'CFD_AUTH_HOUSE';
			this.inputData.name = this.query.name || '';
			this.inputData.identityId = this.query.idcard || '';
			this.currentConfig = this.authConfig[this.params.type][this.params.city];
			Vue.set(this.inputData, [this.currentConfig[0][this.selectIndex].type], Utils.getParam(this.keyName));
			this.getAuthType();
		}
	};

</script>

<style>
	.no-support{
		font-size: 32px;
		margin-top: 100px;
	}
	.social-list-top{
		margin-top: 28px;
		border-top: 1px solid rgba(0,0,0,0.12); /*no*/
	}
	.social-list{
		text-align: left;
		height: 88px;
		line-height: 88px;
		background: #FFF;
		font-size: 0;
		border-bottom: 1px solid rgba(0,0,0,0.12); /*no*/
	}
	.social-list-l{
		width: 250px;
		font-size: 32px;
		text-indent: 32px;
		text-align: left;
		display: inline-block;
	}
	.social-list-r{
		width: 450px;
		font-size: 32px;
	}
	.social-list-title{
		width: 40%;
		margin: 0 5%;
		font-size: 30px;
		text-align: center;
		display: inline-block;
	}
	.social-list-title.active{
		color: #54b990;
		border-bottom: 1px solid #54b990;/*no*/
	}
	.common-btn{
		background: #9B9B9B;
		height: 88px;
		line-height: 88px;
		text-align: center;
		font-size: 32px;
		border-radius: 8px;
		color: #fff;
	}
	.common-btn-active{
		background: #54b990;
	}
	.social-btn{
		margin: 44px 32px 0;
	}
</style>

