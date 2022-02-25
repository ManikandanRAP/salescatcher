import styled from 'styled-components';
import img from 'common/src/assets/image/hosting/Pages/mobileapp/mobile-page-backgroundimage3.png';
const Mobileapp_section4_wrapper = styled.section`
  background-color: #fff;
  padding-top: 65px;
  padding-bottom: 65px;
  .content {
    line-height: normal;
    text-align: center;
    font-size: 20px;
    color: #2f2f2f;
    span {
      font-style: italic;
      font-weight: 700;
    }
  }
  img {
    width: 900px;
    max-width: 100%;
  }
  @media screen and (max-width: 992px) {
    .content {
      line-height: normal;
      text-align: center;
      font-size: 16px;
      color: #2f2f2f;
      span {
        font-style: italic;
        font-weight: 700;
      }
    }
  }
`;

export default Mobileapp_section4_wrapper;
