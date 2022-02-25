import styled from 'styled-components';

const AboutWrapper = styled.div`
  .image {
    width: 100%;
    height: 100%;
    max-width: 45%;
    max-height: 100%;
    object-fit: cover;
    float: left;
    margin-right: 25px;
    padding-top: 10px;
  }
  .aboutContainer {
    overflow: auto;
    overflow-x: hidden;
  }
  @media only screen and (max-width: 575px) {
    .image {
      max-width: 100%;
      float: none;
      margin: 30px auto;
      padding-top: 0;
    }
  }
`;

export default AboutWrapper;
