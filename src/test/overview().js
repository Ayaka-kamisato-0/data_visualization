import React, { useContext } from 'react';
import ReactEcharts from 'echarts-for-react';

import { store } from '../store';

function AssistView() {
    const getOption_As=()=> {return {
        legend: {
          data: ['China-100','Hong Kong-100','Japan-100','South Korea-100','United Kingdom-100','United States-100','Australia-100'],
          position:'left',
          textStyle: {
            fontSize: 10,
            fontWeight: 'bold',
            fontFamily: 'Arial',
            color: '#333'
        }
    },
        radar: {
          // shape: 'circle',
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
                  value: [ 79, 79.5, 84.5, 98, 59],
                  name: 'China-100'
              },//共7所
              {
                  value: [ 55.3, 60.5, 94.5, 95.7, 96.2],
                  name: 'Hong Kong-100'
              },//共5所
              {
                  value:[89.7,89.3,63.9,100,47.7],
                  name:'Japan-100'
              },
              {
                value:[69.8,68.5,77.1,100,45],
                name:'South Korea-100'
            },
              {
                  value: [ 69, 75.8, 96.7, 76.6, 96.4],
                  name: 'United Kingdom-100'
              },//共11所
              {
                  value: [ 74.8, 77.9, 94.4, 88.4, 76.3],
                  name: 'United States-100'
              },
              {
                value:[54.8,67.1,90.6,96,92.9],
                name:'Australia-100'
            },
          ]
          }
        ]
      };}
      const divStyle_As={
        height:'500px',
        width:'700px'
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
