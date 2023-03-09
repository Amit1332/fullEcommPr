import React from 'react'
import GetStarted from '../AboutPage/GetStarted'
import NavHeaderContent from '../AboutPage/NavHeaderContent'

import ChatCard from './ChatCard'
import "./Contact.css"
import ContactBanner from './ContactBanner'
import ContactFirst from './ContactFirst'
import GetInTouch from './GetInTouch'
import LoveTo from './LoveTo'

const Contact = () => {
  return (
    <>


    <NavHeaderContent  heading="Contact Us" title="Contact" />
    <div className="mainaboutcont mt-5">
 <div className="abcde">
 <LoveTo/>
 <ChatCard/>
 <ContactFirst/>
<ContactBanner/>
<GetInTouch/>
  <GetStarted />
  </div>


    </div>


      
    </>
  )
}

export default Contact
