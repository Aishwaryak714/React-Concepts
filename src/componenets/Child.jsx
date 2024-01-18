import React, { useState } from 'react';
import '../styles/Child.css'

function Child({ handleData, data, setData }) {

    const [formdata, setFormdata] = useState({
        fname: "", lname: "", email: "", phone: ""
    })
    const [serchValue, setSearchValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formData", formdata);
        handleData([...data, formdata]);
        setFormdata({ fname: "", lname: "", email: "", phone: "" })
    }

    const filteredList = data.filter((emp) => emp.fname && emp.fname.toLowerCase().includes(serchValue.toLowerCase()));

    const handleDelete = (email) => {
        const updatedList = data.filter((emp) => emp.email !== email);
        // function to update the parent state with the updated list
        setData(updatedList);
        
    };


    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input name='fname' placeholder='Enter FName Here' value={formdata.fname} onChange={(e) => setFormdata({ ...formdata, fname: e.target.value })} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input name='lname' placeholder='Enter LName Here' value={formdata.lname} onChange={(e) => setFormdata({ ...formdata, lname: e.target.value })} />
                </div>
                <div>
                    <label>Email:</label>
                    <input name='email' placeholder='Enter email Here' value={formdata.email} onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} />
                </div>
                <div>
                    <label>Phone:</label>
                    <input name='phone' placeholder='Enter mobile no Here' value={formdata.phone} onChange={(e) => setFormdata({ ...formdata, phone: e.target.value })} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>


            <input name="searchValue"
                placeholder="Enter search value"
                value={serchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />

            <table>
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredList && filteredList.map((ele) => (
                            <tr key={ele.email}>
                                <td>{ele.fname}</td>
                                <td>{ele.lname}</td>
                                <td>{ele.email}</td>
                                <td>{ele.phone}</td>
                                <td>
                                    <button onClick={()=>handleDelete(ele.email)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>



        </div>
    )
}

export default Child