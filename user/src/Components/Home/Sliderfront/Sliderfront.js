import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';
import Slider from "react-slick";

export default function Sliderfront() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
       
      };
  return (
<div className="pslider px-5">
    <div className="slider">
    <Slider {...settings} >
      
    <div className="imgggggggggg rounded-3  overflow-hidden"><img className='rounded-3  overflow-hidden px-0' src=" https://static1.bcjiaoyu.com/e1126b376ca93e686e4fe983512293a6_f.jpg-5472x3078"/></div>
    <div className="imgggggggggg rounded-3  overflow-hidden"><img className='rounded-3  overflow-hidden px-0' src=" https://static1.bcjiaoyu.com/e1126b376ca93e686e4fe983512293a6_f.jpg-5472x3078"/></div>
      <div className="imgggggggggg rounded-3  overflow-hidden"><img className='rounded-3  overflow-hidden px-0' src=" https://static1.bcjiaoyu.com/e1126b376ca93e686e4fe983512293a6_f.jpg-5472x3078"/></div>

 </Slider>
 </div>
 </div>
  )
}
