import React from 'react'
import "./Footer.css"
import Topfooter from './Topfooter/Topfooter.js'
import MiddleFooter from './Middlefooter/MiddleFooter'
import Downfooter from './DownFooter/Downfooter.js'

function Footer() {
  return (
    <div className='Fotercomponent px-0'>
        <Topfooter/>
        <MiddleFooter/>
        <Downfooter/>        
    </div>
  )
}

export default Footer