"use client"
import custom from '../custom.module.css';
import React, { useState } from 'react'

const Study = () => {
  const [color,setColor] = useState("red");
  const {red} = custom;
  return (
    <div>
      <h1>All Lectures of College</h1>
      <h1 className={color=='red'?custom.red:custom.green}>Condition with style</h1>
      <h2 id={custom.purple}>Heading 2</h2>

      <h3 className={red}>Dummy text</h3>
    </div>
  )
}

export default Study
