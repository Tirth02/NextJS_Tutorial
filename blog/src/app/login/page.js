"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
    const router = useRouter();
    const navigate = (page) =>{
        router.push(`/login/${page}`)
    }

  return (
    <div>
      <br/>
      <button onClick={() => router.push("/")}>Back to Home</button>
      <br/>
      <h1>Login Page</h1>
      <br/>
      <br/>
      <button onClick={() => navigate("studentlogin")}>Login For student</button>
      <br/>
      <br/>
      <button onClick={() => navigate("teacherlogin")}>Login For Teacher</button>
    </div>
  )
}

export default Login
