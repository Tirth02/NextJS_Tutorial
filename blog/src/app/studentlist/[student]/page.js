"use client";
import React from 'react'
const Student = ({params}) => {
    //console.log(React.use(params));
    const {student} = React.use(params);
  return (
    <div>
      <h1>Student Details</h1>
      <h3>Name : {student}</h3>
    </div>
  )
}

export default Student
