"use client"
import React, { useState } from 'react'
import "./style.css"
const CreateUserComponent = () => {

    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");

    const addUser = async() =>{
      let response = await fetch("http://localhost:3000/api/users",{
        method:"Post",
        body: JSON.stringify({name,age,email})
      });
      response = await response.json();
      if(response.success)
      {
        alert("New User Added");
      }
      else
      {
        alert("Some error with data please check and try again");
      }
    }
  return (
    <div className='add-user'>
      <h1>Add New User</h1>
      <input type='text' placeholder='Enter name' value={name} className='input-field' onChange={(e) =>setName(e.target.value)}/>
      <input type='text' placeholder='Enter Age' value={age} className='input-field' onChange={(e) =>setAge(e.target.value)}/>
      <input type='text' placeholder='Enter Email' value={email} className='input-field' onChange={(e) =>setEmail(e.target.value)}/>
      <button className='btn' onClick={addUser}>Add User</button>
    </div>
  )
}

export default CreateUserComponent
