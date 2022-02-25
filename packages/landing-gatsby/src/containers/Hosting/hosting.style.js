import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from 'styled-system';
import FeatureBlock from 'common/src/components/FeatureBlock';

export const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
  body{
    font-family: 'Roboto', sans-serif;
  }
  body::before {
    // content: "";
    width: 20px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom,#2A9BF9 0%,#FCFCFD 80%);
    z-index: 999999;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif;
  }

  section {
    position: relative;
  }
  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: linear-gradient(to bottom,#2A9BF9,#073FB7);
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          position: relative;
          @media (max-width: 767px) {
            margin-bottom: 5px;
          }
          a{
            font-size: 20px;
            font-weight: 400;
            color: #fff;
            position: relative;
            display: block;
            padding: 10px 0;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: #FF6200;
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: #FF6200;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }
          &.is-current {
            a {
              color: #FF6200;
              &:before{
                opacity: 1;
              }
            }
          }
          i {
            display: none;
            border: 1px solid #FF6200;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: #FF6200;
        transform: rotate(45deg);
        display: block;
      }
    }
  }
  

  /* Modal default style */
  button.modalCloseBtn {
    color: ${themeGet('colors.white', '#ffffff')} !important;
    
    &.alt {
      background-color: ${themeGet('colors.primary', '#5268db')} !important;
      box-shadow: 0px 9px 20px -5px rgba(82, 104, 219, 0.57) !important;
    }
  }
  
  /* commoncss */
  .LogoImageSize.header {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 235px;
    // filter: invert(1) brightness(10);
  }
  .btn.btn_secondary {
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 42px;
    min-width: 115px;
    max-width: 150px;
    padding: 0 30px;
    font-family: inherit;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 600;
    outline: 0;
    text-decoration: none;
    white-space: nowrap;
    margin: 0 auto;
    align-items: center;
    border: 1px solid #8bf6f2;
    transition: all .25s ease-out;
    .btn-text {
      color: #fff;
      font-size: 16px;
      padding: 0;
      z-index: 9;
    }
  }
  .btn.btn_secondary:hover {
    background: #8bf6f2;
    .btn-text {
      color: #3f20ba;
    }
  }
  .btn.btn_tertiary {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-decoration: none;
    outline: 0;
    font-size: 18px;
    font-family: inherit;
    font-weight: 600;
    height: 42px;
    width: 100%;
    min-width: 115px;
    max-width: 150px;
    line-height: 1.5;
    padding: 0 30px;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;
    margin: 0 auto;
    overflow: hidden;
    .btn-text {
      // color: #3f20ba !important;
      color: #fff;
      font-size: 16px;
      padding: 0;
      z-index: 9;
      transition-delay: 0.2s;
      transition: all .2s ease-in-out;
    }
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, rgb(242, 86, 99), rgb(242, 86, 99) 50%, rgb(242, 90, 137));
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      border-radius: 4px;
      transition: all .4s ease-in-out;
      z-index: 1;
    }
    &::after {
      content: "";
      width: 120%;
      height: 0;
      background: linear-gradient(to right, rgb(139, 246, 242), rgb(139, 246, 242) 50%, rgb(139, 246, 242));
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 4px;
      transition: all .4s ease-in-out;
      z-index: 1;
      border-radius: 50%;
    }
  }
  .btn.btn_tertiary:hover {
    .btn-text {
      color: #3f20ba;
    }
    &::after {
      top: -40%;
      height: 200%;
    }
  }
  // learnmore
  .btn.btn_secondary.learnMore {
    background-color: #4abdcf;
    border: 1px solid #4abdcf;
    display: inline-block;
    line-height: 2.2;
    .btn-text {
      color: #fff;
    }
  }
  .btn.btn_secondary.learnMore:hover {
    background-color: #4abdcf;
    border-color: #4abdcf;
    .btn-text {
      color: #fff;
    }
  }
  // dark
  .btn.btn_secondary.dark {
    background-color: #3f20ba;
    border: 1px solid #3f20ba;
    box-shadow: 0 0 0 1px rgba(18,21,26,0.2), 0 1px 4px 0 rgba(18,21,26,0.08), 0 1px 0 0 rgba(18,21,26,0.05);
    .btn-text {
      color: #fff;
    }
  }
  .btn.btn_secondary.dark:hover {
    background-color: #311c87;
    border-color: #311c87;
    box-shadow: 0 0 0 1px rgba(18,21,26,0.2), 0 5px 10px 0 rgba(18,21,26,0.12), 0 1px 0 0 rgba(18,21,26,0.05);
    .btn-text {
      color: #fff;
    }
  }

  .imageBox {
    width: 100%;
    height: auto;
    object-fit: contain;
    margin: 0 auto;
    padding: 0;
    display: block;
  }
  .bg_light {
    background-color: #f9fbfc;
  }
  .bg_white {
    background-color: #fff;
  }
  .bg_blue {
    background: linear-gradient(to right,#2A9BF9,#073FB7);
    .twoList {
      ul li {
        color: #fff;
      }
    }
    @media (max-width: 767px) {
      .row > div:nth-child(even) {
        order: 1;
      }
      .row > div:nth-child(odd) {
        order: 2;
      }
    }
  }
  .bg_light {
    background-color: #f9fbfc;
    @media (max-width: 767px) {
      .row > div:nth-child(even) {
        order: 1;
      }
      .row > div:nth-child(odd) {
        order: 2;
      }
    }
  }
  
  .empty_space10 {
    display: block;
    height: 10px;
  }
  .empty_space20 {
    display: block;
    height: 20px;
  }
  .neg_space15 {
    height: 0;
    margin-top: -15px;    
  }
  .text-grad {
    display: inline-block;
    background: -webkit-linear-gradient(45deg, #2A9BF9 0%, #FCFCFD 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .BannerStrip {
    width: 100%;
    height: 5px;
    background: linear-gradient(45deg, #2A9BF9, #FCFCFD 80%);
    margin-top: 5px;
    margin-bottom: 10px;
    border-radius: 2px;
    opacity: 0.8;
    &.red{
      background: linear-gradient(45deg, #FF6200, #FCFCFD 80%);
    }
  }
  .btn.btn-grad-blue {
    background: linear-gradient(150deg, #FCFCFD 0%, #2A9BF9 50%, #FCFCFD 100%);
    transition: all 0.3s ease-in-out;
    border: 0;
    background-position: right bottom;
    background-size: 260% 100%;
    color: #fff;
    padding: 10px 20px;
    border-radius: 60px;
    display: inline-block;
    .btn-text {
      font-weight: bold;
    }
  }
  .btn.btn-grad-red {
    background: linear-gradient(150deg, #C92B47 0%, #FF6200 50%, #C92B47 100%);
    transition: all 0.4s cubic-bezier(0, 0, 0.26, 1);
    border: 0;
    background-position: right bottom;
    background-size: 260% 100%;
    color: #fff;
    padding: 10px 20px;
    border-radius: 60px;
    display: inline-block;
    .btn-text {
      font-weight: bold;
    }
  }
  .btn.btn-grad-blue:hover,
  .btn.btn-grad-red:hover {
    background-position: left bottom;
    box-shadow: none;
  }
  .pb0 {
    padding-bottom: 0;
  }
  .gliderSection {
    background: linear-gradient(to right,#2A9BF9 0%,#FCFCFD 80%);
    padding: 0;
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
      bottom: -35px;
      right: 5px;
      .btn-icon {
        color: #2A9BF9;
        font-weight: bold;
        transition: all 0.3s ease;
      }
      .btn-icon:hover {
        color: #fff;
        transform: scale(1.3);
      }
      @media (max-width: 575px) {
        display: none;
      }
    }
  }
  .text-white {
    color: #fff !important
  }
  img,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    user-select: none;
  }
`;

export const ContentWrapper = styled.div`
  overflow: hidden;

  .hosting_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 20px 0;
    .main_menu {
      margin-right: 40px;
      li {
        padding: 10px 0px;
        display: inline-block;
        padding-left: 2px;
        padding-right: 2px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: #ff6200;
          }
        }
        > a {
          padding: 5px;
          font-size: 16px;
          font-weight: 400;
          // color: #252525;
          color: #fff;
          transition: 0.15s ease-in-out;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            width: 0;
            max-width: 25px;
            height: 0;
            background-color: #ff6200;
            margin: 0 auto;
            border: none;
            outline: none;
            transition: width 0.4s ease;
            border-radius: 8px;
          }
          &:hover::before {
            width: 100%;
            height: 1.5px;
          }
          &.is-current::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            max-width: 25px;
            height: 1.5px;
            // background-color: #ff6200;
            background: linear-gradient(to right, #ff6200 10%, #c3b5ba);
            margin: 0 auto;
            border: none;
            outline: none;
            border-radius: 8px;
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .LogoImageSize.header.dark {
      display: none;
    }
    .navbar_button {
      @media (max-width: 990px) {
        display: none;
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
        }
      }
    }
    @media (max-width: 575px) {
      .container {
        width: 100%;
      }
    }
  }

  &.AboutPage,
  &.ContactPage {
    .hosting_navbar {
      .main_menu {
        li {
          a {
            color: #fff;
          }
        }
      }
    }
  }

  .sticky-nav-active {
    .hosting_navbar {
      background: #fff;
      box-shadow: 0px 3px 8px 0px rgba(42, 155, 249, 0.15);
      padding: 15px 0;
      .main_menu li a {
        color: #343d48;
      }
      .main_menu li a:hover {
        color: #2a9bf9;
      }
    }
    .LogoImageSize.header.light {
      display: none;
    }
    .LogoImageSize.header.dark {
      display: block;
    }
  }

  .info-sec-container {
    @media (min-width: 768px) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
    @media (max-width: 768px) and (min-width: 768px) {
      top: 40%;
    }
    @media (max-width: 767px) {
      padding-top: 40px;
    }
  }

  .accordion_item {
    border-bottom: 1px solid #ebebeb;
    border-top: 0;
    + .accordion__item {
      border-top: 0;
    }
  }

  .accordion_title {
    padding: 23px 30px;
    @media (max-width: 575px) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .accordion_body {
    padding: 0 30px 23px 30px;
  }

  .service_section {
    background: linear-gradient(
      to bottom,
      #ffffff 0%,
      #f9fbfd 50%,
      #f9fbfd 100%
    );

    .service_col {
      border-width: 1px 0 0 1px;
      border-style: solid;
      border-color: #f1f4f6;
      &:nth-child(3n + 3),
      &:last-child {
        border-right-width: 1px;
      }
      &:nth-last-child(-n + 3) {
        border-bottom-width: 1px;
      }
      .service_item {
        position: relative;
        height: 100%;
        transition: 0.2s ease-in-out;

        &:hover {
          box-shadow: 0 40px 90px -30px rgba(39, 79, 117, 0.2);
          z-index: 1;
        }

        &:before {
          content: '';
          position: absolute;
          width: 85%;
          height: 0;
          bottom: 0;
          left: 50%;
          display: block;
          pointer-events: 0;
          transform: translateX(-50%);
        }
        &:hover {
          &:before {
            box-shadow: 0px 0px 60px 0px rgba(39, 79, 117, 0.2);
          }
        }

        img {
          width: 80px;
          height: 70px;
        }
      }
    }
  }
  .menu_has_submenu {
    position: relative;
    color: #fff;
    cursor: default;
    .sub_items {
      background: #de8050;
      border-radius: 8px;
      display: none;
      position: absolute;
      padding: 10px 8px;
      top: 100%;
      left: 0;
      width: max-content;
      .submenu_item {
        margin-top: 8px;
        a {
          color: #fff !important;
        }
      }
    }
    &:hover {
      .sub_items {
        display: block;
      }
    }
  }
  @media (max-width: 990px) {
    .glide__slide--active .pricing_table {
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
      border: 0;
    }
  }
`;

export const FeatureItem = styled(FeatureBlock)`
  position: relative;
  padding: 50px 30px;
  border: 1px solid #f2f4f7;
  border-radius: 5px;
  background-color: #fff;
  transition: 0.35s ease-in-out;
  @media (max-width: 768px) and (min-width: 768px) {
    padding: 30px 20px;
  }
  @media (max-width: 575px) {
    padding: 40px 25px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0;
    background: linear-gradient(
      138deg,
      rgb(249, 212, 35) 0%,
      rgb(255, 78, 80) 100%
    );
    transition: 0.35s ease-in-out;
  }

  & > div {
    position: relative;
  }

  h2,
  p {
    transition: 0.35s ease-in-out;
  }

  .hover-shape {
    width: 20px;
    height: auto;
    position: absolute;
    z-index: 1;
    opacity: 0;
    pointer-events: none;
    transition: 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: rotate(260deg);
  }

  .hover-shape-1 {
    left: 0;
    top: 20px;
  }

  .hover-shape-2 {
    right: 29%;
    top: 0;
  }

  .hover-shape-3 {
    right: 0;
    bottom: 35%;
  }

  .hover-shape-4 {
    right: 30%;
    bottom: 0;
  }

  .hover-shape-5 {
    left: 0;
    bottom: 30%;
  }

  .icon__wrapper {
    margin-bottom: 40px;
    @media (max-width: 768px) and (min-width: 768px) {
      margin-bottom: 30px;
    }
    @media (max-width: 575px) {
      margin-bottom: 25px;
    }
    i {
      line-height: 1;
      font-size: 65px;
      transition: 0.35s ease-in-out;
      @media (max-width: 768px) and (min-width: 768px) {
        font-size: 50px;
      }
      &.violate {
        color: #8569ff;
      }
      &.yellow {
        color: #ffb129;
      }
      &.green {
        color: #18d379;
      }
    }
  }

  .button__wrapper {
    a {
      color: #c2cbd6;
      font-size: 24px;
      transition: 0.35s ease-in-out;
      @media (max-width: 768px) and (min-width: 768px) {
        font-size: 20px;
      }
      @media (max-width: 575px) {
        font-size: 22px;
      }
    }
  }

  &:hover {
    background-color: #ff6200;
    &:before {
      opacity: 0.37;
    }

    .hover-shape-1 {
      left: -40px;
      top: 20px;
    }
    .hover-shape-2 {
      right: 29%;
      top: -47px;
    }
    .hover-shape-3 {
      right: -27px;
      bottom: 35%;
    }
    .hover-shape-4 {
      right: 30%;
      bottom: -60px;
    }
    .hover-shape-5 {
      left: -35px;
      bottom: 30%;
    }
    .hover-shape {
      transform: rotate(0);
      opacity: 1;
    }

    h2,
    p {
      color: #fff;
    }

    .icon__wrapper {
      i {
        color: #fff;
      }
    }

    .button__wrapper {
      a {
        color: #fff;
      }
    }
  }
`;
