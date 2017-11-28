<template>
	<div class="view-box">
		<div class="acc-mains scroll-box scroll-box-top scroll-box-bottom">
			<img src="../assets/images/bannar1.png" width="100%" />
		</div>
    </div>

</template>

<script>

	var top = require('../components/top');
	var bridge = require('../js/bridge.js');

	module.exports = {
		data: function() {
			return {
			}
		},
		components: {
			top: top
		},
		methods: {
			goback: function() {
				bridge.goBack();
			}
		}
	};

</script>

<style scoped>
</style>

