import React, { useContext } from 'react';
import { Select } from 'antd';
import { store } from '../store';
import '../css/ControlPanel.css'
import Button_Ant, { Button } from './button'

function ControlPanel({ selectedState, selectedXValue, onStateChange, onXValueChange }) {
    const { state, dispatch } = useContext(store);

    const onChange = (value) => {
        // 可以在F12调试窗口中通过console.log查看信息进行Debug
        console.log(value);
        dispatch({
            type: 'changeOption',
            payload: value
        });
    };
    const inputStyle = {
        width: '140px'
    }
    const style_button = {
        height: '30px',
        width: '140px',
    }
    return <div>
        <br></br>
        <br></br>
        <p><strong>Control Panel</strong></p>
        <Button_Ant />
        <p>Search by country/region</p>
        <select id="stateSelector" onChange={onStateChange}>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="Switzerland">Switzerland</option>
            <option value="China">China</option>
            <option value="Singapore">Singapore</option>
            <option value="Canada">Canada</option>
            <option value="Japan">Japan</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Australia">Australia</option>
            <option value="Belgium">Belgium</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Sweden">Sweden</option>
            <option value="Australia">Australia</option>
            <option value="Russia">Russia</option>
        </select>
        <br></br>

        <p>Search by University</p>
        <select id="xValueSelector" onChange={onXValueChange}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="100">100</option>
            <option value="110">110</option>
            <option value="120">120</option>
            <option value="130">130</option>
            <option value="140">140</option>
            <option value="150">150</option>
            <option value="160">160</option>
            <option value="170">170</option>
            <option value="180">180</option>
            <option value="190">190</option>
            <option value="200">200</option>
        </select>
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
