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
        <Select onChange={onStateChange} defaultValue="country/region">
            <Select.Option value="China">China</Select.Option>
            <Select.Option value="Japan">Japan</Select.Option>
            <Select.Option value="South Korea">South Korea</Select.Option>
            <Select.Option value="Singapore">Singapore</Select.Option>
            <Select.Option value="United Kingdom">United Kingdom</Select.Option>
            <Select.Option value="United States">United States</Select.Option>
            <Select.Option value="Switzerland">Switzerland</Select.Option>
            <Select.Option value="Germany">Germany</Select.Option>
            <Select.Option value="France">France</Select.Option>
            <Select.Option value="Hong Kong">China HongKong</Select.Option>
            <Select.Option value="Australia">Australia</Select.Option>
            <Select.Option value="Russia">Russia</Select.Option>
            <Select.Option value="Belgium">Belgium</Select.Option>
            <Select.Option value="Netherlands">Netherlands</Select.Option>
            <Select.Option value="Taiwan">China Taiwan</Select.Option>
            <Select.Option value="Sweden">Sweden</Select.Option>
        </Select>
        <br></br>

        <p>Search by University</p>
        <Select onChange={onXValueChange} defaultValue="">
            <Select.Option value="University of Oxford">University of Oxford</Select.Option>
            <Select.Option value="Stanford University">Stanford University</Select.Option>
            <Select.Option value="Massachusetts Institute of Technology">Massachusetts Institute of Technology</Select.Option>
            <Select.Option value="Harvard University">Harvard University</Select.Option>
            <Select.Option value="University of Cambridge">University of Cambridge</Select.Option>
            <Select.Option value="Princeton University">Princeton University</Select.Option>
            <Select.Option value="California Institute of Technology">California Institute of Technology</Select.Option>
            <Select.Option value="Imperial College London">Imperial College London</Select.Option>
            <Select.Option value="University of California, Berkeley">University of California, Berkeley</Select.Option>
            <Select.Option value="Yale University">Yale University</Select.Option>
            <Select.Option value="ETH Zurich">ETH Zurich</Select.Option>
            <Select.Option value="Tsinghua University">Tsinghua University</Select.Option>
            <Select.Option value="The University of Chicago">The University of Chicago</Select.Option>
            <Select.Option value="Peking University">Peking University</Select.Option>
            <Select.Option value="Johns Hopkins University">Johns Hopkins University</Select.Option>
            <Select.Option value="University of Pennsylvania">University of Pennsylvania</Select.Option>
            <Select.Option value="Columbia University">Columbia University</Select.Option>
            <Select.Option value="University of California, Los Angeles">University of California, Los Angeles</Select.Option>
            <Select.Option value="National University of Singapore">National University of Singapore</Select.Option>
            <Select.Option value="Cornell University">Cornell University</Select.Option>
            <Select.Option value="University of Toronto">University of Toronto</Select.Option>
            <Select.Option value="UCL">UCL</Select.Option>
            <Select.Option value="University of Michigan-Ann Arbor">University of Michigan-Ann Arbor</Select.Option>
            <Select.Option value="Carnegie Mellon University">Carnegie Mellon University</Select.Option>
            <Select.Option value="University of Washington">University of Washington</Select.Option>
            <Select.Option value="Duke University">Duke University</Select.Option>
            <Select.Option value="New York University">New York University</Select.Option>
            <Select.Option value="Northwestern University">Northwestern University</Select.Option>
            <Select.Option value="The University of Tokyo">The University of Tokyo</Select.Option>
            <Select.Option value="University of Edinburgh">University of Edinburgh</Select.Option>
            <Select.Option value="Technical University of Munich">Technical University of Munich</Select.Option>
            <Select.Option value="Nanyang Technological University, Singapore">Nanyang Technological University, Singapore</Select.Option>
            <Select.Option value="École Polytechnique Fédérale de Lausanne">École Polytechnique Fédérale de Lausanne</Select.Option>
            <Select.Option value="University of California, San Diego">University of California, San Diego</Select.Option>
            <Select.Option value="University of Hong Kong">University of Hong Kong</Select.Option>
            <Select.Option value="Georgia Institute of Technology">Georgia Institute of Technology</Select.Option>
            <Select.Option value="University of Melbourne">University of Melbourne</Select.Option>
            <Select.Option value="King’s College London">King’s College London</Select.Option>
            <Select.Option value="LMU Munich">LMU Munich</Select.Option>
            <Select.Option value="Paris Sciences et Lettres – PSL Research University Paris">Paris Sciences et Lettres – PSL Research University Paris</Select.Option>
            <Select.Option value="University of British Columbia">University of British Columbia</Select.Option>
            <Select.Option value="University of Illinois at Urbana-Champaign">University of Illinois at Urbana-Champaign</Select.Option>
            <Select.Option value="Shanghai Jiao Tong University">Shanghai Jiao Tong University</Select.Option>
            <Select.Option value="Fudan University">Fudan University</Select.Option>
            <Select.Option value="KU Leuven">KU Leuven</Select.Option>
            <Select.Option value="London School of Economics and Political Science">London School of Economics and Political Science</Select.Option>
            <Select.Option value="University of Heidelberg">University of Heidelberg</Select.Option>
            <Select.Option value="Delft University of Technology">Delft University of Technology</Select.Option>
            <Select.Option value="McGill University">McGill University</Select.Option>
            <Select.Option value="Karolinska Institute">Karolinska Institute</Select.Option>
            <Select.Option value="University of Manchester">University of Manchester</Select.Option>
            <Select.Option value="University of Texas at Austin">University of Texas at Austin</Select.Option>
            <Select.Option value="Chinese University of Hong Kong">Chinese University of Hong Kong</Select.Option>
            <Select.Option value="Monash University">Monash University</Select.Option>
            <Select.Option value="Kyoto University">Kyoto University</Select.Option>
            <Select.Option value="Zhejiang University">Zhejiang University</Select.Option>
            <Select.Option value="University of Science and Technology of China">University of Science and Technology of China</Select.Option>
            <Select.Option value="University Paris-Saclay">University Paris-Saclay</Select.Option>
            <Select.Option value="University of California, Davis">University of California, Davis</Select.Option>
            <Select.Option value="The University of Sydney">The University of Sydney</Select.Option>
            <Select.Option value="University of Amsterdam">University of Amsterdam</Select.Option>
            <Select.Option value="Seoul National University">Seoul National University</Select.Option>
            <Select.Option value="University of Wisconsin-Madison">University of Wisconsin-Madison</Select.Option>
            <Select.Option value="Brown University">Brown University</Select.Option>
            <Select.Option value="The Hong Kong University of Science and Technology">The Hong Kong University of Science and Technology</Select.Option>
            <Select.Option value="Wageningen University & Research">Wageningen University & Research</Select.Option>
            <Select.Option value="Australian National University">Australian National University</Select.Option>
            <Select.Option value="Washington University in St. Louis">Washington University in St. Louis</Select.Option>
            <Select.Option value="University of California, Santa Barbara">University of California, Santa Barbara</Select.Option>
            <Select.Option value="The University of Queensland">The University of Queensland</Select.Option>
            <Select.Option value="Institut Polytechnique de Paris">Institut Polytechnique de Paris</Select.Option>
            <Select.Option value="University of North Carolina at Chapel Hill">University of North Carolina at Chapel Hill</Select.Option>
            <Select.Option value="Nanjing University">Nanjing University</Select.Option>
            <Select.Option value="University of Southern California">University of Southern California</Select.Option>
            <Select.Option value="Sorbonne University">Sorbonne University</Select.Option>
            <Select.Option value="Yonsei University (Seoul campus)">Yonsei University (Seoul campus)</Select.Option>
            <Select.Option value="Leiden University">Leiden University</Select.Option>
            <Select.Option value="Boston University">Boston University</Select.Option>
            <Select.Option value="University of Groningen">University of Groningen</Select.Option>
            <Select.Option value="University of Zurich">University of Zurich</Select.Option>
            <Select.Option value="University of Bristol">University of Bristol</Select.Option>
            <Select.Option value="City University of Hong Kong">City University of Hong Kong</Select.Option>
            <Select.Option value="Korea Advanced Institute of Science and Technology (KAIST)">Korea Advanced Institute of Science and Technology (KAIST)</Select.Option>
            <Select.Option value="UNSW Sydney">UNSW Sydney</Select.Option>
            <Select.Option value="University of Minnesota">University of Minnesota</Select.Option>
            <Select.Option value="Purdue University West Lafayette">Purdue University West Lafayette</Select.Option>
            <Select.Option value="University of Glasgow">University of Glasgow</Select.Option>
            <Select.Option value="Hong Kong Polytechnic University">Hong Kong Polytechnic University</Select.Option>
            <Select.Option value="Humboldt University of Berlin">Humboldt University of Berlin</Select.Option>
            <Select.Option value="RWTH Aachen University">RWTH Aachen University</Select.Option>
            <Select.Option value="University of Bonn">University of Bonn</Select.Option>
            <Select.Option value="University of California, Irvine">University of California, Irvine</Select.Option>
            <Select.Option value="Vanderbilt University">Vanderbilt University</Select.Option>
            <Select.Option value="Charité - Universitätsmedizin Berlin">Charité - Universitätsmedizin Berlin</Select.Option>
            <Select.Option value="Lomonosov Moscow State University">Lomonosov Moscow State University</Select.Option>
            <Select.Option value="University of Tübingen">University of Tübingen</Select.Option>
            <Select.Option value="KTH Royal Institute of Technology">KTH Royal Institute of Technology</Select.Option>
            <Select.Option value="University of Southampton">University of Southampton</Select.Option>
            <Select.Option value="Erasmus University Rotterdam">Erasmus University Rotterdam</Select.Option>
            <Select.Option value="Ohio State University (Main campus)">Ohio State University (Main campus)</Select.Option>
            <Select.Option value="University of Birmingham">University of Birmingham</Select.Option>
            <Select.Option value="Free University of Berlin">Free University of Berlin</Select.Option>
            <Select.Option value="University of Copenhagen">University of Copenhagen</Select.Option>
            <Select.Option value="McMaster University">McMaster University</Select.Option>
            <Select.Option value="University of Sheffield">University of Sheffield</Select.Option>
            <Select.Option value="Emory University">Emory University</Select.Option>
            <Select.Option value="Lund University">Lund University</Select.Option>
            <Select.Option value="University of Warwick">University of Warwick</Select.Option>
            <Select.Option value="Aarhus University">Aarhus University</Select.Option>
            <Select.Option value="University of Alberta">University of Alberta</Select.Option>
            <Select.Option value="University of Adelaide">University of Adelaide</Select.Option>
            <Select.Option value="University of Göttingen">University of Göttingen</Select.Option>
            <Select.Option value="University de Montréal">University de Montréal</Select.Option>
            <Select.Option value="University of Maryland, College Park">University of Maryland, College Park</Select.Option>
            <Select.Option value="Ghent University">Ghent University</Select.Option>
            <Select.Option value="University of Bern">University of Bern</Select.Option>
            <Select.Option value="Michigan State University">Michigan State University</Select.Option>
            <Select.Option value="Texas A&M University">Texas A&M University</Select.Option>
            <Select.Option value="Rice University">Rice University</Select.Option>
            <Select.Option value="University of Vienna">University of Vienna</Select.Option>
            <Select.Option value="University of Helsinki">University of Helsinki</Select.Option>
            <Select.Option value="Penn State (Main campus)">Penn State (Main campus)</Select.Option>
            <Select.Option value="University of Basel">University of Basel</Select.Option>
            <Select.Option value="University of Massachusetts">University of Massachusetts</Select.Option>
            <Select.Option value="Vrije Universiteit Amsterdam">Vrije Universiteit Amsterdam</Select.Option>
            <Select.Option value="Technical University of Denmark">Technical University of Denmark</Select.Option>
            <Select.Option value="University of Oslo">University of Oslo</Select.Option>
            <Select.Option value="University of Freiburg">University of Freiburg</Select.Option>
            <Select.Option value="University of Leeds">University of Leeds</Select.Option>
            <Select.Option value="University of Nottingham">University of Nottingham</Select.Option>
            <Select.Option value="Tohoku University">Tohoku University</Select.Option>
            <Select.Option value="University of Florida">University of Florida</Select.Option>
            <Select.Option value="University of Rochester">University of Rochester</Select.Option>
            <Select.Option value="Trinity College Dublin">Trinity College Dublin</Select.Option>
            <Select.Option value="Queen Mary University of London">Queen Mary University of London</Select.Option>
            <Select.Option value="University of Hamburg">University of Hamburg</Select.Option>
            <Select.Option value="Technical University of Berlin">Technical University of Berlin</Select.Option>
            <Select.Option value="University of Colorado Boulder">University of Colorado Boulder</Select.Option>
            <Select.Option value="Maastricht University">Maastricht University</Select.Option>
            <Select.Option value="Karlsruhe Institute of Technology">Karlsruhe Institute of Technology</Select.Option>
            <Select.Option value="Radboud University Nijmegen">Radboud University Nijmegen</Select.Option>
            <Select.Option value="Uppsala University">Uppsala University</Select.Option>
            <Select.Option value="University of Lausanne">University of Lausanne</Select.Option>
            <Select.Option value="The University of Western Australia">The University of Western Australia</Select.Option>
            <Select.Option value="University of Pittsburgh-Pittsburgh campus">University of Pittsburgh-Pittsburgh campus</Select.Option>
            <Select.Option value="Sungkyunkwan University (SKKU)">Sungkyunkwan University (SKKU)</Select.Option>
            <Select.Option value="University of York">University of York</Select.Option>
            <Select.Option value="University of Technology Sydney">University of Technology Sydney</Select.Option>
            <Select.Option value="Pohang University of Science and Technology (POSTECH)">Pohang University of Science and Technology (POSTECH)</Select.Option>
            <Select.Option value="University of Auckland">University of Auckland</Select.Option>
            <Select.Option value="Sichuan University">Sichuan University</Select.Option>
            <Select.Option value="University of Barcelona">University of Barcelona</Select.Option>
            <Select.Option value="National Taiwan University (NTU)">National Taiwan University (NTU)</Select.Option>
            <Select.Option value="University Paris Cité">University Paris Cité</Select.Option>
            <Select.Option value="University of Arizona">University of Arizona</Select.Option>
            <Select.Option value="University of Bologna">University of Bologna</Select.Option>
            <Select.Option value="Lancaster University">Lancaster University</Select.Option>
            <Select.Option value="Huazhong University of Science and Technology">Huazhong University of Science and Technology</Select.Option>
            <Select.Option value="University of Waterloo">University of Waterloo</Select.Option>
            <Select.Option value="University of Cologne">University of Cologne</Select.Option>
            <Select.Option value="University of Antwerp">University of Antwerp</Select.Option>
            <Select.Option value="Dartmouth College">Dartmouth College</Select.Option>
            <Select.Option value="TU Dresden">TU Dresden</Select.Option>
            <Select.Option value="Case Western Reserve University">Case Western Reserve University</Select.Option>
            <Select.Option value="Wuhan University">Wuhan University</Select.Option>
            <Select.Option value="University of Virginia (Main campus)">University of Virginia (Main campus)</Select.Option>
            <Select.Option value="University of Cape Town">University of Cape Town</Select.Option>
            <Select.Option value="University Catholique de Louvain">University Catholique de Louvain</Select.Option>
            <Select.Option value="Eindhoven University of Technology">Eindhoven University of Technology</Select.Option>
            <Select.Option value="Harbin Institute of Technology">Harbin Institute of Technology</Select.Option>
            <Select.Option value="University of Liverpool">University of Liverpool</Select.Option>
            <Select.Option value="Newcastle University">Newcastle University</Select.Option>
            <Select.Option value="Scuola Normale Superiore di Pisa">Scuola Normale Superiore di Pisa</Select.Option>
            <Select.Option value="Durham University">Durham University</Select.Option>
            <Select.Option value="Osaka University">Osaka University</Select.Option>
            <Select.Option value="University of Würzburg">University of Würzburg</Select.Option>
            <Select.Option value="Beijing Normal University">Beijing Normal University</Select.Option>
            <Select.Option value="University of Exeter">University of Exeter</Select.Option>
            <Select.Option value="University of Ottawa">University of Ottawa</Select.Option>
            <Select.Option value="Macquarie University">Macquarie University</Select.Option>
            <Select.Option value="Sapienza University of Rome">Sapienza University of Rome</Select.Option>
            <Select.Option value="Arizona State University (Tempe)">Arizona State University (Tempe)</Select.Option>
            <Select.Option value="University of Geneva">University of Geneva</Select.Option>
            <Select.Option value="University of Twente">University of Twente</Select.Option>
            <Select.Option value="Stockholm University">Stockholm University</Select.Option>
            <Select.Option value="Tongji University">Tongji University</Select.Option>
            <Select.Option value="Georgetown University">Georgetown University</Select.Option>
            <Select.Option value="University of Mannheim">University of Mannheim</Select.Option>
            <Select.Option value="Chalmers University of Technology">Chalmers University of Technology</Select.Option>
            <Select.Option value="Cardiff University">Cardiff University</Select.Option>
            <Select.Option value="Tokyo Institute of Technology">Tokyo Institute of Technology</Select.Option>
            <Select.Option value="Tufts University">Tufts University</Select.Option>
            <Select.Option value="University of Erlangen-Nuremberg">University of Erlangen-Nuremberg</Select.Option>
            <Select.Option value="University of Macau">University of Macau</Select.Option>
            <Select.Option value="University of Münster">University of Münster</Select.Option>
            <Select.Option value="University of St Andrews">University of St Andrews</Select.Option>
            <Select.Option value="Ulm University">Ulm University</Select.Option>
            <Select.Option value="Indiana University">Indiana University</Select.Option>
            <Select.Option value="University of Notre Dame">University of Notre Dame</Select.Option>
            <Select.Option value="Queensland University of Technology">Queensland University of Technology</Select.Option>
            <Select.Option value="Ulsan National Institute of Science and Technology (UNIST)">Ulsan National Institute of Science and Technology (UNIST)</Select.Option>
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
