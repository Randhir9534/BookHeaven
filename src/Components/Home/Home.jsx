import React from 'react'
import Banners from '../../layout/Banner/Banner'
import Categories from './Categories'
import Footer from '../../layout/Footer/Footer'
import About from '../About/About'

const Home = () => {
  return (
    <div>
        <Banners/>
        <Categories/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home