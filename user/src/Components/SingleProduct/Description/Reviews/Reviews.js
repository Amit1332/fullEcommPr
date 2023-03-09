import React from 'react'
import StarRatings from 'react-star-ratings';
const Reviews = () => {
  return (
    <>
    <div className='container-fluid singleProduct py-3 '>
        <h4 className='mb-4' style={{color:"#1D2939", fontWeight:"600"}}>Reviews</h4>
        <div className="row rev">
                 <div className="row d-flex gap-1">
                 <div className="col-1  col1 p-0 " style={{display:"flex",justifyContent:"start",}}>
                    <div className='container-fluid p-0' style={{height:"3rem",width:"3rem",borderRadius:"50%",backgroundColor:"#164C96",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>A.T</div>
                  </div>
                  <div className="col-4 p-0 gap-2 fff" >
                    <h6 className='ali'>Ali Tufan</h6>
                    <h6 className='days' style={{fontWeight:"400",fontSize:".8rem"}}>3 Days ago</h6>
                  </div>
                  
                 </div>
            <div id='rr' className="col-5 p-0 rev">
               <div className="container-fluid p-0" style={{lineHeight:".5rem"}}>
                <StarRatings
                rating={5}
                starRatedColor="#FDB022"
                starDimension="13px"
                starSpacing="2px"/>
               </div>
               <div className="row">
                 <h6 style={{fontWeight:"400",fontSize:".8rem" ,color:"#1D2939"}}>Greate Product</h6>
              </div>
              <div className="row " style={{color:"#667085",fontWeight:"400",fontSize:".9rem",lineHeight:"26px"}}>
                <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered  alteration in some form, by injected humour</p>
              </div>
              <div className="container-fluid d-flex gap-2  p-0">
                <button style={{border:"none" ,fontWeight:"400",backgroundColor:"transparent",color:"#667085"}} className="d-flex gap-2"><i class="ri-thumb-up-line"></i><span>Like</span></button>
                <button style={{border:"none" ,fontWeight:"400",backgroundColor:"transparent",color:" #D94A27"}}>Replay</button>
              </div>
            </div>
           
        </div>
    </div>
    </>
  )
}

export default Reviews