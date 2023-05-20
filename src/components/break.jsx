import React from 'react'
import photo2 from './photo2.jpg'
import photo3 from './photo3.jpg'

export default function Break() {
  return (
    <div className='break'><div className='photoflex'> <img src={photo2} alt="photo2" />
    <img src={photo3} alt="photo3" /> <img src={photo2} alt="photo2" />
    <img src={photo3} alt="photo3" /></div></div>
  )
}