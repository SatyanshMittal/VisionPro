import React from 'react'
import Mainpage from '../components/mainpage'
import AboutUs from '../components/aboutus'
import Features from '../components/features'

export default function App() {
  return (
    <div className='app'>
      <div>
        <Mainpage/>
       
        <AboutUs/> <Features/>
      </div>
    </div>
  )
}
