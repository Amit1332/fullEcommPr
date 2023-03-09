import { padding } from "@mui/system";
import React from "react";
import Footer from "../include/Footer/Footer";
import "./Checkout.css"
const Checkout = () => {
  return (
    <div className="container-fluid checkout_first mt-3 pt-4" style={{backgroundColor:"white"}}>
      <div className="container-fluid text-nowrap" id="tabnav" >
        <div className="container-fluid">
         <p  style={{fontSize:"16px", color:"#97A1B2"}}>Electronics / Shoes / Man's Wear Shop / Shoes by type / <span style={{color:"#1D2939"}}>Puma-Shoes</span></p>
        </div>
       </div>
       <div className="rewards-nav pb-3  d-flex justify-content-between align-items-center">
                <div className="rewards-nav-left " > <h3>My Shopping Cart</h3></div>
                <div class="d-flex gap-1  align-items-center bankgrid" role="search">
                          <div className="sucess_circle_container"><div className="sucess_prograss_circle rounded-circle" style={{padding:"5px 12px"}}><i class="las la-check"></i></div> <p>Shopping Bag</p></div>
                          <div className="line_progress_dashed" ></div>
                          <div className="progess_circle_container_blue"><div className="blue_prograss_circle  rounded-circle" style={{padding:"5px 13px"}}>2</div><p>Order Details</p></div>
                          <div className="line_progress_dashed" ></div>
                          <div className="progess_circle_container"><div className="defualt_prograss_circle  rounded-circle" style={{padding:"5px 13px"}}>3</div><p>Payment</p></div>
                    
                          </div>
           </div>
      <div className="row" style={{display:"flex",justifyContent:"space-around"}} id="nm" >
        <div className="col-7" id="col7">
          <div className="container-fluid p-0 ">
            <h6 style={{color:"#344054", fontSize:"18px", fontWeight:"700"}}>Contact Details</h6>
          </div>
          <div className="row">
            <div className="col-6">
              <form>
                <div class="mb-3 ">
                  <input style={{fontSize:"16px", backgroundColor:"#FCFCFD"}}
                    type="text"
                    class="form-control rounded-3"
                    placeholder="First Name"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <input style={{fontSize:"16px", backgroundColor:"#FCFCFD"}}
                    type="email"
                    class="form-control rounded-3"
                    placeholder="Email Address"
                    id="exampleInputPassword1"
                  />
                </div>
              </form>
            </div>
            <div className="col-6">
              <form>
                <div class="mb-3">
                  <input style={{fontSize:"16px", backgroundColor:"#FCFCFD"}}
                    type="text"
                    class="form-control rounded-3"
                    placeholder="Last Name"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <input style={{fontSize:"16px", backgroundColor:"#FCFCFD"}}
                    type="text"
                    class="form-control rounded-3"
                    placeholder="Mobile No."
                    id="exampleInputPassword1"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="container-fluid px-0" style={{display:"flex",flexDirection:"column", gap:"1rem"}} >
            <div className="container-fluid p-0 ">
            <h6 style={{color:"#344054", fontSize:"18px", fontWeight:"700"}} >Address</h6>
            </div>
            <div class="container-fluid p-0 border rounded-5 py-3 " style={{ backgroundColor:'#f9fafb'}}>            
               <div id="address" className="container-fluid" style={{display:"flex"}}>
               <div class="container-fluid d-flex gap-2 p-0" style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
               <input type="radio" name="addd_selelect"/>

                    <h6 className="card-title text-nowrap " style={{fontSize:"16px",fontWeight:"700"}}>Priya Pathak</h6>
                    <button className="rounded-pill" style={{fontSize:"14px",height:"1.6rem",width:"3.5rem",textAlign:"center",fontWeight:"400",color:"#164C96",border:"1px solid #164C96"}} >Home</button>
                </div>

                <div  className="container-fluid text-end"style={{display:"flex",justifyContent:"end",gap:"1rem",alignItems:"center"}}>
                    <button id="btn" className="rounded-pill px-2" style={{backgroundColor:"white"}} > <i class="ri-edit-box-line"></i> <span style={{fontSize:".8rem"}} >Edit</span> </button>
                    <button id="btn" className="rounded-pill px-2"  style={{fontSize:".8rem",backgroundColor:"white"}} >Remove</button>
                </div>
               </div>
               <div className="container-fluidp-0">
               <p style={{marginLeft:"2.3rem",fontSize:"16px",marginTop:"1rem"}} >43, Nilkamal House, Parvat Patiya <br />
                    Surat, Gujarat - 364589</p>
                   <p style={{marginLeft:"2.3rem",fontSize:"16px", marginBottom:"0px"}}>Mobile; <span style={{fontWeight:"800"}} >+919852454852</span> </p>
               </div>
          </div>
          <div class="container-fluid p-0 border rounded-5 py-3 " style={{ backgroundColor:'#ffff'}}>            
               <div id="address" className="container-fluid" style={{display:"flex"}}>
               <div class="container-fluid d-flex gap-2 p-0" style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
               <input type="radio" name="addd_selelect"/>

                    <h6 className="card-title text-nowrap " style={{fontSize:"16px",fontWeight:"700"}}>Priya Pathak</h6>
                    <button className="rounded-pill" style={{fontSize:"14px",height:"1.6rem",width:"3.5rem",textAlign:"center",fontWeight:"400",color:"#164C96",border:"1px solid #164C96"}} >Home</button>
                </div>

                <div  className="container-fluid text-end"style={{display:"flex",justifyContent:"end",display:'none',gap:"1rem",alignItems:"center"}}>
                    <button id="btn" className="rounded-pill px-2" style={{backgroundColor:"white"}} > <i class="ri-edit-box-line"></i> <span style={{fontSize:".8rem"}} >Edit</span> </button>
                    <button id="btn" className="rounded-pill px-2"  style={{fontSize:".8rem",backgroundColor:"white"}} >Remove</button>
                </div>
               </div>
               <div className="container-fluidp-0">
               <p style={{marginLeft:"2.3rem",fontSize:"16px",marginTop:"1rem"}} >43, Nilkamal House, Parvat Patiya <br />
                    Surat, Gujarat - 364589</p>
                   <p style={{marginLeft:"2.3rem",fontSize:"16px", marginBottom:"0px"}}>Mobile; <span style={{fontWeight:"800"}} >+919852454852</span> </p>
               </div>
          </div>
          
            <div className="container-fluid d-flex gap-2 border rounded-5" >
            <i style={{fontSize:"1.5rem",color:"#164C96"}} class="ri-add-circle-line"></i>
            <button  style={{fontSize:"1rem",border:"none" ,color:"#164C96",backgroundColor:"transparent"}} >Add New Address</button>
            </div>
          </div>
            <div className="container-fluid p-0 mt-4 mb-4">
              <div className="container-fluid p-0">
                <h6 style={{color:"#344054", fontSize:"18px", fontWeight:"700"}}>Billing Address</h6>
             </div> 
             <div className="container-fluid p-0 d-flex">
                <div className="container-fluid p-0 d-flex gap-2" style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                <i class="ri-add-box-line"></i>
                <button style={{fontSize:".8rem", backgroundColor:"transparent",fontWeight:"400",color:"#667085",border:"none"}}>Add Different Billing Address</button>
                </div>
                <div className="container-fluid p-0 text-end">
                    <button className="rounded-pill" style={{fontSize:".8rem",padding:".4rem 1rem", backgroundColor:"transparent",fontWeight:"500",color:"#344054",border: "1px solid #D0D5DD"}} >Different Billing Address</button>
                </div>
             </div> 
            </div>
            <div className="container-fluid p-0" style={{lineHeight:".5rem"}} >
               <div className="container-fluid p-0">
                <p style={{fontSize:"16px",color:"#344054",fontWeight:"500"}} >Order Notes (Optional)</p>
                </div> 
                <div className="container-fluid p-0">
                <div class="form-floating mb-3">
                <textarea className="form-control border" id="floatingTextareaDisabled" style={{resize:"none",height:"150px"}} ></textarea>
                <label for="floatingTextareaDisabled" style={{padding:"1.5rem", paddingLeft:".75rem"}} >Leave a comment here</label>
                </div>
                </div>
            </div>
            
        </div>
        <div className="col-4 rounded-5 " id="col4">
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
                    <p style={{color:"#667085",fontWeight:"500"}} >Subtotal (2 item)</p>
                    <p style={{color:"#252C2E",fontWeight:"600"}} >₹360</p>
                  </div>
                  <div className="container-fluid p-0"style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <p style={{color:"#667085",fontWeight:"500"}}>Delivery Service</p>
                    <p style={{color:"#12B76A",fontWeight:"600"}}>Free</p>
                  </div>
                  <div className="container-fluid p-0"style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <p style={{color:"#667085",fontWeight:"500"}}>Discount</p>
                    <p style={{color:"#12B76A",fontWeight:"600"}}>-₹4640</p>
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
                <div className="container-fluid mt-3 py-4 px-4 rounded-3 " style={{display:"flex",backgroundColor:"#F9FAFB",justifyContent:"space-between",alignItems:"center"}}>
                  <p style={{color:"#667085",fontSize:"14px", marginBottom:"0px"}}>Coupon Code</p>
                  <p style={{color:"#D94A27",fontSize:"14px",marginBottom:"0px"}}>Apply Coupon</p>
                </div>
        </div>
      </div>
      <div className=" p-0 col-7 downbtnchechout" style={{display:"flex",marginTop:"-1rem",justifyContent:"space-between",alignItems:"center"}}>
                <p style={{display:"flex",justifyContent:"start",alignItems:"center",marginBottom:"0px",fontSize:"16px", fontWeight:"500"}} ><i style={{fontSize:"1rem"}} class="ri-arrow-left-s-line"></i>Return to information</p> 
                <button className="rounded-pill" style={{color:"white",backgroundColor:"#164C96", padding:"10px 20px",border:"none" }} >Continue To Payment</button>
            </div>
            <Footer/>
    </div>
  );
};

export default Checkout;
