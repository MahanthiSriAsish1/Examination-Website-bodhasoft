import React from 'react'
import { PiSmileySadBold } from "react-icons/pi";


const ErrorPage = () => {
  return (
    <div className='Error-wrapper'>
      <PiSmileySadBold /> 
      <h2>404</h2>
      <p>resource requested cannot be found on this server</p>
    </div>
  )
}

export default ErrorPage