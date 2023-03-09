import React from "react";
import AboutContactCenterTex from "./AboutContactCenterTex";

const WhyChooseMe = () => {
  const cardDatacust = [
    {
      icon: "las la-shipping-fast",
      heading: "Free Shipping",
      content: "loredsa hfgsa fdsgafg agf hfdg sahfgdsh afghdgsf hgdasfga",
    },
    {
      icon: "las la-credit-card",
      heading: "Free Shipping",
      content:
        "loremdsafh sdahfsahfgds ahfgsafds gafgdagfshfd gsahfgdshaf ghdgsfhg dasfga",
    },
    {
      icon: "las la-cube",
      heading: "Free Shipping",
      content:
        "lore mdsafhsdahfsa hfgdsahfgsaf dsgafgdagfsh fdgsahfgds hafghdgs hgdasfga",
    },
    {
      icon: "las la-clock",
      heading: "Free Shipping",
      content:
        "lorem dsafhsdah fsahfgdsahfgsa fdsgafgd agfshfdgsa hfgdshafgh dgsfhgdasfga",
    },
  ];
  return (
    <>
      <div className="whyChoose">
        <AboutContactCenterTex
          tophead="Why Choose Us"
          heading="We Provide Solutions to Engage Customers"
        />

        <div className="container-fluid">
          <div className="row">
            {cardDatacust.map((elem) => {
              return (
                <>
                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                      <div className="freescadicon">
                        <i class={`${elem.icon}`}></i>
                      </div>
                      <div className="headingfree">
                        <h6 style={{color:"#164c96"}}>{elem.heading}</h6>
                          <p className="card-text">
                            {elem.content.length < 30
                              ? elem.content
                              : elem.content.substring(0, 30) + "..."}
                          </p>
                      </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* <div className="customerCardfreeshipping">
        {
            cardDatacust.map((elem)=>{
            return(
                <>
                 <div className="freecardshipp">
                        <div className="freescadicon">                          
                        <i class={`${elem.icon}`}></i>
                        </div>
                        <div className="headingfree">
                                <h6>{elem.heading}</h6>
                                <div className="paraccotn">
                                    <p>{elem.content.length<50 ? elem.content : elem.content.substring(0,50)+"..."}</p>
                                </div>

                        </div>
            </div>
                
                </>
            )
            })
        }
            


    </div> */}
      </div>
    </>
  );
};

export default WhyChooseMe;
