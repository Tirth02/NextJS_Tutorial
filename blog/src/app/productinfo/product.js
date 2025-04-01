"use client"
import React from 'react'
const ProductButton = ({price}) => {
  return (
    <div>
      <button onClick={() => alert(price+" $")}>Check Price</button>
    </div>
  )
}

export default ProductButton
