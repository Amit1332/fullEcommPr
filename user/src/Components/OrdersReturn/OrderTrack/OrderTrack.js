import React from 'react'
import "../OrderTrack/OrderTrack.css"
import Progress from './Progress'

function OrderTrack() {
  return (
    <>
        <div className="container-fluid p-3 mt-5 m-0">
        <div className="Order-track-nav pt-2 justify-content-between  ">
                <div className="Order-track-nav-left"> <h4 className=''>Order ID: 3354654654526</h4></div>
                <div className="Order-track-nav-right d-flex gap-2">
                      <div className="Order-track-nav-right-one text-nowrap">
                      <i class="ri-file-text-line"></i> <button class="btn shadow-none text-capitalize " type="submit" style={{ marginBottom:"0"}}>Download Invoice</button>
                      </div>
                      <div className="Order-track-nav-right-one btn-two text-nowrap" style={{color:"#F04438"}}>
                      <i class="las la-times-circle"></i><button class="btn  shadow-none text-capitalize " type="submit" style={{ marginBottom:"0", color:"#F04438"}}>Cancel Order</button>
                      </div>
                     
               </div>
           </div>
                    <div className="order-date  gap-3">
                        <div className="order-date-1"><p>Order date: <span>Feb 16, 2022</span></p></div>     <div className="order-date-2 d-flex gap-2" style={{ }}><i style={{color: "#12B76A",marginBottom:"0px"}} class="las la-shuttle-van"></i> <p style={{color: "#12B76A", fontWeight:"600",marginBottom:"0" }}>Estimated delivery: May 16, 2022</p></div> 
                    </div>
                    <hr className='m-0' style={{color:"gray"}}/>
           <div className="orderallsummary ">
                <div className="orderallsummary-2">
                    <div className="order-card">
                        <div className="order-card-left text-nowrap">
                            <div className="img">
                                <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
                            <div className="order-text-1"><h4 style={{marginBottom:"3px"}}>Nike Shoes</h4> <h5>Dark Black 12</h5></div>
                            </div>
                        </div>
                            <div className="order-card-right"><h5 style={{color:"#1D2939", fontSize:"17px",fontWeight:"600", margin:"0px"}}>₹2599.00</h5> <p style={{color:"#667085", fontSize:"14px"}}>Oty: 1</p></div>
                    </div>

                    <div className="order-card-2">
                        <div className="order-card-2-left"> <h5 style={{color: "#101828", fontWeight:"600", fontSize:"1.1rem"}}>Payment</h5> 
                        <div className="container-fluid p-0 order_track_payment" style={{marginTop:"-15px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h5 style={{color: "#101828"}}>Visa **56</h5> <div style={{fontSize:"2rem",border: "1px solid #F2F4F7",borderRadius:"4px"}}><i class="ri-visa-line" id='vi_sa'></i> </div>
                        </div>
                        </div>
                        <div className="order-card-2-left">
                             <h4 style={{color: "#101828", fontWeight:"600",fontSize:"1.1rem"}}>Delivery</h4> 
                             <h5 style={{color: "#667085"}}>Address</h5> 
                             <p style={{fontSize:'1rem'}}>847 Jewess Bridge Apt. 174 London, UK 474-769-3919</p>
                        </div>
                    </div>


                    <div className="order-summary">
                        <h5 style={{color: "#101828", fontWeight:"600", fontSize:"1.1rem"}}>Order Summary</h5> 

                        <div className="order-summary-text">
                            <div className="summary-text-2">
                                <h4 style={{fontSize:'1.2rem'}}>Discount</h4>
                                <h4 style={{fontSize:'1.2rem'}}>₹5554</h4>
                            </div>
                            <div className="summary-text-2">
                                <p style={{fontSize:'1rem',  marginBottom:"4px"}}>Discount</p>
                                <p style={{fontSize:'1rem', marginBottom:"4px"}}>(20%) -₹1109.40</p>
                            </div>
                            <div className="summary-text-2">
                                <p style={{fontSize:'1rem', marginBottom:"4px"}}>Delivery</p>
                                <p style={{fontSize:'1rem', marginBottom:"4px"}}>₹0.00</p>
                            </div>
                            <div className="summary-text-2">
                                <p style={{fontSize:'1rem', marginBottom:"0px"}}>Tax</p>
                                <p style={{fontSize:'1rem', marginBottom:"0px"}}>₹221.88</p>
                            </div>
                            <hr  style={{marginY:"6px"}}/>
                            <div className="summary-text-2">
                                <p style={{fontSize:'1.2rem'}}>Tax</p>
                                <span style={{fontSize:'1.2rem'}}>$0.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="orderallsummary-3">
                

                <div className="navmenu">
                    <Progress/>
                    <div className="container-fluid mt-3 text-nowrap ">
                      <p>Expected by, Mon 16th </p>
                      </div>
                </div>
                </div>
           </div>
           
        </div>
    </>
  )
}

export default OrderTrack