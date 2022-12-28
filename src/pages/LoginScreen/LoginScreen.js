import React from 'react'
import './LoginScreen.css'

function LoginScreen() {
  return (
    <div className='login__screen'>
        <div className='login__background'>
            <img  className='login__logo'
            src='netflix-logo.png' alt='login screen background image' />
       
        <button className='login__button'>
            Sign In
        </button>
        <div className='login__gradient'/>
        </div>
        <div className='login__contents'>

        </div>
    </div>
  )
}

export default LoginScreen;