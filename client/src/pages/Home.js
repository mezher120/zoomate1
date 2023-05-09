import React from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import './Home.css'

function Home() {
  return (
    <div>
    <Header></Header>
    <br></br>
    <div className='HomeCardsContainer'>
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    </div>
    <div className='homeFooterPosition'>
    <Footer ></Footer>
    </div>
    </div>
  )
}

export default Home