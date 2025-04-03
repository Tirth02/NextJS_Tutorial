import React from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight:"100",
    subsets:['latin'],
    display: 'swap'
})
const NextFont = () => {
  return (
    <div>
      {/* Font Optimization helps in preventing unecessary call to google fonts ie reduce network request and also security is maintained */}
      <h1 className={roboto.className}>Font Optimization in Next</h1>
    </div>
  )
}

export const generateMetadata = () =>{
    return{
      title: "Items page Title",
      description: "Mobile Phones, Iphone 16 pro max, LED, Bulb"
    }
  }

export default NextFont
