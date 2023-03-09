import React from "react";
import AboutContactCenterTex from "./AboutContactCenterTex";

const instacardImage = [
  {
    images:
      "https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?w=2000",
    icon: "lab la-instagram",
  },
  {
    images:
      "https://www.shutterstock.com/image-photo/cheerful-happy-woman-enjoying-shopping-260nw-1417347668.jpg",
    icon: "lab la-instagram",
  },
  {
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReBQZdgo0bvlsyDVMWb1fQqEjtZZUyN0l04A&usqp=CAU",
    icon: "lab la-instagram",
  },
  {
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWiLI89SuWgG5b8T3QaMtFhPYd_Ki6z8nJ_VTBIK_D1esmHWn4VPRCbCCxIMYs1Flt0k&usqp=CAU",
    icon: "lab la-instagram",
  },
  {
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs26xeUd8cweLurifSU3rF4BGxCFTJIQ6yww&usqp=CAU",
    icon: "lab la-instagram",
  },
  {
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWxa4g6bObbJb9uUbn8dX9Xf-eau_6YD65w&usqp=CAU",
    icon: "lab la-instagram",
  },
  {
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8zKV3EQSGEHLs8a6ta7XAUQsehWUFHQMJw&usqp=CAU",
    icon: "lab la-instagram",
  },
  {
    images:
      "https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA=",
    icon: "lab la-instagram",
  },
  {
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgciuQpaadjhAJYya43V7tfRzxwhz37ApqOw&usqp=CAU",
    icon: "lab la-instagram",
  },
  {
    images:
      "https://thumbs.dreamstime.com/b/happy-family-full-shopping-cart-background-happy-family-full-shopping-cart-white-background-158198465.jpg",
    icon: "lab la-instagram",
  },
  {
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIY9z25DxKJD-DUuDP2CFvNCt6dAsKGEvpWCj-GEBH8Qq_1UeF8ALCxZVOh89BUuacBZs&usqp=CAU",
    icon: "lab la-instagram",
  },
  {
    images:
      "https://media.istockphoto.com/photos/man-at-the-shopping-picture-id868718238?b=1&k=20&m=868718238&s=612x612&w=0&h=shPfBYOaH8WtXHhXoCdd-VvssikIxadxVV8y5u6C57s=",
    icon: "lab la-instagram",
  },
];

const FindUs = () => {
  return (
    <>
      <div className="whyChoose">
        <AboutContactCenterTex
          tophead="Follow Us On"
          heading="Find Us on Instagram @Flippy7"
        />

        <div className="container-fluid p-0 mt-3">
          <div className="row">
            {instacardImage.map((elem) => {
              return (
                <>
                  <div className="col followincard">
                    <div className="card afff"  style={{width:"10rem"}}>
                    <div className="instacard">
                      <img src={`${elem.images}`} alt="" />
                      <div className="blackbox"></div>
                      <i className={`${elem.icon}`}></i>
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

export default FindUs;
