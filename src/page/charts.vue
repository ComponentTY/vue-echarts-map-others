<style scoped>
#pie{
	width:50%;
	height:400px;
	margin-top:30px;
}
#charts{
	width:100%;
	height:700px;
}
</style>
<template>
<div>
	<div id="charts"></div>
	<div id="pie"></div>
</div>
</template>
<script>
import {setPieOption, setBarOption} from '@/utils/chat.js'
	export default {
		data () {
			return {
				chart1: null,
				chart2: null
			}
		},
		created () {
			this.$store.commit('setActiveMenu', '/charts')
		},
		mounted () {
			// 实例图表,每个容器只能有一个图表实例
			this.chart1 = this.$echarts.init(document.getElementById('charts'))
			this.chart2 = this.$echarts.init(document.getElementById('pie'))
			window.onresize = () => { // 图表随视图的变化而变化
				this.chart1.resize()
				this.chart2.resize()
			}
			this.getOption()
		},
		methods: {
			getOption () {
				let name = '饼状图例子'
				let option1 = setPieOption(1, [50, 100], name)
				let option2 = setBarOption('里程能耗图表', ['里程', '能耗'], '{a}{b}{c}/n里程', ['里程', '能耗'],)
				this.chart1.setOption(option2)
				this.chart2.setOption(option1)
			}
		}
	}
</script>
