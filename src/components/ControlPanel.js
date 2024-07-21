import React, {useContext} from 'react';
import {Select} from 'antd';
import {store} from '../store';
import '../css/ControlPanel.css'
import Button_Ant, { Button } from './button'

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
        <Button_Ant />
        <p>Search by country/region</p>
        <Select onChange={onChange} defaultValue='country/region'>
            <Select.Option value='China'>China</Select.Option>
            <Select.Option value='Japan'>Japan</Select.Option>
            <Select.Option value='South Korea'>South Korea</Select.Option>
            <Select.Option value='Singapore'>Singapore</Select.Option>
            <Select.Option value='United Kingdom'>United Kingdom</Select.Option>
            <Select.Option value='United States'>United States</Select.Option>
            <Select.Option value='Switzerland'>Switzerland</Select.Option>
            <Select.Option value='Germany'>Germany</Select.Option>
            <Select.Option value='France'>France</Select.Option>
            <Select.Option value='HongKong'>China HongKong</Select.Option>
            <Select.Option value='Australia'>Australia</Select.Option>
            <Select.Option value='Russia'>Russia</Select.Option>
            <Select.Option value='Belgium'>Belgium</Select.Option>
            <Select.Option value='Netherlands'>Netherlands</Select.Option>
            <Select.Option value='Taiwan'>China Taiwan</Select.Option>
            <Select.Option value='Sweden'>Sweden</Select.Option>
        </Select>
        <br></br>
        
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
