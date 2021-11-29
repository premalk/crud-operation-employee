import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

let dataArray = [];

const AddEmployee = ({ callBack }) => {
    const [startDate, setStartDate] = React.useState(new Date());

    const handleSubmit = () => {
        const valueObject = {
            fName: document.getElementById('fName').value,
            lName: document.getElementById('lName').value,
            dob: startDate,
            designation: document.getElementById('designation').value,
            experience: document.getElementById('experience').value,
        };
        callBack(valueObject);
        dataArray.push(valueObject);
        //console.log('dataArray', dataArray);
    }

    return (
        <table border="1">
                <tbody>
                    <tr>
                        <td> First name: </td>
                        <td><input type="text" id="fName" /></td>
                    </tr>
                    <tr>
                        <td>Last name: </td>
                        <td><input type="text" id="lName" /></td>
                    </tr>
                    <tr>
                        <td>DOB: </td>
                        <td><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></td>
                    </tr>
                    <tr>
                        <td>Designation:  </td>
                        <td><input type="text" id="designation" /></td>
                    </tr>
                    <tr>
                        <td>Profile photo Link:  </td>
                        <td><input type="file" id="photo" /></td>
                    </tr>
                    <tr>
                        <td>Experience:  </td>
                        <td><input type="text" id="experience" /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={{textAlign: 'center'}}><button onClick={()=> {handleSubmit()}}>Add</button></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
    )
};

export default AddEmployee;