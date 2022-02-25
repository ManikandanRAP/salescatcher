import React from 'react';
import { Link } from 'gatsby';
import Button from 'common/src/components/Button';
import Slider from 'react-slick';

import CarouselSliderWrapper from './CarouselSlider.style';

const CarouselSlider1 = props => {
  const text = props.value.text;
  var settings = {
    dots: true,
    speed: 700,
    infinite: true,
    autoplay: true,
    autoplaySpeed: props.value.autoplayspeed,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    initialSlide: 0,
  };
  return (
    <CarouselSliderWrapper>
      <div className="slider-section">
        <Slider {...settings}>
          {text.map((item, index) => (
            <div className="item" key={index}>
              <p className="carouselText">{item}</p>
            </div>
          ))}
        </Slider>
      </div>
    </CarouselSliderWrapper>
  );
};

export default CarouselSlider1;
