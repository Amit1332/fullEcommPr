import React from 'react'
import { useState } from 'react';
import Refund_table from "../Refund_rejected/Table_for_Refund_Aproved/Refund_table"

function Refund_Rejected() {
    const [data, setdata] = useState();
  return (
   <>
    <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
              <h3 class="mb-0 h6 text-center">Refund Rejected</h3>

            </div>
            <div className="productsfilter">
             
            </div>
          </div>

          <Refund_table/>
        </div>
      </div>
   
   </>
  )
}

export default Refund_Rejected
