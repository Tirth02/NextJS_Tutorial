import Link from 'next/link';
import React from 'react'
import '../clientcomponents/createuser/style.css'
import DeleteUser from '../clientcomponents/DeleteUser';
export const fetchData = async() =>{
    let data = await fetch("http://localhost:3000/api/users");
    data = await data.json();
    return data;
}
const UserList = async() => {
    const usersData = await fetchData();
    console.log(usersData);
    
    return (
    <div>
      {usersData.map((item) => (
        <div className='user-item'>

          <span><Link href={`webusers/${item.id}`}>{item.name}</Link></span>
        <span><Link href={`webusers/${item.id}/update`}>Edit</Link></span>
        <DeleteUser id={item.id}/>
        </div>
      ))}
      <br/>

    </div>
  )
}

export default UserList
