import React, {useContext} from 'react';
import { Map, APILoader } from '@uiw/react-baidu-map';
import ReactEcharts from 'echarts-for-react';
import {store} from '../store';

function DetailView() {
    const {state, dispatch} = useContext(store);
    const getOption_De=()=> {
        return{
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
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
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };}
      const divStyle_De={
        width:'800px',
        height:'400px',
        backgroundColor: 'white'
      }
      return <div style={divStyle_De}>
        <br></br>
        <br></br>
        <br></br>
        <div>DetailView</div>
        <br></br>
        <ReactEcharts option={getOption_De()} />
    </div>
}

export default DetailView;
