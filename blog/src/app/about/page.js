"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const About = () => {
    const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/")}>Back to Home</button>
      <h1>About Page</h1>
    </div>
  )
}

export default About
