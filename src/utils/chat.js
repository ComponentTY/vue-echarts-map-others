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
export const searchOption = (colorType, itemValue , itemTitle) => {
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