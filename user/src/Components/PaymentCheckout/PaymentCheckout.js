import React from "react";
import Footer from "../include/Footer/Footer";
import "./PaymentCheckout.css"
const PaymentCheckout = () => {
  return (
    <div className="container-fluid payment_checkout_page mt-5">
      <div className="row dflex_container_payment" style={{display:"flex",justifyContent:"space-around"}} id="nm" >
        <div className="col-7 mt-4 left_payment_container" id="col7">
          <div className="d-flex align-items-center gap-2" >
             <h6 style={{color:"#344054", marginBottom:"0px", fontSize:"18px", fontWeight:"700"}}>Payment Methods</h6>
             <button className="py-2 px-2 rounded-3" style={{fontSize:".7rem",border:"none",outline:"none",color:"white",backgroundColor:"#12B76A",display:"flex",justifyContent:"center",alignItems:"center"}}> <i class="ri-shield-check-line"></i> Secure Payment</button>
          </div>
        
        <div className="container-fluid mt-3  " style={{border: "1px solid #DEE3F2"}} ></div>
        <div className="container-fluid d-flex gap-5 text-nowrap p-0 mt-3 radio_payment_container" style={{display:"flex",justifyContent:"start",alignItems:"center"}} >
            <button className='rounded-pill gap-1 px-2 py-1' style={{ backgroundColor:"transparent",color:"#344054",fontSize:"16px",fontWeight:"600",border:"none",display:"flex",justifyContent:"center",alignItems:"center"}}> <input style={{cursor:"pointer",height:"1.2rem",width:"1.2rem",accentColor:"red"}} name="one" type="radio"/> Home</button>
            <button className='rounded-pill gap-1 px-2 py-1' style={{ backgroundColor:"transparent",color:"#344054",fontSize:"16px",fontWeight:"600",border:"none",display:"flex",justifyContent:"center",alignItems:"center"}}><input style={{cursor:"pointer" ,height:"1.2rem",width:"1.2rem",accentColor:"red"}}  name="one" type="radio"/>My Cart</button>
            <button className='rounded-pill gap-1 px-2 py-1' style={{ backgroundColor:"transparent",color:"#344054",fontSize:"16px",fontWeight:"600",border:"none",display:"flex",justifyContent:"center",alignItems:"center"}}><input style={{cursor:"pointer" ,height:"1.2rem",width:"1.2rem",accentColor:"red"}}  name="one" type="radio"/>Credit / Debit Card</button>
            <button className='rounded-pill gap-1 px-2 py-1' style={{ backgroundColor:"transparent",color:"#344054",fontSize:"16px",fontWeight:"600",border:"none",display:"flex",justifyContent:"center",alignItems:"center"}}><input style={{cursor:"pointer" ,height:"1.2rem",width:"1.2rem",accentColor:"red"}}  name="one" type="radio"/> Dashboard</button>
        </div>
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-6 ">
                <label for="exampleInputEmail1" class="form-label" style={{color:"#344054",fontWeight:"600", fontSize:"16px"}}>Card Number</label>
                <div class="input-group mb-3 rounded-2  border">
                 <input style={{border:"none"}} type="text" class="form-control" placeholder="0000 0000 0000 0000" aria-label="Username" aria-describedby="basic-addon1"/>
                 <span style={{border:"none"}} class="input-group-text" id="basic-addon1"><i style={{fontSize:"2rem",color:"#EB001B"}} class="ri-mastercard-fill"></i></span>
                </div>
                <div className="row mt-4">
                    <div className="col-6">
                        <label for="exampleInputEmail1" class="form-label" style={{color:"#344054",fontWeight:"600", fontSize:"16px"}}>Expiry Date</label>
                        <div class="input-group mb-3 rounded-2  border">
                        <input style={{border:"none"}} type="text" class="form-control" placeholder="MM/YY" aria-label="Username" aria-describedby="basic-addon1"/>
                        <span style={{border:"none"}} class="input-group-text" id="basic-addon1"><i style={{color:"#4F547B"}} class="ri-calendar-2-line"></i></span>
                        </div>
                    </div>
                    <div className="col-6">
                        <label for="exampleInputEmail1" class="form-label" style={{color:"#344054",fontWeight:"600", fontSize:"16px"}}>CVV</label>
                        <div class="input-group mb-3 rounded-2  border">
                        <input style={{border:"none",textAlign:"center"}} type="text" class="form-control" placeholder="___   ___   ___" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-6">
                <label for="exampleInputEmail1" class="form-label" style={{color:"#344054",fontWeight:"600", fontSize:"16px"}}>Name On Card</label>
                <div class="input-group mb-3 rounded-2  border">
                 <input style={{border:"none"}} type="text" class="form-control" placeholder="John doe" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                </div>

                <div className="container-fluid py-4" style={{backgroundColor:"#FEF8F2"}}>
                   <div className="container-fluid d-flex p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div className="container-fluid p-0">
                                <h4 style={{color:"#D94A27",fontWeight:"600"}}>Reselling the order?</h4>
                                <p style={{color:"#667085",fontWeight:"400", fontSize:"14px"}}>Click on “yes” to add Final Price</p>
                            </div>
                            <div className="container-fluid text-end gap-3" style={{display:"flex",justifyContent:"end"}}>
                                <button className="px-4 py-1 rounded-pill" style={{backgroundColor:"#164C96",color:"white",border:"1px solid #164C96"}}>Yes</button>
                                <button className="px-4 py-1 rounded-pill" style={{border:"1px solid #475467"}}>No</button>
                        </div>
                   </div>
                        <div className="container-fluid" style={{border: "1px solid #DEE3F2"}}></div>

                        <div className="col-6 mt-3">
                            <label for="exampleInputEmail1" class="form-label" style={{color:"#344054",fontWeight:"600", fontSize:"16px"}}>Order Total + Your Margin</label>
                            <div class="input-group mb-3 rounded-5  border">
                            <input style={{border:"none",width:"100%",backgroundColor:"white",height:"3rem"}} type="text" class="form-control rounded-5 " placeholder="Enter Ammount" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <label for="exampleInputEmail1" class="form-label" style={{color:"#344054",fontWeight:"600", fontSize:"16px"}}>Your Margin : <span style={{color:"#164C96"}}>₹360</span></label>
                        </div>
                </div>
      
            </div>
        </div>
        </div>
        <div className="col-4 rounded-5 right_payment_container" id="col4">
            <div className="container-fluid  px-2 py-3" style={{backgroundColor:"#F9FAFB"}}>
                <div className="container-fluid">
                  <h5 style={{color:"#344054", fontSize:"18px", fontWeight:"700"}}>Your Order</h5>
                </div>
               
                <div className="container-fluid py-1">
                <div className="container my-3" style={{border:"1px solid #E6EAEE"}} />
                <div class="card p-0 text-nowrap gap-3" style={{boxShadow:"none",display:"flex",flexDirection:"row",alignItems:"center"}}>
                <img style={{height:"3rem", width:"3rem"}} src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="card-img-top rounded-4" alt="..."/>
                <div class="card-body p-0" style={{lineHeight:".2rem"}}>
                  <h5 style={{fontSize:".9rem",fontWeight:"700",color:"#344054"}} class="card-title">Card title <br />flhd  </h5>
                  <p style={{fontSize:".7rem",color:"#667085",fontWeight:"400"}} class="card-text">Some quick example text to  content.</p>
                </div>
                  <h5 style={{fontSize:"1rem",fontWeight:"700",color:"#344054"}} >₹120.00</h5>
                  </div>
                  <div className="container my-3" style={{border:"1px solid #E6EAEE"}} />

                  <div class="card p-0 text-nowrap gap-3" style={{boxShadow:"none",display:"flex",flexDirection:"row",alignItems:"center"}}>
                <img style={{height:"3rem", width:"3rem"}} src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="card-img-top rounded-4" alt="..."/>
                <div class="card-body p-0" style={{lineHeight:".2rem"}}>
                  <h5 style={{fontSize:".9rem",fontWeight:"700",color:"#344054"}} class="card-title">Card title <br />flhd  </h5>
                  <p style={{fontSize:".7rem",color:"#667085",fontWeight:"400"}} class="card-text">Some quick example text to  content.</p>
                </div>
                  <h5 style={{fontSize:"1rem",fontWeight:"700",color:"#344054"}} >₹120.00</h5>
                  </div>
                  <div className="container my-3" style={{border:"1px solid #E6EAEE"}} />

                  <div class="card p-0 text-nowrap gap-3" style={{boxShadow:"none",display:"flex",flexDirection:"row",alignItems:"center"}}>
                <img style={{height:"3rem", width:"3rem"}} src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="card-img-top rounded-4" alt="..."/>
                <div class="card-body p-0" style={{lineHeight:".2rem"}}>
                  <h5 style={{fontSize:".9rem",fontWeight:"700",color:"#344054"}} class="card-title">Card title <br />flhd  </h5>
                  <p style={{fontSize:".7rem",color:"#667085",fontWeight:"400"}} class="card-text">Some quick example text to  content.</p>
                </div>
                  <h5 style={{fontSize:"1rem",fontWeight:"700",color:"#344054"}} >₹120.00</h5>
                  </div>
                  <div className="container my-3" style={{border:"1px solid #E6EAEE"}} />


                  <div class="card p-0 text-nowrap gap-3" style={{boxShadow:"none",display:"flex",flexDirection:"row",alignItems:"center"}}>
                <img style={{height:"3rem", width:"3rem"}} src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="card-img-top rounded-4" alt="..."/>
                <div class="card-body p-0" style={{lineHeight:".2rem"}}>
                  <h5 style={{fontSize:".9rem",fontWeight:"700",color:"#344054"}} class="card-title">Card title <br />flhd  </h5>
                  <p style={{fontSize:".7rem",color:"#667085",fontWeight:"400"}} class="card-text">Some quick example text to  content.</p>
                </div>
                  <h5 style={{fontSize:"1rem",fontWeight:"700",color:"#344054"}} >₹120.00</h5>
                  </div>
                  <div  className="container my-3" style={{border:"1px solid #E6EAEE"}} />


                  <div id="ide" className="container-fluid p-0"style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <p style={{color:"#667085",fontWeight:"500", fontSize:"16px"}} >Subtotal (2 item)</p>
                    <p style={{color:"#252C2E",fontWeight:"600", fontSize:"16px"}} >₹360</p>
                  </div>
                  <div className="container-fluid p-0"style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <p style={{color:"#667085",fontWeight:"500", fontSize:"16px"}}>Delivery Service</p>
                    <p style={{color:"#12B76A",fontWeight:"600", fontSize:"16px"}}>Free</p>
                  </div>
                  <div className="container-fluid p-0"style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <p style={{color:"#667085",fontWeight:"500", fontSize:"16px"}}>Discount</p>
                    <p style={{color:"#12B76A",fontWeight:"600", fontSize:"16px"}}>-₹4640</p>
                  </div>
                </div>
              
                <div className="container-fluid p-0 mt-1" style={{border:"1px dashed #D2D2D2"}}></div>

                <div className="container-fluid mt-3" style={{display:"flex",justifyContent:"space-between"}}>
                  <h4 style={{color:"#344054", fontSize:"18px", fontWeight:"700"}}>Total Payment</h4>
                  <h4 style={{color:"#344054", fontSize:"18px", fontWeight:"700"}}>₹360</h4>
                </div>
                <div className="container-fluid">
                <div class="card" style={{boxShadow:"none",backgroundColor:"transparent",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                  <div className="container-fluid" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"3rem" , width:"3rem",borderRadius:"50%",backgroundColor:"#12B76A"}} >
                  <i style={{color:"white",fontSize:"1.5rem"}} class="ri-shield-check-line"></i>
                  </div>
                  <div class="card-body" >
                    <h5 class="card-title" style={{fontSize:"1rem",color:"#1D2939",fontWeight:"700"}}>Secure Payment</h5>
                    <p style={{color:"#667085",fontWeight:"400",lineHeight:"18px",fontSize:"12px"}} class="card-text">We protect your information. You can make your payment with 100% Guarantee .</p>
                  </div>
                </div>
                </div>
            </div>
                <div className="container-fluid mt-3 py-4  mb-5 px-4 rounded-3 " style={{display:"flex",backgroundColor:"#F9FAFB",justifyContent:"space-between",alignItems:"center"}}>
                  <p style={{color:"#667085",fontSize:"14px", marginBottom:"0px"}}>Coupon Code</p>
                  <p style={{color:"#D94A27",fontSize:"14px",marginBottom:"0px"}}>Apply Coupon</p>
                </div>
        </div>
      </div>
      <div className=" px-3 col-7 downbtnchechout" style={{display:"flex",marginTop:"-1rem",justifyContent:"space-between",alignItems:"center"}}>
                <p style={{display:"flex",justifyContent:"start",alignItems:"center",marginBottom:"0px",fontSize:"16px", fontWeight:"500"}} ><i style={{fontSize:"1rem"}} class="ri-arrow-left-s-line"></i>Back to Shipping Details</p> 
                <button className="rounded-pill" style={{color:"white",backgroundColor:"#164C96", padding:"10px 20px",border:"none" }} >Make Payment</button>
            </div>
            <Footer/>
    </div>
  );
};

export default PaymentCheckout;
