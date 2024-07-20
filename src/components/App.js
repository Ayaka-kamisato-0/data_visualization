// 本文件是界面UI的根目录

import React from 'react';
import AssistView from './AssistView';
import ControlPanel from './ControlPanel';
import Overview from './Overview';
import DetailView from './DetailView';
import '../css/App.css'
import AssistView2 from './AssistView2';
import Relativity from './Relativity'

// App组件
function App() {

    return <div className='root'>
        <div className='controlPanel'>
          <ControlPanel/>
        </div>
        <div className='mainPanel'>
          <div className='overview'>
            <Overview/>
            <DetailView/>
          </div>
          <div className='otherview'>
          <div className='assistView'><AssistView/></div>
          <div className='relativity'><Relativity/></div>
            <div className='assistView2'><AssistView2/></div>
          </div>
        </div>
    </div>;
}

export default App;
