import React, { useState } from "react";
import AboutContactCenterTex from "../AboutPage/AboutContactCenterTex";

const GetInTouch = () => {
  return (
    <>
      <div className="container-fluid mb-5 mt-2 d-flex flex-column align-items-center justify-content-center p-0">
      <div className="whyChoose">
         <AboutContactCenterTex tophead="Contact Us" heading="Get In Touch" paraCont="We'd Love to hear from you fill out this form"/>
         </div>
        <div className="card shadow-none getintouch">
          <div className="card-body">
          
            <form action="">
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <label for="firstname">First Name *</label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstname"
                      placeholder="Enter First Name"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <label for="lastname">Last Name *</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastname"
                      placeholder="Enter Last Name"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div class="form-group">
                    <label for="inputEmail1">Email address *</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div class="form-group">
                    <label for="inputPhone">Phone *</label>
                    <input
                      type="number"
                      class="form-control"
                      id="inputPhone"
                      aria-describedby="emailHelp"
                      placeholder="+ 1(5555) 000-0000"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div class="form-group">
                    <label for="message">Message</label>
                    <textarea
                      class="form-control"
                      id="message"
                      placeholder="Leave us Message"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="agree"
                    />
                    <label class="form-check-label" for="agree">
                     You agree our friendly <a href="">Privacy Policy</a>
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div class="form-group d-flex">
                    <input width="100%"
                    style={{backgroundColor:"#164c96", color:"white"}}
                      type="submit"
                       value="send message"
                       className="btn btn-sm w-100"
                    />
                    
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>  
      </div>
    </>
  );
};

export default GetInTouch;
