"use client"
import React from 'react'

const DeleteUser = (props) => {
    const userId = props.id;

    const deleteuser = async() =>{
        let result = await fetch("http://localhost:3000/api/users/"+userId,{
            method:"DELETE"
        });
        result = await result.json();
        if(result.success)
        {
            alert("User is deleted");
        }
    }
    return (
    <button onClick={deleteuser}>Delete</button>
  )
}

export default DeleteUser
