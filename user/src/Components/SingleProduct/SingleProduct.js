import React, { useState } from 'react'
import { Routes, Link, Route } from 'react-router-dom';
import StarRating from '../StarRatings/StarRating'
import Tabs from "../Tabs/Tabs";
import Description from './Description/Description';
import Review from './Review/Review';
import "./SingleProduct.css"
import Slider from "react-slick";
import Footer from '../include/Footer/Footer';
import Productlisthome from './Productlisthome';
import Productdata from './Productdata';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const SingleProduct = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  const productabs = [
    {
      tabname: "Description",
      tabId: "1",
    },
    {
      tabname: "Review",
      tabId: "2",
    },

  ]
  const [tebs, settabs] = useState('1');
  return (
    <div className='container-fluid singleProduct mt-5' style={{ paddingBottom: "5rem" }}>
      <div className="container-fluid text-nowrap" id="tabnav" >
        <div className="container-fluid">
          <p >Electronics / Shoes / Man's Wear Shop / Shoes by type / <b>Puma-Shoes</b></p>
        </div>
        <div className="container-fluid">
          <h6 id='tabnavh6' >V01</h6>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container-fluid d-flex gap-5" id='top_Row'>
          <div className="col-6" id='product_img' >
            <div className="container-fluid p-0" id='dil_parent'>
              <i id='dil' class="ri-heart-line"></i>
              <i id='search_icon' class="ri-search-line"></i>
              <img id='img_first_main' className='rounded-5' src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>

            <div className="row mt-3 " style={{gap:'5px'}} id='big_img_bottom_img'>
              <div className="col img_div_single_project   h-100">
                  <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80" className='w-100 h-100' style={{objectFit:"cover"}} alt="" />
              </div>
              <div className="col img_div_single_project  h-100">
                  <img src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" className='w-100 h-100' style={{objectFit:"cover"}} alt="" />
              </div>
              <div className="col img_div_single_project  h-100">
                  <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className='w-100 h-100' style={{objectFit:"cover"}} alt="" />
              </div>
              <div className="col img_div_single_project  h-100">
                  <img src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80" className='w-100 h-100' style={{objectFit:"cover"}} alt="" />
              </div>
            </div>
          </div>

          <div className="col-5 p-0 imgdetails ">
            <div className="container-fluid p-0">
              <div className="container-fluid p-0 socialsit " style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h1 className='text-nowrap puma' >Puma ACG Air Zoom</h1>
                <div className="container-fluid  socialsit_icon " >
                  <h5 style={{ fontSize: "14px" }} className='text-nowrap' >Share On :</h5>
                  <button className='border' >
                    <a href="#"><i style={{ color: "#344054" }} class="ri-facebook-circle-line"></i></a>
                  </button>
                  <button className='border' >
                    <a href=""><i style={{ color: "#344054" }} class="ri-instagram-line"></i></a>
                  </button>
                  <button className='border' >
                    <a href=""><i style={{ color: "#344054" }} class="ri-mail-line"></i></a>
                  </button>
                  <button className='border' >
                    <a href=""><i style={{ color: "#344054" }} class="ri-links-line"></i></a>
                  </button>
                </div>
              </div>
              <div className="container-fluid p-0 ddddd">
                <div className="container-fluid p-0 view_more" >
                  <p >
                    A perfect balance of exhilarating high-fidelity audio and the <br />
                    effortless magic of AirPods.
                  </p>
                  <a href="" style={{ color: "tomato", fontSize: "14px" }}>View More</a>
                </div>
                <div className="container-fluid p-0 ">
                  <StarRating />
                </div>
              </div>
              <div className="container-fluid mt-3 mb-3 " style={{ border: "1px solid #EAECF0" }}></div>

              <div className="container-fluid p-0">
                <div className="container-fluid d-flex gap-3 p-0" style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                  <span style={{ color: "#1D2939", fontWeight: "700", fontSize: "1.3rem" }}>₹887</span><span style={{ color: "#98A2B3", fontSize: "1rem" }}>MRP ₹3699</span> <span style={{ color: "tomato", fontSize: "1rem" }}>(76% Off)</span>
                </div>
                <div className="container-fluid p-0 inclusiv_tax">
                  <h6 >inclusive of all taxes</h6>
                </div>
              </div>
              <div className="container-fluid mt-3 mb-3 " style={{ border: "1px solid #EAECF0" }}></div>
              <div className="container-fluid p-0 choose_color mb-2">
                <h5>Choose a Color</h5>
                <div className="container-fluid p-0 d-flex text-start gap-2 py-1" >
                  <div id='circle'>
                    <div id='colorBox' style={{ backgroundColor: "#E2544B" }}></div>
                  </div>
                  <div id='circle'>
                    <div id='colorBox' style={{ backgroundColor: "#3D3D3B" }}></div>
                  </div>
                  <div id='circle'>
                    <div id='colorBox' style={{ backgroundColor: "#AEBFAC" }}></div>
                  </div>
                  <div id='circle'>
                    <div id='colorBox' style={{ backgroundColor: "#D1D3D5" }}></div>
                  </div>
                  <div id='circle'>
                    <div id='colorBox' style={{ backgroundColor: "#30506C" }}></div>
                  </div>
                </div>
              </div>

              <div className="container-fluid p-0" >
                <div className="container-fluid p-0 d-flex gap-3">
                  <h5 style={{ color: "#1D2939", fontWeight: "600" }}>Select Size</h5> <span style={{ color: "tomato", fontSize: "1rem" }}> <u>Size Chart</u> </span>
                </div>
                <div className="container-fluid p-0 d-flex text-start gap-2" >
                  <div id='circle'>10</div>
                  <div id='circle'>11</div>
                  <div id='circle'>11.5</div>
                  <div id='circle'>12</div>
                  <div id='circle'>12.5</div>
                  <div id='circle'>13</div>
                  <div id='circle'>13.5</div>
                  <div id='circle'>14</div>
                </div>
              </div>
              <div className="container-fluid mt-3 mb-3 " style={{ border: "1px solid #EAECF0" }}></div>
              <div className="container-fluid d-flex gap-3 p-0">
                <p className='d-flex gap-4  px-4 py-2 rounded-pill' style={{ width: "fit-content", backgroundColor: "#F2F4F7" }}><span style={{ cursor: "pointer" }}>-</span><span>1</span><span style={{ cursor: "pointer" }}>+</span></p>
                <p style={{ color: "#667085" }}>Only <span style={{ color: "tomato" }}>12 Items</span> Left! <br />Don't miss it</p>
              </div>
              <div className="container-fluid d-flex gap-2 p-0 my-2 ">
                <button className='rounded-pill  text-nowrap purchage_btn' style={{ backgroundColor: "#164c96", color: "white" }} >Buy Now</button>
                <button className='rounded-pill  text-nowrap purchage_btn'  >Add To Cart</button>
              </div>

              <div className="container-fluid mt-3 p-3 seller_store" >
                <div className="container-fluid" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h6 >Seller Store</h6>
                  <button className='rounded-pill shop_descryption'>Shop Direction</button>
                </div>
                <div className="container-fluid d-flex seller_bottom" style={{ display: "flex", justifyContent: "start", alignItems: "center", lineHeight: ".5rem" }}>
                  <img src="https://images.unsplash.com/photo-1568954264801-622ec5bd5cd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                  <div className="container-fluid">
                    <h6 >JMV Shoes</h6>
                    <div className="container-fluid d-flex gap-2 p-0">
                      <p id='no_of_product' className='text-nowrap'>10,000+ Products</p><span style={{ fontSize: ".5rem" }}><i class="ri-record-circle-line"></i></span><p className='d-flex gap-1 rating'><span className='rating_followers_number'>3.5</span>Ratings</p><span style={{ fontSize: ".5rem" }}><i class="ri-record-circle-line"></i></span><p className='d-flex gap-1 rating'><span className='rating_followers_number'>30k</span>Followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <ul className="nav nav-tabs mb-2" id="ex2" role="tablist" style={{ marginBottom: '-20px', height: '100%' }}>
        {
          productabs.map((elem) => {
            return (
              <>
                <li className="p-1" role="presentation">
                  <Link
                    className={tebs === `${elem.tabId}` ? `nav-link text-capitalize bg-transparent active` : `text-capitalize nav-link `}
                    id="ex3-tab-2"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-2"
                    role="tab"
                    style={tebs === `${elem.tabId}` ? (
                      { fontWeight: '600', fontSize: '16px', lineHeight: '24px', color: '#164C96' }
                    ) : (
                      { fontWeight: '600', fontSize: '16px', lineHeight: '24px', color: '#667085' }
                    )}
                    onClick={() => { settabs(`${elem.tabId}`) }}
                    aria-controls="ex3-tabs-2"
                  >
                    <span style={{ fontWeight: '100' }}>

                      <i className={`${elem.icon1}`} style={{ fontSize: '18px', marginRight: '5px' }}></i>
                    </span>
                    {elem.tabname}
                    <span class="badge rounded-pill" style={{ backgroundColor: "#FEF4E9", color: "#D94A27" }}>{elem.orCount}</span>
                  </Link>

                </li>
              </>
            )
          })
        }

      </ul>


      <div className="tab-content w-100 mt-3" id="ex2-content">
        {tebs === '1' ? (
          <div className='overflow-auto container-fluid px-0 ttscrollbar'>

            <Description />
          </div>
        ) : ""}
        {tebs === '2' ? (
          <div>
            <Review />
          </div>
        ) : console.log(tebs)}

      </div>


      <Productlisthome heading="Similar Items You Might Also Like" data={Productdata}/>
      <Footer/>
    </div>
  )
}

export default SingleProduct