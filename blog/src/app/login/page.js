"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
    const router = useRouter();

  return (
    <div>
      <br/>
      <button onClick={() => router.push("/")}>Back to Home</button>
      <br/>
      <h1>Login Page</h1>
    </div>
  )
}

export default Login
