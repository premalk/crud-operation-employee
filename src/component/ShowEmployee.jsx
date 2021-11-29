import React from 'react';

const ShowEmployee = ({ data }) => {
    return (
        <table border="1">
            <tbody>
                {
                    data && data.map((obj, index) => {
                        return (
                            <tr key={index}>
                                <td>{obj.fName}</td>
                                <td>{obj.lName}</td>
                                <td>{obj.dob.toString()}</td>
                                <td>{obj.designation}</td>
                                <td>{obj.experience}</td>
                                
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default ShowEmployee;
