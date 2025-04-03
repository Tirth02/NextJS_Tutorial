import Script from 'next/script'
import React from 'react'

const ScriptComponent = () => {
  return (
    <div>
        <Script src='/location.js'/>
      <h1>Get User getLocation</h1>
    </div>
  )
}

export default ScriptComponent
