import React, { useEffect, useState } from 'react';
import Home from './Home';

function Users() {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/users")
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data);
            setUsers(data)
        })
        .catch((err)=>{
            console.log("error",err)
        })
    },[])
  return (
    <>
    <div>
        <h1>Users List</h1>
        <h4>Fetching data from dummy Json using fetch method</h4>
        <table>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
            {
            users && users.map((user)=>
                <tr key={user.id}>
                    <td>{user.address.city}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.name.firstname}</td>
                    <td>{user.name.lastname}</td>
                </tr>
)
        }
            </tbody>
        </table>
        <br/>
    </div>
    </>
  )
}

export default Users