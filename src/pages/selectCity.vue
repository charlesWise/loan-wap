<template>
	<div class="view-box">
		<top title="缴纳城市" v-el:top></top>
		<div :class="['search-city-text', {'search-city-text-active': isFoucus}]">
			<input placeholder="可输入中文，拼音进行查找" type="text" @focus.self="searchFocus()" class="search-input" v-model="searchText" debounce="300"/>
			<span class="search-cancel" @click="searchBlur()">取消</span>
			<div class="search-icon"></div>
		</div>
		<div class="acc-mains scroll-box scroll-bg" v-if="!isShowSearchResult">
			<div class="search-city-list hot-search-list">
				<div class="search-city-title">热门城市</div>
				<ul class="search-city-item">
					<li v-for="item in hotCityData" @click="goSearchCity.call(this, $index, 'hot')">
						<span>{{item.name}}<div class="prompt-txt">（本次只开放{{item.name}}区域）</div><div class="more-icon"></div></span>
					</li>
				</ul>
			</div>

			<div class="search-city-list">
				<div class="search-city-title">按行政区域查找</div>
				<ul class="search-city-item">
					<li v-for="item in provinceData">
						<span @click="goShowCity.call(this, $index)">{{item.name}}<div :class="['more-icon',{'more-bottom-icon': $index!=currentProvinceIndex, 'more-top-icon': $index==currentProvinceIndex}]"></div></span>
						<ul class="serach-city-sec" v-if="item.cityData" v-show="$index==currentProvinceIndex">
							<li v-for="cityItem in item.cityData" @click="goSearchCity.call(this, $index, 'pro')">
								{{cityItem.name}}
								<div class="more-icon"></div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div class="acc-mains scroll-box scroll-bg" v-else>
			<div class="search-city-list">
				<div class="search-city-title">搜索结果</div>
				<ul class="search-city-item">
					<li v-for="item in searchResultData" @click.stop.prevent="goSearchCity.call(this, $index, 'search')">
						<span>{{item.name}}<div class="more-icon"></div></span>
					</li>
				</ul>
			</div>
		</div>
    </div>
</template>

