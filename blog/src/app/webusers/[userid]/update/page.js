"use client"
import { useEffect, useState } from 'react'
import "../../../clientcomponents/createuser/style.css"
const UpdateUser = ({params}) => {

    let id = params.userid;
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");

    useEffect(() =>{
        getUserDetails();
    },[]);

    const getUserDetails = async() =>{
        let data = await fetch(`http://localhost:3000/api/users/${id}`);
        data = await data.json();
        setName(data.result.name);
        setAge(data.result.age);
        setEmail(data.result.email);        
    }

    const updateUser = async() =>{
        let result = await fetch("http://localhost:3000/api/users/"+id,{
            method:"PUT",
            body:JSON.stringify({name,age,email})
        });
        result = await result.json();
        console.log(result);
        if(result.success)
        {
            alert("user information updated");
        }
        else
        {
            alert("Please try with valid input");
        }
    }
  return (
    <div>
      <h1>Add New User</h1>
      <input type='text' placeholder='Enter name' value={name} className='input-field' onChange={(e) =>setName(e.target.value)}/>
      <input type='text' placeholder='Enter Age' value={age} className='input-field' onChange={(e) =>setAge(e.target.value)}/>
      <input type='text' placeholder='Enter Email' value={email} className='input-field' onChange={(e) =>setEmail(e.target.value)}/>
      <button className='btn' onClick={updateUser}>Add User</button>
    </div>
  )
}

export default UpdateUser
