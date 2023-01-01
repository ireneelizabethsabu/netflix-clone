import React from 'react'
import './SigninScreen.css'

function SigninScreen() {

  const register = (e) => {
    e.preventDefault();
  }
  const signIn = (e) => {
    e.preventDefault();
  }

  return (
    <div className='signin__screen'>
        <h1 className='signin__heading'>Sign In</h1>
        <form className='signin__form'>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button className='btn signin__btn' type="submit" onClick={signIn}>Sign In</button>
           <h4><span className='signin__gray'>New to Netflix? </span><a onClick={register}><span>Sign up now </span></a></h4>
        </form>
    </div>
  )
}

export default SigninScreen;