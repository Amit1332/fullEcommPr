import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function CategoryComponent({ headding, catdata }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
     
    ],
  };
  return (
    <>
      <div className="CategoryComponent">
        <div className="navCategorycomponent">
          <h1>{headding}</h1>
          <Link>View All</Link>
        </div>
        <Slider {...settings} className="d-flex align-items-center justify-content-center">
         {catdata &&
            catdata.map((element, index) => {
              return (
                <>
                  <div className="d-flex align-items-center justify-content-center">
                  <div
                    className="cardforcategory"
                    style={{ backgroundImage: `url(${element.pic})` }}
                  >
                    <p key={index}>{element.cat}</p>
                    <div className="blurview">
                      <p>
                        <span>View All</span>
                        <i class="las la-arrow-right"></i>
                      </p>
                    </div>
                  </div>
                    </div>

                </>
              );
            })}
        </Slider>
      </div>
    </>
  );
}
