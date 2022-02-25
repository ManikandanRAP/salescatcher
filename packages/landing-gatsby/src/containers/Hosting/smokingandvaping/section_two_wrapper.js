import styled from 'styled-components';
import smokingbackground from 'common/src/assets/image/hosting/smokingandvaping/marijuana.webp';

const BannerWrapper = styled.section`
  padding-top: 80px;
  padding-bottom: 50px;
  background-image: url(${smokingbackground});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  .logoimage {
    width: 100%;
    max-width: 300px;
  }
  .whitebox {
    padding: 20px 0px;
    background-color: white;
    text-align: center;
    border-radius: 20px;
    span {
      font-size: 70px;
      font-weight: 700;
      color: #66bc6a;
    }
    div p {
      font-size: 25px;
      font-weight: 700;
      color: #221c23;
    }
  }
  .arrowicon {
    position: relative;
    top: -20px;
  }
`;

export default BannerWrapper;
