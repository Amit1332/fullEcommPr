import React from "react";

const HappyCustomer = () => {
  const HappyCust = [
    {
      icon: "ri-star-line",
      Heading: "15 Year",
      content: "Experience",
    },
    {
      icon: "las la-cube",
      Heading: "120 K",
      content: "Total Products",
    },
    {
      icon: "ri-heart-line",
      Heading: "90 K",
      content: "Happy Customers",
    },
    {
      icon: "las la-check-circle",
      Heading: "60 K",
      content: "Completed Orders",
    },
  ];

  return (
    <>
      <div className="HappyCustomer">
        <div className="container-fluid">
          <div className="row happyflowwrp">
            {HappyCust.map((elem) => {
              return (
                <>
                  <div className="col">
                    <div className="row">
                      <div className="col-2">
                        {" "}
                        <div className="happyicon">
                          <i class={`${elem.icon}`}></i>
                        </div>
                      </div>
                      <div className="col-10">
                        <div className="happycontent">
                          <h6>{elem.Heading}</h6>
                          <p>{elem.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HappyCustomer;
