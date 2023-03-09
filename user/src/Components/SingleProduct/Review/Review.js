import React from 'react'
import ProgressBar from './ProgressBar';
import StarRatings from 'react-star-ratings';
import Reviews from '../Description/Reviews/Reviews';
const Review = () => {

    const reviewData = [
        {
            progressValue :100,
            rating :5,
            progressPercent :"70%"

        },
        {
            progressValue :30,
            rating :5,
            progressPercent :"30%"
        },{
            progressValue :15,
            rating :5,
            progressPercent :"15%"
        },{
            progressValue :10,
            rating :5,
            progressPercent :"10%"
        },{
            progressValue :5,
            rating :5,
            progressPercent :"5%"
        }
    ]
  return (
    <>

    <div className="container-fluid singleProduct">
        <h4 style={{color:"#1D2939",fontWeight:"600"}}>Customers Feedback</h4>
        <div className="row mt-4 ssss">
            <div className="col-2 text-center col2"  style={{backgroundColor:"#F9FAFB",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <h1 style={{color:" #164C96",fontWeight:"700"}}>4.8</h1>
                <StarRatings
                rating={4.5}
                starRatedColor="#FDB022"
                starDimension="18px"
                starSpacing="2px"/>
                <p className='mt-3'>Product Rating</p>
            </div>
            <div className="col-4 col4">
             <div className="container-fluid ">
             <ProgressBar reviewData={reviewData}  />            
             </div>
            </div>
        </div>
    </div>
    <div className="container-fluid singleProduct">
      <Reviews/>
      <Reviews/>
      <Reviews/>
      <div className="row">
        <div className="col-6 text-center">
            <p style={{color:"tomato"}}> <u>View All Reviews</u> </p>
        </div>
    </div>

    <div className="container-fluid one">
    <h6 style={{color:"#1D2939",fontWeight:"600"}}>Write a Review</h6>
    <div className="container-fluid p-0 mt-3" style={{lineHeight:".3rem"}}>
        <p style={{color:" #1D2939" ,fontSize:".9rem"}}>What is it like to Product?</p>
        <StarRatings
                rating={5}
                starRatedColor="#FDB022"
                starDimension="13px"
        starSpacing="2px"/>
    </div>
    <div className="container-fluid mt-3 p-0">
        <div className="col-6 great_product">
          <label style={{color:"#1D2939",fontWeight:"400",fontSize:".9rem"}} for="exampleInputPassword1" class="form-label">Review Title</label>
          <input style={{fontSize:".9rem",color:"#667085"}}  type="text" placeholder='Great Products' class="form-control rounded-pill py-2" id="exampleInputPassword1"/>
        </div>
    </div>

    <div className="container-fluid mt-3 p-0">
        
        <div className="col-6 comment">
          <label style={{color:"#1D2939",fontWeight:"400",fontSize:".9rem"}} for="exampleInputPassword1" class="form-label">Review Title</label>
          <textArea rows="6" style={{fontSize:".9rem",resize:"none",color:"#667085"}}  type="text" placeholder='leave a comment here' class="form-control rounded-3" id="exampleInputPassword1"/>
        </div>
        
    </div>

    <div className="container-fluid p-0 mt-5">
        <button className='px-3 py-2 rounded-pill' style={{color:"white",border:"none",backgroundColor:"#164C96"}} >Submit Review</button>
    </div>
    </div>
    </div>

    </>
  )
}

export default Review