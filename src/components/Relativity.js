import React, { useContext } from 'react';
import ReactEcharts from 'echarts-for-react';
import { store } from '../store';
import citations from './assets/citations.png'
import research from './assets/research.png'
import teaching from './assets/teaching.png'
import IndustryIncome from './assets/IndustryIncome.png'
import InternationalOutlook from './assets/InternationalOutlook.png'

function Relativity({ selectedYValue }) {
let val=teaching;
if(selectedYValue==='research'){
    val=research;
}
if(selectedYValue==='citations'){
    val=citations;
}
if(selectedYValue==='IndustryIncome'){
    val=IndustryIncome;
}
if(selectedYValue==='InternationalOutlook'){
    val=InternationalOutlook;
}
    return <div>
        <br/>
        <p>Cluster Diagram</p>
        <img src={val} height='400px' width='500px' alt='picture'/>
    </div>

}


export default Relativity;