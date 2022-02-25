import styled from 'styled-components';

const IconBoxWrapper = styled.div`
  .row {
    // justify-content: space-between;
    // justify-content: space-around;
    justify-content: center;
  }
  .col {
    img {
      width: 100%;
      height: 100%;
      max-width: 100px;
      max-height: 100px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 50%;
      object-fit: contain;
      padding: 10px;
    }
    text-align: center;
    margin: 10px 0;
  }
`;

export default IconBoxWrapper;
