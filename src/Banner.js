import React from 'react'
import './Banner.css'

function Banner() {
  const truncate = (string, n) => {
        return string.length > n ? string.substring(0,n-1) + '...' : string;
  }

  return (
    <header className='banner' style={{
        backgroundImage: `url("netflix-banner.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
    }}>
    <div className='banner__contents '>
        <h1 className='banner__title'>Banner title</h1>
        <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__desc'>
           {truncate(`This is the description
            This is the description
            This is the description
            This is the descriptionThis is the description
            This is the description
            This is the description
            This is the descriptionThis is the description
            This is the description`,150)} 

        </h1>
    </div>
    <div className='banner__fadeBottom'/>
    </header>
  )
}

export default Banner;