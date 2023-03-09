import React from 'react'
import"../Coupons/Coupons.css"

function Coupons() {
  return (
    <>
        <div className="container-fluid mt-3 pt-4  w-100  m-0" style={{backgroundColor:"white"}}>
          <div className="coupons-nav pt-2 d-flex justify-content-between align-items-center">
            {/* <div className="coupons-nav-left"> <h3>Coupons</h3></div> */}
            <div className="term-nav-left mt-3"> <h3>Coupons</h3></div>
            <div className="coupons-nav-right" style={{color: "#667085"}}>
            <i style={{marginBottom:"0"}} class="las la-search"></i> <button class="btn shadow-none text-capitalize  gap-2" type="submit" style={{gap:"10px", marginBottom:"0"}}> Search by name</button>
            </div>
          </div>
          <div className="coupons-boxes pt-3">
            <div className="d-flex border mb-3  rounded-5 justify-content-between" style={{backgroundColor:"white"}}>
                <div className="d-flex coupons-inner ">
                 <div className='coupons-left-text py-4'>
                 <h1 style={{color:"#164C96", }}>20%</h1><h1 style={{color:"#164C96", }}>Off</h1>
                 </div>
                   <div className="box-left-2 d-flex flex-column py-4">
                       <p style={{marginBlock:"0"}}>On minimum purchase of Rs. 0</p>
                       <div className="coupon-code" style={{backgroundColor:"#F1F8FD",marginBlock:"0", padding:"0 10px", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"space-between"}}><h5 style={{ display:"inline-block", marginBottom:"0"}}> Code: <span style={{color:"#FF4555", fontWeight:"600"}}>GETEXTRA2.0</span></h5> <span style={{color:"#12B76A", display:"inline-block", textAlign:"end", alignItems:"flex-start"}}>Copy</span></div>
                         <h5 style={{fontWeight:"400",marginBlock:"0"}}>Expire: <span style={{fontWeight:"600"}}>Sep 30 2022 | 11:59:00 PM</span></h5>
                   </div>
                   </div>
                   <div className="coupons-box-right">
                         <div className="box-right-2"> <h4>View Details</h4></div>
                   </div>
            </div>
            <div className="d-flex border mb-3  rounded-5 justify-content-between" style={{backgroundColor:"white"}}>
                <div className="d-flex coupons-inner ">
                 <div className='coupons-left-text py-4'>
                 <h1 style={{color:"#164C96", }}>20%</h1><h1 style={{color:"#164C96", }}>Off</h1>
                 </div>
                   <div className="box-left-2 d-flex flex-column py-4">
                       <p style={{marginBlock:"0"}}>On minimum purchase of Rs. 0</p>
                       <div className="coupon-code" style={{backgroundColor:"#F1F8FD",marginBlock:"0", padding:"0 10px", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"space-between"}}><h5 style={{ display:"inline-block", marginBottom:"0"}}> Code: <span style={{color:"#FF4555", fontWeight:"600"}}>GETEXTRA2.0</span></h5> <span style={{color:"#12B76A", display:"inline-block", textAlign:"end", alignItems:"flex-start"}}>Copy</span></div>
                         <h5 style={{fontWeight:"400",marginBlock:"0"}}>Expire: <span style={{fontWeight:"600"}}>Sep 30 2022 | 11:59:00 PM</span></h5>
                   </div>
                   </div>
                   <div className="coupons-box-right">
                         <div className="box-right-2"> <h4>View Details</h4></div>
                   </div>
            </div>
            <div className="d-flex border mb-3  rounded-5 justify-content-between" style={{backgroundColor:"white"}}>
                <div className="d-flex coupons-inner ">
                 <div className='coupons-left-text py-4'>
                 <h1 style={{color:"#164C96", }}>20%</h1><h1 style={{color:"#164C96", }}>Off</h1>
                 </div>
                   <div className="box-left-2 d-flex flex-column py-4">
                       <p style={{marginBlock:"0"}}>On minimum purchase of Rs. 0</p>
                       <div className="coupon-code" style={{backgroundColor:"#F1F8FD",marginBlock:"0", padding:"0 10px", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"space-between"}}><h5 style={{ display:"inline-block", marginBottom:"0"}}> Code: <span style={{color:"#FF4555", fontWeight:"600"}}>GETEXTRA2.0</span></h5> <span style={{color:"#12B76A", display:"inline-block", textAlign:"end", alignItems:"flex-start"}}>Copy</span></div>
                         <h5 style={{fontWeight:"400",marginBlock:"0"}}>Expire: <span style={{fontWeight:"600"}}>Sep 30 2022 | 11:59:00 PM</span></h5>
                   </div>
                   </div>
                   <div className="coupons-box-right">
                         <div className="box-right-2"> <h4>View Details</h4></div>
                   </div>
            </div>
            <div className="d-flex border mb-3  rounded-5 justify-content-between" style={{backgroundColor:"white"}}>
                <div className="d-flex coupons-inner ">
                 <div className='coupons-left-text py-4'>
                 <h1 style={{color:"#164C96", }}>20%</h1><h1 style={{color:"#164C96", }}>Off</h1>
                 </div>
                   <div className="box-left-2 d-flex flex-column py-4">
                       <p style={{marginBlock:"0"}}>On minimum purchase of Rs. 0</p>
                       <div className="coupon-code" style={{backgroundColor:"#F1F8FD",marginBlock:"0", padding:"0 10px", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"space-between"}}><h5 style={{ display:"inline-block", marginBottom:"0"}}> Code: <span style={{color:"#FF4555", fontWeight:"600"}}>GETEXTRA2.0</span></h5> <span style={{color:"#12B76A", display:"inline-block", textAlign:"end", alignItems:"flex-start"}}>Copy</span></div>
                         <h5 style={{fontWeight:"400",marginBlock:"0"}}>Expire: <span style={{fontWeight:"600"}}>Sep 30 2022 | 11:59:00 PM</span></h5>
                   </div>
                   </div>
                   <div className="coupons-box-right">
                         <div className="box-right-2"> <h4>View Details</h4></div>
                   </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Coupons