<script>

	var top = require('../components/top.vue');
	var Utils = require('../js/utils');
	var apiUrl = require('../config');
	var bridge = require('../js/bridge');
	var authConfig = require('../config/authConfig');

	module.exports = {
		data: function() {
			return {
				params: this.$route.params,
				query: this.$route.query,
				hotCityData: [],
				provinceData: [],
				searchText: '',
				searchResultData: [],
				isShowSearchResult: false,
				authConfig: authConfig,
				isFoucus: false,
				currentProvinceIndex: null
			}
		},
		components: {
			top: top
		},
		methods: {
			doLogin: function(callback) {
				Utils.ajax(this, {
					method: 'post',
					data: {
						mobile: 15988496237,
						password: 123456789,
					},
					url: apiUrl.login,
					success: function(json) {
						if (json.success) {
							callback && callback();
						} else {
							this.$dispatch('showToast', json.message);
						}
					}
				});
			},
			filterHotData: function(data) {
				var result = [];
				var obj = this.authConfig[this.params.type];
				data.forEach(function(item, index) {
					if (obj && obj[item.code]) {
						result.push(item);
					}
				});

				return result;
			},
			getHotAndProvince: function() {
				Utils.ajax(this, {
					method: 'post',
					url: apiUrl.admHost + apiUrl.getDistrict,
					success: function(json) {
						if (json.success) {
							var data = json.data;
							this.hotCityData = this.filterHotData(data.hotCity);
							this.provinceData = data.province;
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
			getCity: function(opt, callback) {
				Utils.ajax(this, {
					method: 'post',
					data: opt,
					url: apiUrl.admHost + apiUrl.selectCity,
					success: function(json) {
						if (json.success) {
							var data = json.data;
							callback && callback.call(this, data);
						} else {
							this.$dispatch('showToast', json.message);
						}
					}
				});
			},
			goSearchCity: function(index, type) {
				var tmp;
				switch(type) {
					case "hot":
						tmp = this.hotCityData[index];
						break;
					case "search":
						tmp = this.searchResultData[index];
						break;
					default:
						tmp = this.provinceData[this.currentProvinceIndex].cityData[index];
						break;
				}
				if (this.authConfig[this.params.type][tmp.code]) {
					this.$root.$route.router.go({name: 'authEntication', params: {
						type: this.params.type,
						city: tmp.code
					},
					query: {
						name: this.query.name,
						idcard: this.query.idcard,
						source: this.query.source
					} });
				} else {
					this.$dispatch('showToast', '本次只开放杭州区域');
				}
			},
			goShowCity: function(index) {
				this.currentProvinceIndex = (this.currentProvinceIndex == index) ? null : index;
				var currentPro = this.provinceData[index];

				if (currentPro.cityData) return;

				this.getCity({
					provinceCode: currentPro.code
				}, function(data) {
					var obj = { cityData: data };
					obj = Utils.extend(obj, currentPro, true);
					this.provinceData.$set(index, obj);
				});
			},
			searchFocus: function() {
				this.isFoucus = true;
			},
			searchBlur: function() {
				this.searchText = '';
				this.isFoucus = false;
			}
		},
		watch: {
	      	searchText: {
		        handler: function(newVal, oldVal) {
		        	if (newVal == "") {
		        		this.isShowSearchResult = false;
		        	} else {
		        		if (newVal != oldVal) {
		        			this.getCity({
								searchKey: newVal
							}, function(data) {
								this.isShowSearchResult = true;
								this.searchResultData = data;
							});
		        		}
		        	}
		        }
	    	}
	    },
		created: function() {
			//this.doLogin(function(){
				this.getHotAndProvince();
			//}.bind(this));
		}
	};

</script>

<style>
	.scroll-bg{
		background: #fff;
	    top: 184px;
	    bottom: 0;
	}
	.search-city-text{
		position: absolute;
		width: 100%;
		top: 88px;
		padding: 12px 24px;
		text-align: left;
		background: #fff;
	}
	.search-city-text-active .search-input{
		text-align: left;
		width: 620px;
	}
	.search-city-text-active .search-cancel{
		display: inline-block;
	}
	.search-cancel{
		font-size: 32px;
		color: #54b990;
		padding-left: 10px;
		text-align: center;
		display: none;
	}
	.search-icon{
		width: 32px;
		height: 32px;
		background: #fff url("../assets/images/search-icon.png") no-repeat center center;
		background-size: cover;
		position: absolute;
		top: 32px;
		left: 150px;
	}
	.search-city-text-active .search-icon{
		left: 40px;
	}
	.search-input{
		background: #fff;
		height: 72px;
		line-height: 72px;
		padding: 0 50px;
		width: 100%;
		font-size: 30px;
		text-align: center;
		border: 1px solid #d8d8d8; /*no*/
		border-radius: 8px;
	}
	.search-city-list{
		background: #fff;
		border-top: 1px solid #d8d8d8; /*no*/
	}
	.search-city-title{
		font-size: 24px;
		height: 80px;
		text-align: left;
		text-indent: 32px;
		line-height: 80px;
		border-bottom: 1px solid #d8d8d8; /*no*/
		color: rgba(0,0,0,0.54);
	}
	.search-city-item{
		text-align: left;
		& > li{
			font-size: 28px;
			min-height: 96px;
			line-height: 96px;
			span{
				position: relative;
				margin: 0 32px;
				height: 95px;
				line-height: 95px;
				display: block;
				border-bottom: 1px solid #d8d8d8; /*no*/
			}
			li {
				span:last-child{
					border-bottom: 0;
				}
			}
		}
	}
	.prompt-txt{
		color: #999;
		display: inline-block;
	}
	.hot-search-list {
		.search-city-item{
			li:last-child{
				span{
					border-bottom: 0;
				}
			}
		}
	}
	.more-icon{
		width: 16px;
		height: 28px;
		background:url("../assets/images/more-icon.png") no-repeat right center;
		background-size: cover;
		position: absolute;
		right: 0;
		top: 34px;
		transform: translate3d(0, 0, 0);
	}
	.more-top-icon{
		transform: rotate(270deg);
	}
	.more-bottom-icon{
		transform: rotate(90deg);
	}
	.serach-city-sec{
		background: #f4f4f4;
		padding: 0 32px 0 64px;
		li{
			height: 96px;
			line-height: 96px;
			position: relative;
			border-bottom: 1px solid #d8d8d8; /*no*/
		}
	}
</style>

