import { useState } from 'react'
import './App.css'
function Crud() {
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState({
        Name: '',
        Age: '',
        Salary: '',
        Email: '',
        ContactNumber: ''
    })

    const [editingIndex, setEditingIndex] = useState(-1);
    const addData = () => {
        setData([...data, newData]);
        setNewData({
            Name: '',
            Age: '',
            Salary: '',
            Email: '',
            ContactNumber: ''
        })
    };
    const deleteData = (index) => {
        const updateData = data.filter((_, i) => i !== index);
        setData(updateData);
    };
    const editData = (index) => {
        setEditingIndex(index);
        setNewData(data[index]);
    };
    const updateData = () => {
        const updatedData = [...data];
        updatedData[editingIndex] = newData;
        setData(updatedData);
        setNewData({
            Name: '',
            Age: '',
            Salary: '',
            Email: '',
            ContactNumber: ''
        });
        setEditingIndex(-1);
    };
    return (
        <>
            <div className='crud'>
                <div className="inputs">
                    <h2>Information Form</h2>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" type="text" id="name" placeholder="Ur Name" value={newData.name} onChange={(e) => setNewData({ ...newData, name: e.target.value })} />
                        <label>Age</label>
                        <input className="form-control" type="number" id="age" placeholder="Ur Age" value={newData.Age} onChange={(e) => setNewData({ ...newData, Age: e.target.value })} />
                        <label>Salary</label>
                        <input className="form-control" type="text" id="salary" placeholder="Ur Salary" value={newData.salary} onChange={(e) => setNewData({ ...newData, salary: e.target.value })} />
                        <label>Email</label>
                        <input className="form-control" type="email" id="email" placeholder="Ur Email" value={newData.email} onChange={(e) => setNewData({ ...newData, email: e.target.value })} />
                        <label>Contact Number</label>
                        <input className="form-control" type="number" id="number" placeholder="Ur Number" value={newData.ContactNumber} onChange={(e) => setNewData({ ...newData, ContactNumber: e.target.value })} />
                        {editingIndex === -1 ? (
                            <button onClick={addData} id="submit">Add</button>
                        ) :
                            (
                                <button id='updata' onClick={updateData}>Update</button>
                            )}
                    </div>
                </div>


                <div className="outputs">
                    <h2>Information Table</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Salary</th>
                                <th>Email</th>
                                <th>Contact Number</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            {data.map((data, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.address}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.email}</td>
                                    <td>{data.job}</td>
                                    <td>{data.salary}</td>
                                    <td>
                                        <button className="Edit" onClick={() => editData(index)}>Edit</button>
                                    </td>
                                    <td>
                                        <button className="delete" onClick={() => deleteData(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}


export default Crud;