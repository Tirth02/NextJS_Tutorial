import Link from 'next/link'
import React from 'react'
import './login.css'
const Layout = ({children}) => {
  return (
    <div>
      <ul className="login-menu">
        <li>
          <h4>Login Navbar</h4>
        </li>
        <li>
            <Link href="/login">Login Main</Link>
        </li>
        <li>
            <Link href="/login/studentlogin">Student Login</Link>
        </li>
        <li>
            <Link href="/login/teacherlogin">Teacher Login</Link>
        </li>
      </ul>
      {
        children
      }
    </div>
  )
}

export default Layout
