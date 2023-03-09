import React from 'react'
import Marketing from "./Images/Marketing.svg"

function LeftcomponentAuth() {
  return (
    <div className="leftlogin d-flex align-items-center justify-content-center" style={{width:`50%`, background:"#F9FAFB"}}>
    <div className="text">
      <div className="w-100 d-flex justify-content-center ">

        <img src={Marketing} style={{width:"65%", marginBottom:'1rem', margin:"0 auto"}} alt="" />
      </div>
        <h1 style={{color:"#164C96",fontSize: `24px`,fontWeight: `600`}}>Get Best Offer For Shopping</h1>
        <p style={{fontWeight: `400`,fontSize: `16px`,color: `#98A2B3`}}>You can create an account later.</p>
    </div>
    </div>
  )
}

export default LeftcomponentAuth