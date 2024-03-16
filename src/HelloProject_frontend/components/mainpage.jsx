import React from 'react'
import MainImg from '../public/img/mainImg.png'
import { MdOutlineArrowOutward } from "react-icons/md";
export default function mainpage() {
  return (
    <div className='main'>
    <p className='headline'>Archer's </p>
    <p className='headline vision'>vision Pro</p>

    <p className='vision-text'>Step into the Boundless Realm of Virtual Reality!</p>
    <img className='mainImg' src={MainImg} alt="" />
    <div className='btncontainer'>
    <div className='btn-try'>Try now!</div>
    <p className='learnmore'>learn more</p></div>
    </div>
  )
}
