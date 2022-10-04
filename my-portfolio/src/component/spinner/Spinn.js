import React from 'react'
import './Spin.css'
import loading from '../../multimedia/spinner/Bubble-Preloader-1-1.gif'
export default function Spinn() {
  return (
    <div className='spinner'>
        <img src={loading} alt="loading..." />
    </div>
  )
}
