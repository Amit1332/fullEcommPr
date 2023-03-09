import React from 'react'
import "./MyWishListProductCard.css";
import StarRatings from 'react-star-ratings';
const MyWishListProductCard = ({ cardData }) => {
    return (
        <div className='container-fluid my_wishlist p-0'>
            <div className='row px-2 gap-0'>
               {
                cardData.map((data)=>{
                    return(
                        <div className="col-sm-3 py-sm-0">
                        <div class="card">
                            <div className="card-image" >
                            <i class="ri-delete-bin-line"></i>
                            <img  src={data.url} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body p-2">
                                <h5 class="card-title">{data.cardTitle}</h5>
                                <p class="card-text">{data.cardText}</p>
                                <h5 class="card-price" >{data.cardPrice}</h5>
                                <div style={{ display: "flex", alignItems: "center", gap: ".8rem", fontSize: ".7rem",color:"#98A2B3" }} >
                                    <StarRatings className="rating"
                                        rating={2.403}
                                        starDimension="1rem"
                                        starSpacing="2px"
                                        starRatedColor="#FDB022"
                                    /> (121)
                                </div>
                                <button className='rounded-pill mt-2  py-2' style={{fontWeight:"600",display:"flex",justifyContent:"center",alignItems:"center",color:"#344054",width:"85px",height:"30px",fontSize:".8rem",border: "1px solid #D0D5DD",backgroundColor:"#FFFFFF"}}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    )
                })
               }
            </div>

        </div>
    )
}

export default MyWishListProductCard;