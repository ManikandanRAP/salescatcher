import styled from 'styled-components';
import img from 'common/src/assets/image/hosting/Pages/mobileapp/mobileapp-section2-background.jpg';
const Mobileapp_section7_wrapper = styled.section`
  // background-image: url(${img});
  // background-repeat: no-repeat;
  // background-position: center center;
  // background-size: cover;
  padding-top: 65px;
  padding-bottom: 65px;
  a.button {
    margin-top: 25px;
    color: rgb(255, 255, 255);
    font-weight: 600;
    background-color: rgb(11, 74, 191);
    font-size: 26px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding-left: 25px !important;
    padding-right: 25px !important;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    border-radius: 3px;
  }
  a.button:hover {
    cursor: pointer;
    background-color: rgba(11, 74, 191, 0.8);
  }
  @media screen and (max-width: 992px) {
    a.button {
      font-size: 20px;
    }
  }
`;

export default Mobileapp_section7_wrapper;
