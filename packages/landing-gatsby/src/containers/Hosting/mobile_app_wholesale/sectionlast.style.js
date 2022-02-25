import styled from 'styled-components';
import img from 'common/src/assets/image/hosting/mobileapp_wholesale/lastsection_bg_image.webp';

const Mobileapp_section3_wrapper = styled.section`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  padding-top: 40px;
  padding-bottom: 20px;
  .underline {
    position: relative;
  }
  .underline:after {
    content: '';
    position: absolute;
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    height: 2px;
    width: 50%;
    background: linear-gradient(45deg, #ff6200, #c3b5ba 80%);
  }
`;

export default Mobileapp_section3_wrapper;
