import Link from 'next/link';
import React from 'react'

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
        <div>
        <Link href={`webusers/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default UserList
