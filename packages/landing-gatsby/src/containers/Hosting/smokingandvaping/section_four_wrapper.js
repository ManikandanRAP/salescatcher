import styled from 'styled-components';
import smokingbackground from 'common/src/assets/image/hosting/smokingandvaping/marijuana-leaves.webp';

const BannerWrapper = styled.section`
  padding-top: 80px;
  padding-bottom: 50px;
  background-image: url(${smokingbackground});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  .underline {
    position: relative;
  }
  .underline:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 25%;
    bottom: -10px;
    height: 2px;
    background-color: #fff;
  }
  .centeralign {
    text-align: center;
  }
`;

export default BannerWrapper;
