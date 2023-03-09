import React from "react";
import StarRatings from 'react-star-ratings';

const ProductCard = () => {
    return(
        <div>
 <div className="col">
                        <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <StarRatings/>
                            </div>
                        </div>
                 </div>
        </div>
    )
}

export default ProductCard;


