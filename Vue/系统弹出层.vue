<template>
	<div class="system_alert" v-show="systemTipFlag">{{systemTips}}</div>
</template>

<script>
	export default {
		data() {
			return {
				systemTipFlag: false,
				systemTips: ''
			}
		},
		mounted() {
			this.systemAlert('提示信息')
		},
		methods: {
			systemAlert(message) {
		      if (!this.systemTipFlag) {
		        this.systemTipFlag = true;
		        this.systemTips = message;
		        if (this.systemTipTime) {
		          clearTimeout(this.systemTipTime);
		        }
		        this.systemTipTime = setTimeout(() => {
		          this.systemTipFlag = false;
		          this.systemTipTime = null;
		          this.systemTips = "";
		        }, 1500);
		      }
		    }
		}
	}
</script>

<style scoped>
.system_alert {
  position: fixed;
  z-index: 1000;
  bottom: 4rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.5);
  font-size: 0.3rem;
  text-align: center;
  color: #ffffff;
  width: auto;
  max-width: 70%;
  max-height: 1rem;
  height: auto;
  padding: 0.12rem;
  border-radius: 0.1rem;
  word-break: break-all;
}
</style>