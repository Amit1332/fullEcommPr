import React from "react";

const ContactFirst = () => {
  return (
    <>
      <div
        className="container-fluid mt-3  p-0"
        style={{ backgroundColor: "#f9Fafb" }}
      >
        <div class="row contactchatflex">
          <div class="col-7">
            <div className="card shadow-none bg-transparent">
              <div class="card-body contactfirst">
                <p class="card-text" style={{ color: "red" }}>
                  Contact Us
                </p>
                <h3 style={{ color: "black" }}>Chat to our friendly team</h3>
                <p class="card-text mb-2">
                  we'd love to hear from you Please get in touch
                </p>
              </div>
            </div>
          </div>
          <div class="col-5">
            <div className="card shadow-none bg-transparent">
              <div class="card-body contactfirst">
                <div class="row">
                  <div class="col">
                    <div class="row d-flex">
                      <div class="col-1"><i class="las la-map-marker mt-2" style={{color:"#164c96"}}></i></div>
                      <div class="col-11">
                        <span style={{color:"black"}}>Mumbai</span>
                        <p>dsafdsafsdfdgdfgdgfdsgfdss</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                  <div class="row">
                      <div class="col-1"><i class="las la-map-marker" style={{color:"#164c96"}}></i></div>
                      <div class="col-11">
                      <span style={{color:"black"}}>Mumbai</span>
                        <p>dsfafsafgfdgfdgfdgfgds</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ContactFirst;
