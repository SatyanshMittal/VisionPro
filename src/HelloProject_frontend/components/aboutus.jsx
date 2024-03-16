import React from 'react'
import aboutImg from '../public/img/aboutImg.png'
export default function aboutus() {
  return (
    <div className='aboutUs-page'>
        <img className='aboutImg' src={aboutImg} alt="" />
        <p className='about-txt'>About Us</p>
        <p>Imaging accesing all the technology with just 
            device you own no need to buy those all those 
            expensive
        </p>
    </div>
  )
}
