import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { universityMapping } from './universityMapping'; // 将映射关系单独存放一个文件，方便管理

const data = [
  // 省略数据部分
];

export default function DetailView({ selectedXValue }) {
  useEffect(() => {
    const myChart_1 = echarts.init(document.getElementById('chart_1'));
    const option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: [
          'scores_overall',
          'scores_teaching',
          'scores_research',
          'scores_citations',
          'scores_industry_income',
          'scores_international_outlook'
        ]
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        // 添加具体的 x 轴数据
        data: Object.keys(universityMapping)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'scores_overall',
          type: 'line',
          data: data[0],
          emphasis: {
            focus: 'self',
            label: {
                show: true,
                formatter: function (param) {
                    return param.data[0];
                },
                position: 'right'
            }
        },
        },
        {
          name: 'scores_teaching',
          type: 'line',
          data: data[1]
        },
        {
          name: 'scores_research',
          type: 'line',
          data: data[2]
        },
        {
          name: 'scores_citations',
          type: 'line',
          data: data[3]
        },
        {
          name: 'scores_industry_income',
          type: 'line',
          data: data[4]
        },
        {
          name: 'scores_international_outlook',
          type: 'line',
          data: data[5]
        }
      ]
    };

    myChart_1.setOption(option);

    if (selectedXValue) {
      const xValueIndex = Object.keys(universityMapping).indexOf(selectedXValue);
      if (xValueIndex !== -1) {
        myChart_1.setOption({
          series: option.series.map((series, seriesIndex) => ({
            ...series,
            markLine: {
              data: [
                {
                  xAxis: xValueIndex,
                  lineStyle: {
                    color: 'yellow',
                    type: 'dashed'
                  },
                  label: {
                    position: 'end',
                    formatter: '{b}'
                  }
                }
              ]
            },
            markPoint: {
              data: [
                {
                  coord: [xValueIndex, data[seriesIndex][xValueIndex]],
                  symbol: 'circle',
                  symbolSize: 10,
                  itemStyle: {
                    color: 'yellow'
                  },
                  label: {
                    show: true,
                    formatter: `{@[1]}`,
                    position: 'top'
                  }
                }
              ]
            }
          }))
        });
      }
    }
  }, [selectedXValue]);

  const divStyle_De = {
    width: '800px',
    height: '400px',
    backgroundColor: 'white'
  };

  return (
    <div style={divStyle_De}>
      <br />
      <br />
      <br />
      <div>DetailView</div>
      <br />
      <div id="chart_1" style={{ width: '600px', height: '400px' }}></div>
    </div>
  );
}
