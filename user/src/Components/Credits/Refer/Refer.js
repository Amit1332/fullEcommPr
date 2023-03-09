import React from "react";
import "../Refer/Refer.css";
import referimg from "./referimg.PNG";
import ReferLastOne from "./ReferLastOne.PNG";
import ReferLastTwo from "./ReferLastTwo.PNG";
import ReferLastThree from "./ReferLastThree.PNG";

function Refer() {
  return (
    <>
      <div className="container-fluid aa w-100 m-0 mt-4 pt-4 p-3" style={{backgroundColor:"white"}} >
        <div className="refer-heading ">
          {/* <h3>Refer & Earn</h3> */}
          <div className="term-nav-left mt-3"> <h3>Refer & Earn</h3></div>
        </div>

        <div className="refer-second-main d-flex gap-3">
          <div className="refer-second d-flex">
            <div className="refer-second-left d-flex flex-column justify-content-between">
              <div className="refer-second-text">
                <h3 className="">Refer & Earn</h3>
                <p>
                  30% Of Your"s Friend's First Order (Max*300 cash Per Friend)
                </p>
              </div>
              <button>Refer a Friend</button>
            </div>
            <div className="refer-second-right">
              <img src={referimg} alt="" />
            </div>
          </div>

          <div className=" shadow-0 text-capitalize col refer-second-main-right">
            <i class="las la-gift"></i>
            <div className="refer-second-main-right-text">
              <h3>₹109.00</h3>
              <p>Total Referral Amount</p>
            </div>
          </div>
        </div>

        <div className="refer-last mt-5">
          <div className="refer-last-text">
            <h3>How It's Work</h3>
          </div>
          <div className="refer-last-imgcontent">
            <div className="refer-last-contentsall ">
              <img className="img--1" src={ReferLastOne} alt="" />
              <h5>Your friend registers using your referral link</h5>
            </div>
            <div className="refer-last-contentsall">
              <img src={ReferLastTwo} alt="" />
              <h5>They make a qualifying purchases fo 300 Rs within 30days</h5>
            </div>
            <div className="refer-last-contentsall">
              <img src={ReferLastThree} alt="" />
              <h5>Each of you receive 70Rs to your account balance</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Refer;
