import React from 'react'

const userList = async() =>{
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users;
}
const UsersPage = async() => {
  
    let users = await userList();
    console.log(users);
    
    return (
    <div>
      <h1>User Name List</h1>
      {
        users.map((item) =>(
            <div><h2>User Name: {item.firstName}</h2></div>
        ))
      }
    </div>
  )
}

export default UsersPage
