import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import Suggestion from "./suggestionproduct"
import Slider from "react-slick";

export default function Productwithsuggetion({heading, data}) {
   
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
     
    ],
  };
     
  return (
    <div className='Productwithsuggetion'>
        <div className='Productlist'>
        <div className="navCategorycomponent">
        <h1>{heading}</h1>
       <Link>View All</Link>
       </div>
      <div className="suestions">
        {Suggestion.map((ele)=>{
            return (
                <Link className='suggest'>{ele}</Link>
            )
        })}
      </div>
      
       
       
    <Slider {...settings} >
      
        {data && data.map((ele)=>{
       return (
        <div className=''>
       <div className="product shadow p-2 rounded-5"  style={{margin:"10px"}}>
        <div className="productimg">
       <i class="lar la-heart"></i>
       <img src={ele.pic} alt="" />
        </div>
       <h4>{ele.name}</h4>
       <h3>{ele.price}</h3>
       <p>{ele.type} types of shoos available</p>
       <h5>
       <ReactStars count={5} value = {ele.star}  size={24} color2={'#ffd700'} />
        ({ele.npeoples})
       </h5>
        </div>
        </div>
       )
    })}
     </Slider>


    </div>
</div> 
  )
}
