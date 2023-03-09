import React from 'react'
import "./OrderCompleted.css"
const OrderCompleted = () => {
  return (
    <div className='container-fluid order_completed pt-4 pb-4' style={{backgroundColor:"white"}} >
        <div className="container-fluid" style={{textAlign:"center"}}>
            <i style={{fontSize:"4rem",color:"#12B76A"}} class="ri-checkbox-circle-fill"></i>
            <h2 style={{fontWeight:"700",color:"#344054"}}>Your order is completed!</h2>
            <p style={{color:"#344054",fontSize:"15px"}}>Thank you. Your order has been received.</p>
        </div>
        <div className="container-fluid mt-5" id='' >
            <div className="row gap-2" id='ffgg' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div className="col-3" id='col-3'>
                    <div className="container-fluid rounded-5 p-3" style={{border: "1px dashed #98A2B3"}}>
                    <div className="container-fluid mt-3 mb-4" style={{lineHeight:"10px"}}>
                        <p style={{fontSize:"16px",color:"#667085"}}>Order Number</p>
                        <h6 style={{color:"#344054"}}>54625</h6>
                    </div>
                    <div className="container-fluid mt-3 mb-4" style={{lineHeight:"10px"}}>
                        <p style={{fontSize:"16px",color:"#667085"}}>Date</p>
                        <h6 style={{color:"#344054"}}>27/07/2021</h6>
                    </div>
                    <div className="container-fluid mt-3 mb-4" style={{lineHeight:"10px"}}>
                        <p style={{fontSize:"16px",color:"#667085"}}>Total</p>
                        <h6 style={{color:"#344054"}}>₹360</h6>
                    </div>
                    <div className="container-fluid mt-3 mb-4" style={{lineHeight:"10px"}}>
                        <p style={{fontSize:"16px",color:"#667085"}}>Payment Method</p>
                        <h6 style={{color:"#344054"}}>Credit Card</h6>
                    </div>
                    </div>
                </div>
                <div className="col-6" id='col-6'>
                    <div className="container-fluid p-4 rounded-3" style={{backgroundColor:"#F9FAFB"}}>
                        <div className="container-fluid ">
                            <h6 style={{color:"#667085"}}>Your Order</h6>
                             <div className="container-fluid " style={{border:"1px solid #EAECF0"}}></div>
                        </div>
                        <div class="card px-2 text-nowrap mt-2 " style={{backgroundColor:"transparent",boxShadow:"none",display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <img style={{height:"3rem", width:"3rem"}} src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="card-img-top rounded-4" alt="..."/>
                            <div class="card-body py-0">
                            <h5 style={{fontSize:".9rem",fontWeight:"500",color:"#344054"}} class="card-title">Card title flhd  </h5>
                            <p style={{fontSize:".7rem",color:"#667085",fontWeight:"400"}} class="card-text">Quantity: <span>2</span></p>
                            </div>
                            <h5 style={{fontSize:".9rem",fontWeight:"700",color:"#667085"}} >₹120.00</h5>
                       </div>
                       <div class="card px-2 text-nowrap mt-2 " style={{backgroundColor:"transparent",boxShadow:"none",display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <img style={{height:"3rem", width:"3rem"}} src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="card-img-top rounded-4" alt="..."/>
                            <div class="card-body py-0 " >
                            <h5 style={{fontSize:".9rem",fontWeight:"500",color:"#344054"}} class="card-title">Card title flhd  </h5>
                            <p style={{fontSize:".7rem",color:"#667085",fontWeight:"400"}} class="card-text">Quantity: <span>2</span></p>
                            </div>
                            <h5 style={{fontSize:".9rem",fontWeight:"700",color:"#667085"}} >₹120.00</h5>
                       </div>
                       <div className="container-fluid my-3" style={{color:"#667085",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <h5>Subtotal</h5>
                        <h5>₹360</h5>
                       </div>
                       <div className="container-fluid my-3" style={{border: "1px solid #F2F4F7"}} ></div>
                       <div className="container-fluid" style={{color:"#667085",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <h5>Shipping</h5>
                        <h5>Free</h5>
                       </div>
                       <div className="container-fluid my-3" style={{border: "1px solid #F2F4F7"}} ></div>
                       <div className="container-fluid" style={{color:"#344054",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <h5 style={{fontWeight:"700"}}>Total</h5>
                        <h5 style={{fontWeight:"700"}}>₹360</h5>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        <div id='bottombtn' className="container-fluid d-flex gap-3 text-nowrap" style={{marginTop:"4rem",display:"flex",justifyContent:"center",alignItems:"center"}} >
            <button className='rounded-pill gap-1 px-2 py-1' style={{ backgroundColor:"#FFFFFF",color:"#344054",fontWeight:"600",border:"1px solid #D0D5DD",display:"flex",justifyContent:"center",alignItems:"center"}}><i class="ri-home-smile-line"></i>Home</button>
            <button className='rounded-pill gap-1 px-2 py-1' style={{ backgroundColor:"#FFFFFF",color:"#344054",fontWeight:"600",border:"1px solid #D0D5DD",display:"flex",justifyContent:"center",alignItems:"center"}}><i class="ri-shopping-cart-line"></i>My Cart</button>
            <button className='rounded-pill gap-1 px-2 py-1' style={{ backgroundColor:"#FFFFFF",color:"#344054",fontWeight:"600",border:"1px solid #D0D5DD",display:"flex",justifyContent:"center",alignItems:"center"}}><i class="ri-heart-line"></i>My Wishlist</button>
            <button className='rounded-pill gap-1 px-2 py-1' style={{ backgroundColor:"#FFFFFF",color:"#344054",fontWeight:"600",border:"1px solid #D0D5DD",display:"flex",justifyContent:"center",alignItems:"center"}}><i class="ri-time-line"></i> Dashboard</button>
            <button className='rounded-pill gap-1 px-2 py-1' style={{ backgroundColor:"#FFFFFF",color:"#344054",fontWeight:"600",border:"1px solid #D0D5DD",display:"flex",justifyContent:"center",alignItems:"center"}}><i class="ri-contacts-line"></i>My Profile</button>
        </div>
    </div>
  )
}

export default OrderCompleted