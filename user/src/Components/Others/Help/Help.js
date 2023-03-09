import React from 'react'
import "../Help/Help.css"

function Help() {

    return (
        <>
            <div className="container-fluid  helpcontainer Other_Help" >
            <div className='container-fluid manage_addressCont text-nowrap p-0'>
                <nav className="navbar bg-body-tertiary" style={{boxShadow:"none"}}>
                    <div className="container-fluid" >
                        <a className="navbar-brand" style={{ color: "color: #1D2939", fontWeight: "600" }}>Help</a>
                        <div className="d-flex gap-2 " role="search" >
                            <button  className="btn btn-outline-success d-flex align-items-center border-0 rounded-pill text-light gap-2" style={{ background: '#164C96', textTransform: "capitalize" }} type="submit">
                                <i style={{fontSize:"1rem"}} class="ri-question-line"></i>
                                <span>Need More Help?</span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

                <div className="help-content-section horzontalScroller text-nowrap d-flex justify-content-between pt-2 overflow-auto">
                    <div className="content-section">
                        <button className='btn shadow-none text-capitalize' type='submit' >Past Orders</button> <i class="las la-arrow-right"></i>
                    </div>
                    <div className="content-section">
                        <button className='btn shadow-none text-capitalize' type='submit'>Order Status</button> <i class="las la-arrow-right"></i>
                    </div>
                    <div className="content-section">
                        <button className='btn shadow-none text-capitalize' type='submit'>Payment & Refunds</button> <i class="las la-arrow-right"></i>
                    </div>
                    <div className="content-section">
                        <button className='btn shadow-none text-capitalize' type='submit'>Exchange & Returns</button> <i class="las la-arrow-right"></i>
                    </div>
                </div>

                <div className="help-section-third pt-3">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item ">
                            <h2 class="accordion-header" id="headingOne">
                                <button style={{color:"#344054"}} class="accordion-button accordion-button-active-color" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What data do you need to migrate and what systems do you need integrated?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <p class="accordion-body">
                                    Yes, you can try us for free for 30 days. If you want, we'll provide you with a free. personalized 30-minute onboarding call to get you up and running as soon as possible. Yes, you can try us for free for 30 days. If you want, we'll provide you with a free. personalized 30-minute onboarding call to get you up and running as soon as possible.
                                </p>
                            </div>
                        </div>
                        <div class="accordion-item pt-3">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Who is responsible for your Digital Marketing & Visuals?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <p class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </p>
                            </div>
                        </div>
                        <div class="accordion-item pt-3">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">
                                    What types of marketing activities do you do?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <p class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </p>
                            </div>
                        </div>
                        <div class="accordion-item pt-3">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">
                                    On what platforms do you run your digital marketing campaigns?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <p class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </p>
                            </div>
                        </div>
                        <div class="accordion-item pt-3">
                            <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseTwo">
                                    Do you have professional photos of your products?
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <p class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </p>
                            </div>
                        </div>
                        <div class="accordion-item pt-3">
                            <h2 class="accordion-header" id="headingSix">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseTwo">
                                    Are creatives done in-house or outsourced to agencies/freelancers?
                                </button>
                            </h2>
                            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <p class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </p>
                            </div>
                        </div>
                        <div class="accordion-item pt-3">
                            <h2 class="accordion-header" id="headingSeven">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseTwo">
                                    Do you have videos of your products/services?
                                </button>
                            </h2>
                            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                <p class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="help_footer px-2">
                    <h1>Need More Help?</h1>
                    <h6>Reselling, Refer & Earn, Account Related, Rewards</h6>
                </div>


            </div>
        </>
    )
}

export default Help