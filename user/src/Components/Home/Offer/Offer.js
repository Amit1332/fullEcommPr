import React from 'react'
import { Link } from 'react-router-dom'

export default function Offer() {
  return (
    <div className='offercomponent'>
        <div className="textoffer">
        <h1>Get 20% Cash Back</h1>
        <p>on Flippy7.com</p>
        <Link>Learn More</Link>
        </div>
        <div className="img">

        <img src="/Offerimage/pngfind.com-visa-png-1701581.png" alt="" />
        </div>
    </div>
  )
}
