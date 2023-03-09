import React from 'react'
import StarRatings from 'react-star-ratings';
import Footer from '../include/Footer/Footer';
import MensFilterBrand from './MensFilter/MensFilterBrand';
import MensFilterCategory from './MensFilter/MensFilterCategory';
import MensFilterColor from './MensFilter/MensFilterColor';
import MensFilterDiscountRange from './MensFilter/MensFilterDiscountRange';
import MensFilterPrice from './MensFilter/MensFilterPrice';
import MensFilterRating from './MensFilter/MensFilterRating';
// import ProductCard from '../ProductCard/ProductCard';
import "./MensWear.css"
const MensWear = () => {
  return (
    <div className='container-fluid mens_wear mt-5 px-5' >
        <div className="container-fluid mt-4 mb-4 mx-0 p-0">
            <p style={{display:"flex",justifyContent:"start",alignItems:"center",fontSize:"16px",fontWeight:"400"}}><i class="ri-home-8-line"></i> Home / Shoes / <span style={{color:"#1D2939",fontWeight:"500"}}>Man's Wear V2</span></p>
            <h2 style={{color:"#164C96",fontWeight:"700"}}>Man’s Wears</h2>
        </div>

        <div className="row p-0">
        <div class="offcanvas offcanvas-start p-0" tabindex="-1" style={{zIndex:"99999", maxWidth:"30%" ,maxHeight:"88vh",marginTop:"12vh"}} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
  <div className="container-fluid" style={{lineHeight:"4px"}}>
                        <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h4 style={{color:"#344054",fontWeight:"600",fontSize:"1.3rem"}}>FILTERS</h4>
                            <h6 style={{color:"tomato"}}>Clear All</h6>
                        </div>
                        <div className="container-fluid p-0">
                            <p style={{fontSize:".9rem"}}>10000+ Products</p>
                        </div>
                        <div className="container-fluid mt-4 mb-3" style={{border :"1px solid #DDDDDD"}}></div>
                    </div>
        </div>
                <div class="offcanvas-body">
                     <MensFilterCategory/>
                     <MensFilterRating/>
                    <MensFilterBrand/>
                    <MensFilterPrice/>
                    <MensFilterColor/>
                    <MensFilterDiscountRange/>
                </div>
     </div>
            
            <div >
             <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div className="container-fluid p-0" style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                    
                    <p style={{color:"#667085", marginBottom:"0px"}}>Showing <b style={{color:"#164C96"}} >10,000+</b> total results</p>
                </div>
                <div className="container-fluid p-0 gap-3" style={{display:"flex",justifyContent:"end",alignItems:"center"}}>
                    <h6 style={{color:"#164C96",fontSize:"1rem",marginTop:".5rem"}}>Sort by:</h6>
                    <button style={{border: "1px solid #D0D5DD",backgroundColor:"transparent",color:"#164C96"}} className='d-flex gap-3 rounded-pill py-1 px-2 '>Most Popular <i class="ri-arrow-down-s-line"></i></button>
                    <button style={{border: "1px solid #D0D5DD",backgroundColor:"transparent",color:"#164C96"}} className='d-flex gap-3 rounded-pill py-1 px-2'  data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><i class="ri-function-line"></i><i class="ri-list-unordered"></i></button>
                </div>
             </div>


              <div className="container-fluid p-0 d-flex gap-3 my-4">
                 <div className="col">
                        <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
              </div>

              {/* <div className="container-fluid p-0 d-flex gap-3 mt-3">
                 <div className="col">
                        <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
              </div>

              <div className="container-fluid p-0 d-flex gap-3 mt-3">
                 <div className="col">
                        <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
              </div>

              <div className="container-fluid p-0 d-flex gap-3 mt-3">
                 <div className="col">
                        <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
              </div>

              <div className="container-fluid p-0 d-flex gap-3 mt-3">
                 <div className="col">
                        <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
                 <div className="col">
                 <div class="card" id='dil_parent' >
                            <i id='dil' class="ri-heart-line"></i>
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" class="card-img-top" alt="..."/>
                            <div class="card-body" style={{lineHeight:"10px"}}>
                                <h6 style={{color:"#667085"}} class="card-text">Some content.</h6>
                                <h6 class="card-title">Card title</h6>
                                <p className='text-nowrap' style={{color:"#98A2B3",fontSize:"14px"}}>5 types of shoos available</p>
                                <div className='container-fluid p-0 gap-2' style={{display:"flex",justifyContent:"start",alignItems:"center"}}><StarRatings
                                rating={4.5}
                                starRatedColor="#FDB022"
                                starDimension="18px"
                                starSpacing="2px"
                                /> <span style={{fontSize:"1rem",textAlign:"center"}}>(121)</span></div>
                            </div>
                        </div>
                 </div>
              </div> */}


            </div>

        

        </div>
        <Footer/>
    </div>
  )
}

export default MensWear