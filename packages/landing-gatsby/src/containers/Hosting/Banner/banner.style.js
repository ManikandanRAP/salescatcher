import styled from 'styled-components';

const BannerWrapper = styled.section`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  // min-height: 600px;
  // max-height: 800px;
  display: flex;
  align-items: center;
  padding-top: 35px;
  background-attachment: fixed;
  background-color: #4abdcf;
  position: relative;
  @media (max-width: 678px) {
    height: 100%;
    max-height: 100%;
  }
  .particle {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 4;
    @media (max-width: 767px) {
      display: none;
    }
  }
  .banner_container {
    // position: relative;
    z-index: 2;
    a {
      color: #fff;
    }
  }
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 15%,
      rgba(0, 0, 0, 0.7)
    );
    opacity: 0.55;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }
  &#banner_section {
    background-color: #666666;
  }
  &#banner_section2 {
    background-color: #666666;
    .boxContainer {
      margin-left: auto;
      margin-right: auto;
      padding-left: 30px;
      padding-right: 30px;
      width: 100%;
      z-index: 4;
      @media (min-width: 768px) {
        max-width: 750px;
      }
      @media (min-width: 992px) {
        max-width: 970px;
      }
      @media (min-width: 1220px) {
        max-width: 1170px;
      }
    }
    .glide__slides {
      .glide__slide h2 {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }
      .glide__slide.glide__slide--active h2 {
        opacity: 1;
      }
    }
    .glide__controls {
      position: absolute;
      // top: 50%;
      // right: -80px;
      // transform: translateY(-50%) rotate(90deg);
      bottom: -10px;
      right: -15px;
      .btn-icon {
        color: #fff;
        font-weight: bold;
      }
      .btn-icon:hover {
        color: #4abdcf;
      }
      @media (max-width: 575px) {
        display: none;
      }
    }
  }
  &#banner_section3 {
    background-image: none;
    background-color: #4abdcf;
    height: auto;
    min-height: auto;
    max-height: initial;
    padding-top: 60px;
    padding-bottom: 60px;
    &::after {
      z-index: -1;
    }
  }
  &#banner_home_section {
    background-image: none;
    padding-top: 80px;
    padding-bottom: 40px;
    background-color: #fff;
    background: linear-gradient(to right, #2a9bf9, #073fb7);
    &::after {
      z-index: -1;
    }
    .BannerStrip {
      margin-top: 0;
    }
    .col {
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .imgBox {
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        max-width: 100%;
        margin: 30px auto;
        display: block;
      }
    }
    .row {
      position: relative;
      .bannerText {
        z-index: 5;
        user-select: none;
        transition: all 0.3s ease;
      }
    }
  }
  @media (min-width: 768px) and (max-height: 800px) {
    &#banner_home_section {
      min-height: 100vh;
    }
  }
  @media (max-width: 767px) {
    &#banner_home_section {
      opacity: 1;
      padding-top: 100px;
      padding-bottom: 30px;
      min-height: 100vh;
      .row > div:nth-child(even) {
        order: 2;
        // display: none;
      }
      .row > div:nth-child(odd) {
        order: 1;
        padding-bottom: 30px;
        margin: 0;
      }
    }
  }
  &#about_banner,
  &#contact_banner {
    height: auto;
    min-height: auto;
    max-height: initial;
    .particle {
      z-index: 3;
    }
  }
  &#about_banner {
    padding-top: 110px;
    padding-bottom: 90px;
  }
  &#contact_banner {
    padding-top: 100px;
    padding-bottom: 60px;
  }
  &#about_banner,
  &#contact_banner {
    background: linear-gradient(to bottom, #073fb7, #2a9bf9);
    &::after {
      z-index: -1;
    }
  }
  .BannerStrip {
    width: 100%;
    height: 5px;
    background: linear-gradient(45deg, #2a9bf9, #fcfcfd 80%);
    margin-top: 5px;
    margin-bottom: 10px;
    border-radius: 2px;
    opacity: 0.8;
  }
  .particle {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .gatsby-image-wrapper img {
    top: -25px !important;
  }
  .yellow-text {
    color: #e1b107;
  }
`;

export default BannerWrapper;
