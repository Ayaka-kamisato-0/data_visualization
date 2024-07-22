import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';

export default function AssistView({ selectedState }) {
  useEffect(() => {
    const myChart_1 = echarts.init(document.getElementById('chart_2'));

    const option = {
      legend: {
        data: ['China', 'Hong Kong', 'Japan', 'South Korea', 'United Kingdom', 'United States', 'Australia'],
        left: 'left',
        textStyle: {
          fontSize: 10,
          fontWeight: 'bold',
          fontFamily: 'Arial',
          color: '#333'
        }
      },
      radar: {
        indicator: [
          { name: 'scores_teaching', max: 100 },
          { name: 'socres_research', max: 100 },
          { name: 'scores_citation', max: 100 },
          { name: 'socres_industry_income', max: 100 },
          { name: 'scores_international_outlook', max: 100 }
        ]
      },
      series: [
        {
          name: 'region&score',
          type: 'radar',
          data: [
            {
              value: [79, 79.5, 84.5, 98, 59],
              name: 'China',
              emphasis: {
                lineStyle: {
                  width: 4
                },
                areaStyle: {
                  opacity: 0.3
                }
              }
            },
            {
              value: [55.3, 60.5, 94.5, 95.7, 96.2],
              name: 'Hong Kong',
              emphasis: {
                lineStyle: {
                  width: 4
                },
                areaStyle: {
                  opacity: 0.3
                }
              }
            },
            {
              value: [89.7, 89.3, 63.9, 100, 47.7],
              name: 'Japan',
              emphasis: {
                lineStyle: {
                  width: 4
                },
                areaStyle: {
                  opacity: 0.3
                }
              }
            },
            {
              value: [69.8, 68.5, 77.1, 100, 45],
              name: 'South Korea',
              emphasis: {
                lineStyle: {
                  width: 4
                },
                areaStyle: {
                  opacity: 0.3
                }
              }
            },
            {
              value: [69, 75.8, 96.7, 76.6, 96.4],
              name: 'United Kingdom',
              emphasis: {
                lineStyle: {
                  width: 4
                },
                areaStyle: {
                  opacity: 0.3
                }
              }
            },
            {
              value: [74.8, 77.9, 94.4, 88.4, 76.3],
              name: 'United States',
              emphasis: {
                lineStyle: {
                  width: 4
                },
                areaStyle: {
                  opacity: 0.3
                }
              }
            },
            {
              value: [54.8, 67.1, 90.6, 96, 92.9],
              name: 'Australia',
              emphasis: {
                lineStyle: {
                  width: 4
                },
                areaStyle: {
                  opacity: 0.3
                }
              }
            },
          ]
        }
      ]
    };

    myChart_1.setOption(option);
    console.log(`Selected state: ${selectedState}`);
    if (selectedState) {
      const dataIndex = option.series[0].data.findIndex(item => item.name === selectedState);
      console.log(`Selected state: ${selectedState}, Data index: ${dataIndex}`);
      if (dataIndex !== -1) {
        myChart_1.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: dataIndex,
        });
        myChart_1.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: dataIndex,
        });
      }
    }

    return () => {
      myChart_1.dispose();
    };
  }, [selectedState]);

  const divStyle_As = {
    height: '400px',
    width: '600px'
  };

  return (
    <div style={divStyle_As}>
      <br />
      <br />
      <br />
      <div>AssistView</div>
      <br />
      <div id="chart_2" style={{ height: '400px', width: '400px' }}></div>
    </div>
  );
}
