import React from 'react'
import { useSelector } from 'react-redux';
import {selectUser} from '../../features/user/userSelector';
import './ProfileScreen.css'
import {auth, signOut} from '../../firebase'

function ProfileScreen() {
    const user = useSelector(selectUser);
  return (
    <div className='profile__screen'>
        <div className='profile__body'>
        <h1 className='profile__h1'>Edit Profile</h1>
        <hr/>
        <div className='profile__section'>
            <img className='profile__avatar' src='netflix-avatar.png' alt='netflix avatar' />
            <div className='profile__info'>
                <h2 >{user.email}</h2>
                <h3>Plans</h3> 
                <hr/>
                <button className='btn' onClick={() => signOut(auth)}>Sign Out</button> 
            </div>
        </div>
        <hr/>
        
        </div>
    </div>
  )
}

export default ProfileScreen;