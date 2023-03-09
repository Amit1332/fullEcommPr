import React from 'react'
import "./About.css"
import NavHeaderContent from './NavHeaderContent'



import AboutContent from './AboutContent'
import AboutImages from './AboutImages'
import HappyCustomer from './HappyCustomer'
import WhyChooseMe from './WhyChooseMe'
import Testimonial from './Testimonial'
import FindUs from './FindUs'
import GetStarted from './GetStarted'
import BecomeSupplier from './BecomeSupplier'

const About = () => {
  return (
    <> 
    <NavHeaderContent heading="About Flippy7" title="About"/>
    <div className="mainaboutcont mt-5">
 <div className="abcde">
  <div className="container-fluid">
    <div className="row about_image_content_respons">
      <div className="col">
      <AboutImages/>

      </div>
      <div className="col">
      <AboutContent/>

      </div>
    </div>
  </div>

       <HappyCustomer/>

       <WhyChooseMe/>
       <Testimonial/>
       <FindUs/>
       <GetStarted/>
       <BecomeSupplier/>
  </div>


    </div>
      
    </>
  )
}

export default About
