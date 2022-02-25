import styled from 'styled-components';

const CarouselSliderWrapper = styled.div`
  .slick-slider .slick-list div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .slick-slider .slick-slide {
    height: 100%;
  }

  .slick-slider .slick-arrow {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 1;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    outline: none;
    border: none;
    overflow: hidden;
    color: transparent;
    background-color: transparent;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    user-select: none;
  }
  .slick-slider:hover .slick-arrow {
    opacity: 1;
    visibility: visible;
  }
  .slick-slider .slick-arrow.slick-next {
    right: 2%;
  }
  .slick-slider .slick-arrow.slick-prev {
    left: 2%;
  }

  .slick-slider .slick-arrow.slick-next::after,
  .slick-slider .slick-arrow.slick-prev::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-position: center;
    background-size: contain;
    filter: brightness(0) invert(1);
    background-repeat: no-repeat;
    opacity: 0.6;
    transform: scale(0.85);
    transition: all 0.4s ease-in;
  }
  .slick-slider .slick-arrow.slick-next::after {
    content: '';
    padding-left: 5px;
  }
  .slick-slider .slick-arrow.slick-prev::after {
    content: '';
    padding-right: 5px;
  }
  .slick-slider .slick-arrow.slick-next:hover::after,
  .slick-slider .slick-arrow.slick-prev:hover::after {
    opacity: 0.9;
    transform: scale(1);
  }

  .Banner-details:hover .slick-arrow {
    opacity: 0;
    visibility: hidden;
  }
  .slick-dots {
    width: 100%;
    padding: 0;
    text-align: center;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
  }

  .slick-slider {
    position: relative;
  }

  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    padding: 5px;
    color: transparent;
    border: 0;
    outline: none;
    background: #2a9bf9;
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 50%;
  }

  .slick-dots li {
    display: inline-block;
    position: relative;
    display: inline-block;
    margin: 0 5px;
    padding: 0;
    width: 10px;
    height: 10px;
    cursor: pointer;
  }

  .slick-dots li.slick-active button {
    background: #ff6200;
  }

  .slick-list {
    overflow: hidden;
    margin-bottom: 30px;
  }

  .site-Banner {
    width: 100%;
    position: relative;
  }

  .site-Banner .Banner-details {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    width: 1110px !important;
    max-width: 90%;
    z-index: 1;
  }

  .site-Banner .Banner-details h1 {
    color: #fff;
    font-size: 45px;
    text-shadow: 0px 0px 5px #000;
  }
  .site-Banner .Banner-details p {
    color: #fff;
    font-size: 25px;
  }
  .site-Banner .Banner-details button {
    margin-top: 10px;
  }
  .site-Banner .Banner-details * {
    transition: all 1s ease;
    transition-delay: 0.5s;
    opacity: 0;
  }
  .site-Banner .Banner-details h1 {
    transform: translateY(-30px);
  }
  .site-Banner .Banner-details p,
  .site-Banner .Banner-details button {
    transform: translateY(30px);
  }
  .slick-active.slick-current .site-Banner .Banner-details * {
    transform: none;
    opacity: 1;
  }

  .slick-slider .slick-list div img {
    width: 100%;
  }

  .slick-slider .slick-list div img {
    width: 100%;
    margin: 0;
    opacity: 0;
  }

  .site-Banner .Banner-details .sub-title {
    color: #fff;
    text-shadow: 2px 2px 3px #000;
    font-size: 28px;
  }

  .site-Banner .Banner-details > div {
    max-width: 70%;
  }

  .store-page .product-main {
    margin-top: 30px;
  }

  .details-page .product-details {
    margin-top: 30px;
  }

  .with-underline {
    position: relative;
    text-align: left;
    display: inline-block;
    margin-bottom: 40px;
    padding-bottom: 8px;
  }

  .with-underline:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    left: 0;
    right: 0;
    background: #ef3d56;
    top: 100%;
  }

  /* customcss */
  .sliderImage {
    height: 100vh;
    max-height: 600px;
    min-height: 400px;
    object-fit: cover;
  }
  .slick-list {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 575px) {
    .site-Banner .Banner-details h1 {
      font-size: 22px;
    }
    .sliderImage {
      max-height: calc(100vh - 5vh);
    }
  }

  .carouselText {
    text-align: left;
    line-height: 1.75;
    padding-bottom: 25px;
    color: #252525;
    font-size: inherit;
    line-height: 1.75;
    margin-top: 20px;
  }
`;

export default CarouselSliderWrapper;
