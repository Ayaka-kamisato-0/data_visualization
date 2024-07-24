import React, { useContext } from 'react';
import ReactEcharts from 'echarts-for-react';

import { store } from '../store';

function AssistView2() {
    const {state, dispatch} = useContext(store);

    const getOption = () => {
        const colors = ['blue','red', 'brown', 'green','yellow','purple'];
        return {
  color: colors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    right: '20%'
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['ranking', 'teaching','research','citations','industry income','international outlook',]
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      // prettier-ignore
      data: ['2018','2019','2020','2021','2022','2023','2024']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'ranking(Avg)',
      position: 'right',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[0]
        }
      },
      axisLabel: {
        formatter: '{value} '
      }
    },
    {
      type: 'value',
      name: 'score',
      position: 'left',
      alignTicks: true,
      offset: 0,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[1]
        }
      },
      axisLabel: {
        formatter: '{value} '
      }
    },
  ],
  series: [
    {
      name: 'ranking',
      type: 'bar',
      yAxisIndex:0,
      data: [
        119.9,96.3,92.0,72.1,63.4,53.1,42.6
      ]
    },
    {
      name:'teaching',
      type:'line',
      yAxisIndex:1,
      data:[62.2,69.5,68.1,69.4,70.9,74.3,78.9]
      },{
        name:'research',
        type:'line',
        yAxisIndex:1,
        data:[65.4,65.3,68.3,71.7,73.8,78.7,79.5]
        },{
          name:'citations',
          type:'line',
          yAxisIndex:1,
          data:[63.1,66.2,65.8,68.7,73.2,74.1,84.5]
          },{
            name:'industry income',
            type:'line',
            yAxisIndex:1,
            data:[84.4,78.6,87.1,90.0,88.7,89.4,98.0]
            },{
              name:'international outlook',
              type:'line',
              yAxisIndex:1,
              data:[39.0,48.1,50.4,52.3,52.0,48.8,58.8]
              }
  ]
};}
const divStyle_As2={
    height:'0px',
    width:'600px',
}
    return <div style={divStyle_As2}>
        <br/>
        <br/>
        <br/>
        <p>Scores over time</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <ReactEcharts option={getOption()} />
    </div>
}

export default AssistView2;