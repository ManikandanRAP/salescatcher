import styled from 'styled-components';
import img from 'common/src/assets/image/hosting/Pages/mobileapp/section1background.png';
const Mobileapp_section1_wrapper = styled.section`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  .underline {
    margin-top: 30px;
    margin-right: 35%;
    margin-left: 35%;
    background-color: rgb(255, 255, 255);
    height: 5px;
  }
  .logoimage-mobileapp {
    width: 280px;
  }
  img {
    width: 100%;
  }
`;

export default Mobileapp_section1_wrapper;
