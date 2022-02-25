import styled from 'styled-components';
import img from 'common/src/assets/image/hosting/Pages/mobileapp/mobileapp-section2-background.jpg';
const Mobileapp_section2_wrapper = styled.section`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding-top: 65px;
  padding-bottom: 65px;
  img {
    width: 100%;
  }
  .righticon {
    margin-right: 10px;
    margin-top: 5px;
  }
  .content {
    font-size: 18px;
    color: #2f2f2f;
    span {
      font-style: italic;
      font-weight: 700;
    }
  }
  p {
    margin-top: 0px;
  }
`;

export default Mobileapp_section2_wrapper;
