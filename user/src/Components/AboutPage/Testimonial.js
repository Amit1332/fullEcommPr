import React from 'react'
import AboutContactCenterTex from './AboutContactCenterTex'
import CardSlider from './CardSlider'

const Testimonial = () => {

    const cardDatacust =[
        {
            icon:"las la-shipping-fast",
            heading:"Free Shipping",
            content:"loredsa hfgsa fdsgafg agf hfdg sahfgdsh afghdgsf hgdasfga"
    
        },
        {
            icon:"las la-credit-card",
            heading:"Free Shipping",
            content:"loremdsafh sdahfsahfgds ahfgsafds gafgdagfshfd gsahfgdshaf ghdgsfhg dasfga"
    
        },
        {
            icon:"las la-cube",
            heading:"Free Shipping",
            content:"lore mdsafhsdahfsa hfgdsahfgsaf dsgafgdagfsh fdgsahfgds hafghdgs hgdasfga"
    
        },
        {
            icon:"las la-clock",
            heading:"Free Shipping",
            content:"lorem dsafhsdah fsahfgdsahfgsa fdsgafgd agfshfdgsa hfgdshafgh dgsfhgdasfga"
    
        }
    ]
  return (
    <>

<div className="whyChoose testimonial">
   <AboutContactCenterTex tophead="Testimonial" heading="What Customer Says About Us" paraCont="loremsfdsafsdafdasfsdafdsadsafdasfdasfsa"/>


    <div className="customerCardfreeshipping">
       



       
            


    </div>
    


  </div>
      
    </>
  )
}

export default Testimonial
