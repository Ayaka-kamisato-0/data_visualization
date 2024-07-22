// 本文件是界面UI的根目录

import React, { useState } from 'react';
import AssistView from './AssistView';
import ControlPanel from './ControlPanel';
import Overview from './Overview';
import DetailView from './DetailView';
import '../css/App.css'
import AssistView2 from './AssistView2';
import Relativity from './Relativity'

// App组件
function App() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedXValue, setSelectedXValue] = useState(0);

  const handleStateChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedState(selectedValue);
  };

  const handleXValueChange = (event) => {
    const selectedValue = parseInt(event.target.value, 10);
    setSelectedXValue(selectedValue);
  };
  const [selectedValue, setSelectedValue] = useState([true, true, true, true, true]);

  return <div className='root'>
    <div className='controlPanel'>
      <ControlPanel selectedState={selectedState} selectedXValue={selectedXValue}
        onStateChange={handleStateChange} onXValueChange={handleXValueChange} />
    </div>
    <div className='mainPanel'>
      <div className='overview'>
        <Overview selectedState={selectedState} selectedXValue={selectedXValue}
          selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
        <DetailView />
      </div>
      <div className='otherview'>
        <div className='assistView'><AssistView /></div>
        <div className='relativity'><Relativity /></div>
        <div className='assistView2'><AssistView2 /></div>
      </div>
    </div>
  </div>;
}


export default App;
