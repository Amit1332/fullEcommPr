
import React from "react";
import "./MyShopingCart.css";
const MyShopingCart = () => {
  return (
    <div className="container-fluid ">

     
      <div className="container-fluid d-flex mt-5" >
       <div  className="container-fluid gap-2 text-nowrap" style={{display:"flex",padding:"1rem .5rem",justifyContent:"start",alignItems:"center",border:"1px solid #F2F4F7",borderRadius: "8px"}}>
       <p style={{fontSize:".7rem",fontWeight:"600"}} className="d-flex gap-2"> <i style={{color:"tomato"}} class="ri-truck-line"></i>Get Free Shipping* On Your First Order, Minimum Order Value ₹250/-</p>
       </div>
       <div className="container-fluid d-flex gap-5 p-0 text-nowrap" style={{display:"flex", justifyContent:"end",alignItems:"center",backgroundColor:"#F9FAFB",borderRadius:"14px"}} >
        <p style={{fontSize:".7rem",fontWeight:"400",color:"gray"}}>Coupon Code</p>
        <p style={{fontSize:".7rem",fontWeight:"400",color:"tomato"}}>Apply Coupon</p>
       </div>
      </div>

        <div className="container-fluid">
          <div className="row d-flex gap-5">
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <p>Your Order(2)</p>
                </div>
                <div className="col-6 d-flex gap-5 justify-content-end text-nowrap " style={{fontSize:".8rem"}}>
                  <p>Subtotal</p>
                  <p>Remove</p>
                </div>
              </div>
              <div className="row" style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                <div className="col-8 d-flex gap-3">
                  <img style={{height:"5rem",width:"5rem" ,borderRadius:"1rem"}} src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" alt="" />
                  <div className="row">
                   <div className="row" style={{lineHeight:"1px"}}>
                   <h6 style={{fontSize:".8rem",fontWeight:"600"}} >Women Printed Crepe Straight Kurta (Large)</h6>
                    <p style={{fontSize:".6rem",color:"#667085",fontWeight:"400"}} >SKU : FY-5563762</p>
                    <p style={{fontSize:".6rem",color:"#667085",fontWeight:"400"}}>Category : Gucci Flora</p>
                   </div>
                    <div className="row d-flex gap-2 px-4" style={{fontSize:".7rem",fontWeight:"600"}}>
                      Quantity: <p className="rounded-pill d-flex gap-2" style={{border:"1px solid gray",width:"fit-content" }} ><span>+</span> <span>02</span> <span>-</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="row">
                    <div className="col-8 text-end" style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                    <div className="row">
                    <h6>₹240</h6>
                    <p style={{fontSize:".6rem"}} >₹3000 <span style={{color:"tomato"}}>70 % Off</span> </p>
                    </div>
                    </div>
                    <div className="col-4" style={{display:"flex",justifyContent:"center",color:"#B1B1B1",alignItems:"center"}} >
                    <i style={{fontSize:"1.3rem",marginBottom:"1rem"}} class="ri-close-circle-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="container-fluid text-nowrap p-0">
                <h6  style={{fontWeight:"700",color:"#1D2939"}} >Order Summary</h6>
                <hr />
                <div id="order_summary" className="container-fluid text-nowrap p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
                  <p>Subtotal (3 item)</p><span  style={{fontWeight:"700",color:"#1D2939"}}>₹5000</span>
                </div>
                <div id="order_summary" className="container-fluid text-nowrap p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <p>Total Discount</p> <span style={{color:"#12B76A"}}>-₹4640</span>
                </div>
                <div id="order_summary" className="container-fluid text-nowrap p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <p>Coupon Discount</p> <span style={{color:"#D94A27"}} >Apply Coupon</span>
                </div>
                <div id="order_summary" className="container-fluid text-nowrap p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <p>Delivery Charges</p> <span>Free</span>
                </div>
                <div id="order_summary" className="container-fluid text-nowrap p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <p>Order total</p> <span style={{color:"#12B76A"}} >₹360</span>
                </div>
                <hr />
                <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <h6  style={{fontWeight:"700",color:"#1D2939"}} >Total Payment</h6> <h6  style={{fontWeight:"700",color:"#1D2939"}} >₹360</h6>
                </div>
              </div>
              <div className="container-fluid p-0 mt-5">
              <button style={{border:"none",color:"white",backgroundColor:"#164C96",height:"3rem",width:"25rem",borderRadius:"2rem" }} >Proceed to checkout</button>
                
              </div>

            </div>
          </div>
        </div>

      
    </div>
  );
};

export default MyShopingCart;
