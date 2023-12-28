import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpeg";
import ava02 from "../../../assets/images/ava-2.jpeg";
import ava03 from "../../../assets/images/ava-3.jpeg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
        The food from GoHealthy always tantalizes my taste buds. 
        I feel energetic and healthy with every meal. 
        Never disappointed with the taste and quality! 
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Rafael</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        GoHealthy's delivery is incredibly reliable. 
        Meals always arrive on time, even in adverse weather conditions. 
        It makes life so much easier.
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Marshanda</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          I love how easy it is to order from GoHealthy. 
          With just a few clicks, I can customize my order to my liking and have my favorite healthy meal delivered right to my doorstep.
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Aurelie</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;