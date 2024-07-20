import React, { useContext } from 'react';
import ReactEcharts from 'echarts-for-react';

import { store } from '../store';

function AssistView() {
    const getOption_As=()=> {return {
        legend: {
          data: ['Allocated Budget', 'Actual Spending']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Technology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 }
          ]
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: 'Allocated Budget'
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: 'Actual Spending'
              }
            ]
          }
        ]
      };}
      const divStyle_As={
        height:'500px',
        width:'500px'
      }
      return <div style={divStyle_As}>
        <br></br>
        <br></br>
        <br></br>
        <div>AssistView</div>
        <br></br>
        <ReactEcharts option={getOption_As()} />
    </div>
}

export default AssistView;
