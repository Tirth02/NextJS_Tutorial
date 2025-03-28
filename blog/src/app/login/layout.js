"use client"
import Link from 'next/link'
import React from 'react'
import './login.css'
import { usePathname } from 'next/navigation'
const Layout = ({children}) => {
  const pathName = usePathname();
  return (
    <div>
    {
      pathName !== "/login/teacherlogin"?
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
      :<Link href="/login">Go to Main Login Page</Link>
      }
      {
        children
      }
    </div>
  )
}

export default Layout
