import React,{useRef} from 'react'
import './SigninScreen.css'
import { auth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from '../../firebase'

function SigninScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((user) => {
      console.log(user);
    }).catch(error => {
      const errorMsg = error.message;
      alert(errorMsg);
    });
    console.log(emailRef.current.value);
  }

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailRef.current.value,
      passwordRef.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    //const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
  }

  return (
    <div className='signin__screen'>
        <h1 className='signin__heading'>Sign In</h1>
        <form className='signin__form'>
            <input ref={emailRef} type="text" placeholder="Email"/>
            <input ref={passwordRef}  type="password" placeholder="Password"/>
            <button className='btn signin__btn' type="submit" onClick={signIn}>Sign In</button>
           <h4><span className='signin__gray'>New to Netflix? </span><span className='sigin__link' onClick={register}>Sign up now </span></h4>
        </form>
    </div>
  )
}

export default SigninScreen;