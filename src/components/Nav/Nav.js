import React,{useState,useEffect} from 'react'
import './Nav.css'

function Nav() {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if(window.scrollY > 100){
        setShow(true);
    }else{
        setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll",transitionNavbar);
    return () => {
      window.removeEventListener("scroll",transitionNavbar);
    }
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>
            <img className='nav__logo' src='netflix-logo.png' alt='netflix logo' />
            <img className='nav__avatar' src='netflix-avatar.png' alt='netflix avatar' />
        </div>
        
    </div>
  )
}

export default Nav