import React from 'react'
import referr from "./referr.PNG"
const ReferBonus = () => {
  return (
    <>
    
    <div className="row referbbonus mt-3">
            <div className="col">
                    <div className="card p-3" style={{backgroundColor:"#f1f8fd"}}>
                            <div className="col">
                                <div className="box_gift">
                                <i class="ri-gift-line"></i>
                                </div>
                            </div>
                            <div className="col mt-3">
                                <h3 style={{fontWeight:"bold", color:"#164c96"}}> ₹1500</h3>
                                <h6 style={{fontSize:".9rem", color:"9AA3B2"}}>Bonuses you earned</h6>
                            </div>

                            <div className="btn rounded-pill mt-4 border shadow-none text-capitalize" style={{width:"fit-content", fontWeight:"bold", fontSize:"1rem"}}>Shop Now</div>
                    </div>

            </div>
            <div className="col">
            <div className="card p-3" style={{backgroundColor:"#fef4e9"}}>
                            <div className="col">
                               <h5 style={{color:"#D94A27", fontWeight:"bold"}}>Refer & Earn</h5>
                            </div>
                            <div className="col mt-3">
                                <h6 style={{fontSize:".9rem", color:"9AA3B2", width:"80%", lineHeight:"20px"}}>30% of Your Friend first Order(Max *300 cash per friend)</h6>
                            </div>


<div className="referimage_container mt-1  d-flex align-items-center justify-content-between">
<div className="btn rounded-pill mt-4 border shadow-none text-capitalize" style={{width:"fit-content", fontWeight:"bold", fontSize:"1rem"}}>Shop Now</div>
<div className="referimage">
    <img src={referr} alt="" />
</div>

</div>
                            
                    </div>

            </div>

          </div>
    </>
  )
}

export default ReferBonus
