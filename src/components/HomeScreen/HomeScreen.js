import React from 'react'
import Banner from '../Banner/Banner'
import './HomeScreen.css'
import Nav from '../Nav/Nav'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>  
        <Banner/>
    </div>
  )
}

export default HomeScreen