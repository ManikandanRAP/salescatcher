import styled from 'styled-components';
import smokingbackground from 'common/src/assets/image/hosting/smokingandvaping/electronic-cigarette.webp';

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
`;

export default BannerWrapper;
