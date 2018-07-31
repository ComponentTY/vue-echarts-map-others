import echarts from 'echarts'
/**
 * 饼图--->pie
 * @param {Array} itemValue
 * @param {String} itemTitle
 * @param {Number} colorType
 */
const itemColor1 = ['rgba(185,161,243,0.1)', 'rgba(114,148,247,0.1)', 'rgb(185,161,243)', 'rgb(114,148,247)', 'rgba(185,161,243,0.2)', 'rgba(114,148,247,0.2)']
const itemColor2 = ['rgba(123,206,197,0.1)', 'rgba(73,152,196,0.1)', 'rgb(123,206,197)', 'rgb(73,152,196)', 'rgba(123,206,197,0.2)', 'rgba(73,152,196,0.2)']
const itemColor3 = ['rgba(109,107,243,0.1)', 'rgba(158,85,234,0.1)', 'rgb(109,107,243)', 'rgb(158,85,234)', 'rgba(109,107,243,0.2)', 'rgba(158,85,234,0.2)']
export const setPieOption = (colorType, itemValue , itemTitle) => {
  let itemColor = colorType === 1 ? itemColor1 : colorType === 2 ? itemColor2 : itemColor3
  var option = {
      backgroundColor: '#2c343c',
      grid: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      },
      title: {
          text: itemTitle,
          show:true,
          left: 'center',
          bottom: 20,
          textStyle: {
              color: '#fff'
          }
      },
      legend: {
        itemGap: 50,
        bottom: '10%',
        itemHeight: 20,
        itemWidth: 20,
        textStyle: {
          fontSize: 16,
          color: '#fff'
        }
      },
      series : [
          {
              name: 'pie1',
              type:'pie',
              radius : [78, 90],
              center: ['50%', '50%'],
              silent: true,
              label: {
                  normal: {
                    show:false
                  }
              },
              data: [{
                value: 100,
                itemStyle: {
                  normal: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 1,
                      x2: 1,
                      y2: 0,
                      colorStops: [
                        {
                          offset: 0, color: itemColor[0]
                        },
                        {
                          offset: 1, color: itemColor[1]
                        }
                      ]
                    }
                  }
                }
              }
            ]
          }, {
            name: 'pie2',
            type:'pie',
            radius : [80, 88],
            center: ['50%', '50%'],
            silent: true,
            label: {
                normal: {
                  show:false
                }
            },
            data: [{
              value: Math.abs(itemValue[0]),
              label: {
                normal: {
                  show: true,
                  position: 'center',
                  fontSize: 48,
                  color: '#fff',
                  formatter: params => itemValue[0] // '{d}%'
                }
              },
              itemStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0, color: itemColor[2]
                      },
                      {
                        offset: 1, color: itemColor[3]
                      }
                    ]
                  }
                }
              }
            },{
              value: itemValue[1] - itemValue[0],
              itemStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0, color: itemColor[4]
                      },
                      {
                        offset: 1, color: itemColor[5]
                      }
                    ]
                  }
                }
              }
            }
          ]
        }],
          labelLine: {
            normal: {
              show: false
            }
          }
  }
  return option
}

/**
 * 柱状图实例
 * item1=>表头 item2=>图例数组名称
 * author 10600
 */
export const setBarOption = (item1, item2, item3, item4, item5, item6) => {
  var option = {
    backgroundColor: '#262837',
    grid: {
      top: 50,
      left: 60,
      right: 60,
      bottom: 100
    },
    tooltip: {
      formatter: function (params) {
        if (params.value < 0) {
          return params.name + '<br/>能耗:' + -params.value + 'KW·h'
        } else {
          return params.name + '<br/>里程:' + params.value + 'km'
        }
      }
    },
    legend: {
      data: [{ name: '里程', textStyle: { color: '#fff' } }, { name: '能耗', textStyle: { color: '#fff' } }]
    },
    xAxis: [{
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        margin: 20,
        fontSize: 12,
        color: '#D1D0DF'
      },
      data: ['2018-2-1','2018-2-2','2018-2-3','2018-2-4','2018-2-5','2018-2-6','2018-2-7','2018-2-8','2018-2-9','2018-2-10']
    }],
    yAxis: [
      {
        name: '里程 (km)',
        nameTextStyle: {
          fontSize: 12,
          color: '#D1D0DF'
        },
        nameGap: 35,
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          margin: 20,
          fontSize: 12,
          color: '#D1D0DF',
          formatter: function (value) {
            if (value < 0) {
              return -value
            } else {
              return value
            }
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(238,238,238,0.2)',
            width: 1,
            type: 'dashed'
          }
        }
      },
      {
        name: '能耗 (KW·h)',
        nameTextStyle: {
          fontSize: 12,
          color: '#D1D0DF'
        },
        nameGap: 35,
        nameLocation: 'start',
        position: 'left',
        axisTick: { show: false },
        axisLine: { show: false }
      }
    ],
    series: [
      {
        name: '里程',
        type: 'bar',
        stack: 'one', // 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
        barCategoryGap: '70%',
        itemStyle: {
          normal: {
            barBorderRadius: [0, 0, 4, 4],
            color: new echarts.graphic.LinearGradient(
              0, 1, 0, 0,
              [
                { offset: 0, color: '#7294F7' },
                { offset: 1, color: '#B9A1F3' }
              ])
          },
          emphasis: {
            color: new echarts.graphic.LinearGradient(
              0, 1, 0, 0,
              [
                { offset: 0, color: '#B9A1F3' },
                { offset: 1, color: '#7294F7' }
              ])
          }
        },
        data: [-10, -20, -30, -40, -50, -60, -70]
      },
      {
        name: '能耗',
        type: 'bar',
        stack: 'one',
        barCategoryGap: '70%',
        itemStyle: {
          normal: {
            barBorderRadius: [4, 4, 0, 0],
            color: new echarts.graphic.LinearGradient(
              0, 1, 0, 0,
              [
                { offset: 0, color: '#EED87B' },
                { offset: 1, color: '#F2AA77' }
              ])
          },
          emphasis: {
            color: new echarts.graphic.LinearGradient(
              0, 1, 0, 0,
              [
                { offset: 0, color: '#F2AA77' },
                { offset: 1, color: '#EED87B' }
              ])
          }
        },
        data: [100, 200, 300, 400, 500, 600, 700]
      }
    ],
    dataZoom: [{
      show: false,
      backgroundColor: '#1E202E',
      bottom: 0,
      start: 0,
      end: 100,
      handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
      handleSize: '110%',
      handleStyle: { color: '#d3dee5' },
      textStyle: { color: '#fff' },
      fillerColor: '#7A798F',
      borderColor: '#90979c'
    }, { type: 'inside' }]
  }
  return option
}