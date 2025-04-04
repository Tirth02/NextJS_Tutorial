import { API_BASE_URL } from '@/config/constants';
import React from 'react'

const EnvironmentVariable = () => {
    console.log(process.env.CUSTOM_MODE);
    
  return (
    <div>
        {
            process.env.NODE_ENV == "development" ? 
                <h1>You are on development mode</h1>
                :<h1>You are on production mode</h1>
        }

        <h1> Environment Variable in Next JS</h1>

        <h1>{API_BASE_URL}</h1>
    </div>
  )
}

export default EnvironmentVariable
