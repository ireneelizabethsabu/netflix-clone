import React from 'react'
import Banner from '../Banner/Banner'
import './HomeScreen.css'
import Nav from '../Nav/Nav'
import Row from '../Row/Row'
import requests from '../../Requests'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>  
        <Banner/>
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>
          <Row title="Only On Netflix" fetchUrl={requests.fetchNetflixOriginals}/>
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
          <Row title="Action & Adventure" fetchUrl={requests.fetchActionMovies}/>
          <Row title="Comedies" fetchUrl={requests.fetchComedyMovies}/>
          <Row title="Sci-Fi & Horror" fetchUrl={requests.fetchHorrorMovies}/>
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen