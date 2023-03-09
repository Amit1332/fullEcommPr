import React from 'react'
import Shop from "./images/shopf.jpg"

const BecomeSupplier = () => {
  return (
    <>

    <div className="becomeSupplier">
        <img src={`${Shop}`} alt="" />

        <div className="becomess">
            <div className="becc">
                <h5>Become Supplier</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sequi tenetur necessitatibus nemo, reiciendis a!</p>
                <div className="listsuccess">
                    <div className="onelsuc">
                    <i class="las la-check-circle"></i>
                    <span>6 Lakh + Trust Flippy to Sell Online</span>
                    </div>
                    <div className="onelsuc">
                    <i class="las la-check-circle"></i>
                    <span>11 Crore + Customer Buying across India</span>
                    </div>
                    <div className="onelsuc">
                    <i class="las la-check-circle"></i>
                    <span>28000 + Pincode Supported for Delivery</span>
                    </div>
                    <div className="onelsuc">
                    <i class="las la-check-circle"></i>
                    <span>
                        7000 + Categories to Sell Online
                    </span>
                    </div>
                    
                </div>
                <div className="becss">
                <i class="las la-user-plus"></i>
                <a href=""> Become a Supplier</a>
                </div>
            </div>

        </div>
    </div>
      
    </>
  )
}

export default BecomeSupplier
