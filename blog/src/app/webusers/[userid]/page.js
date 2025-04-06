import React from 'react'

const fetchUserData = async(id) =>{
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data.result;
} 
const WebUserDetails = async({params}) => {

    const userData = await fetchUserData(params.userid);
    
    
  return (
    <div>
      <h1>User Details</h1>
      <h4>Name: {userData.name}</h4>
      <h4>Age: {userData.age}</h4>
      <h4>Email: {userData.email}</h4>
    </div>
  )
}

export default WebUserDetails
