import React,{useState} from 'react'
import './LoginScreen.css'
import SigninScreen from '../SigninScreen/SigninScreen'

function LoginScreen() {
    const [signin, setSignin] = useState(false);
  return (
    <div className='login__screen'>
        <div className='login__background'>
            <img  className='login__logo'
            src='netflix-logo.png' alt='login screen background' />
            <button className='btn login__button' onClick={() => setSignin(true)}>
                Sign In
            </button>
            <div className='login__gradient'/>
        </div>
        {signin ? <SigninScreen/> : (
            <div className='login__contents'>
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className='login__input'>
                    <form>
                        <input type="email" placeholder="Email Address" />
                        <button className='btn login_startbtn' onClick={() => setSignin(true)}>Get Started</button>
                    </form>
                </div>
            </div>
        )}        
    </div>
  )
}

export default LoginScreen;