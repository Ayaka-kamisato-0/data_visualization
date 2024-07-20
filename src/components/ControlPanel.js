import React, {useContext} from 'react';
import {Select} from 'antd';

import {store} from '../store';
import '../css/ControlPanel.css'

function ControlPanel() {
    const {state, dispatch} = useContext(store);

    const onChange = (value)=>{
        // 可以在F12调试窗口中通过console.log查看信息进行Debug
        console.log(value);
        dispatch({
            type: 'changeOption',
            payload: value
        });
    };
    const inputStyle={
        width:'140px'
    }
    const style_button={
            height: '30px',
            width:'140px',
    }
    return <div>
        <br></br>
        <br></br>
        <p><strong>Control Panel</strong></p>
        <p>Search by country/region</p>
        <Select onChange={onChange} defaultValue='country/region'>
            <Select.Option value='A'>China</Select.Option>
            <Select.Option value='B'>USA</Select.Option>
            <Select.Option value='C'>Japan</Select.Option>
        </Select>
        <p>Search by University</p>
        <Select onChange={onChange} defaultValue='University'>
            <Select.Option value='MIT'>MIT</Select.Option>
            <Select.Option value='Tsinghua University'>Tsinghua University</Select.Option>
            <Select.Option value='Peking University'>Peking University</Select.Option>
            <Select.Option value='Zhejiang University'>Zhejiang University</Select.Option>
        </Select>
        <br></br>
        <br></br>
        <br></br>
        <div class='button'>
        <button style={style_button}>research             </button>
        <br></br>
        <br></br>
        <button style={style_button}>teaching             </button>
        <br></br>
        <br></br>
        <button style={style_button}>cittations           </button>
        <br></br>
        <br></br>
        <button style={style_button}>industry_income      </button>
        <br></br>
        <br></br>
        <button style={style_button}>international_outlook</button>
        </div>
    </div>
}

export default ControlPanel;
