import Link from 'next/link'
import React from 'react'

const StudentList = () => {
    // Task of this lecture.
    const students = ["Abhi","Het","Yash","Saumya"];
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {/* <li>
            <Link href="/studentlist/Abhi">Abhi</Link>
        </li>
        <li>
            <Link href="/studentlist/Yash">Yash</Link>
        </li>
        <li>
            <Link href="/studentlist/Het">Het</Link>
        </li>
        <li>
            <Link href="/studentlist/Saumya">Saumya</Link>
        </li> */}
        {students.map((item,index) => 
            <li key={index}>
                <Link href={`/studentlist/${item}`} >{item}</Link>
            </li>
        )  
        }
      </ul>
    </div>
  )
}

export default StudentList
