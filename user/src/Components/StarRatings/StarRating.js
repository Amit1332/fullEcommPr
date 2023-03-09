import React from 'react'
import StarRatings from 'react-star-ratings';
const StarRating = () => {
  return (
   <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
       rating={4.5}
       starRatedColor="#FDB022"
       starDimension="18px"
       starSpacing="2px"
      /> <span style={{fontSize:"1rem",marginTop:".5rem"}}>(121)</span>
    </div>
  )
}

export default StarRating