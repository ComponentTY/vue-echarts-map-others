<style scoped>
</style>
<template>
	<div id="charts" style="height:500px;width:1000px;"></div>
</template>
<script>
	export default {
		data () {
			return {
			}
		},
		mounted () {
			// 实例图表,每个容器只能有一个图表实例
			var myChart = this.$echarts.init(document.getElementById('charts'))
			window.onresize = () => { // 图表随视图的变化而变化
				myChart.resize()
			}
			var option = {
				// 表头提示内容
				title: {
						text: '动态数据',
						subtext: '纯属虚构'
				},
				// 鼠标放上去提示的内容
				tooltip: {
						trigger: 'axis',
						axisPointer: {
								type: 'cross',
								label: {
										backgroundColor: '#283b56'
								}
						}
				},
				// 显示头部内容
				legend: {
						data:['最新成交价', '预购队列']
				},
				// 工具类
				// toolbox: {
				// 		show: true,
				// 		feature: {
				// 				dataView: {readOnly: false},
				// 				restore: {},
				// 				saveAsImage: {}
				// 		}
				// },
				// 移动的距离 true显示下面的滚动条,false不显示
				dataZoom: {
						show: true,
						start: 0,
						end: 100
				},
				// x轴的相关数据
				xAxis: [
						{
								type: 'category',
								boundaryGap: true,
								data: (function (){
										var now = new Date();
										var res = [];
										var len = 10;
										while (len--) {
												res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
												now = new Date(now - 2000);
										}
										return res;
								})()
						},
						{
								type: 'category',
								boundaryGap: true,
								data: (function (){
										var res = [];
										var len = 10;
										while (len--) {
												res.push(10 - len - 1);
										}
										return res;
								})()
						}
				],
				// y轴相关数据
				yAxis: [
						{
								type: 'value',
								scale: true,
								name: '价格',
								max: 30,
								min: 0,
								boundaryGap: [0.2, 0.2]
						},
						{
								type: 'value',
								scale: true,
								name: '预购量',
								max: 1200,
								min: 0,
								boundaryGap: [0.2, 0.2]
						}
				],
				series: [
						{
								name:'预购队列',
								type:'bar',
								xAxisIndex: 1,
								yAxisIndex: 1,
								data:(function (){
										var res = [];
										var len = 10;
										while (len--) {
												res.push(Math.round(Math.random() * 1000));
										}
										return res;
								})()
						},
						{
								name:'最新成交价',
								type:'line',
								data:(function (){
										var res = [];
										var len = 0;
										while (len < 10) {
												res.push((Math.random()*10 + 5).toFixed(1) - 0);
												len++;
										}
										return res;
								})()
						}
				]
		};

			app.count = 11;
			setInterval(function (){
					let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
					var data0 = option.series[0].data;
					var data1 = option.series[1].data;
					data0.shift();
					data0.push(Math.round(Math.random() * 1000));
					data1.shift();
					data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

					option.xAxis[0].data.shift();
					option.xAxis[0].data.push(axisData);
					option.xAxis[1].data.shift();
					option.xAxis[1].data.push(app.count++);
					// 给实例绑定option,此处的option是上面定义的option,设置的属性值
					myChart.setOption(option);
			}, 2100);
		}
	}
</script>
