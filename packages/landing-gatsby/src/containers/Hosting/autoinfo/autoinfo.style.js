import styled from 'styled-components';

const InfoWrapper = styled.div`
  .mw550 {
    max-width: 500px;
    max-height: 500px;
    object-fit: contain;
  }
  .mw450 {
    max-width: 425px;
    max-height: 425px;
    object-fit: contain;
  }
  .mw-125 {
    width: 100%;
    max-width: 125px;
    object-fit: contain;
  }
  .mt-5 {
    margin-top: 5px;
  }
  .mt-10 {
    margin-top: 10px;
  }
  .alignCenter {
    align-items: center;
  }
  .cardBox {
    > div {
      justify-content: center;
      .col {
        padding: 25px 15px;
        box-shadow: 4px 6px 18px rgba(171, 171, 180, 0.24);
        border-radius: 4px;
        margin: 10px 1%;
        position: relative;
        transition: transform 0.3s ease-in-out;
      }
      .col:nth-child(2),
      .col:nth-child(5) {
        top: 20px;
        @media (max-width: 1119px) {
          top: 0;
        }
      }
      .col:hover {
        transform: translateY(-10px);
      }
    }
    .imageBox {
      // border-radius: 50%;
      width: 60px;
      height: 60px;
      padding: 0;
      // object-fit: contain;
    }
    @media (max-width: 1119px) {
      margin-top: 30px;
    }
  }
  .twoList {
    display: flex;
    margin-left: 30px;
    margin-top: 30px;
    @media (max-width: 768px) {
      margin-left: 15px;
      flex-direction: column;
    }
    ul {
      width: auto;
      min-width: 50%;
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      li {
        text-align: left;
        list-style-type: disc;
        display: list-item;
        padding: 5px 0;
      }
    }
  }

  @media (max-width: 768px) {
    .imageBox.mw550 {
      max-width: 100%;
      max-height: 400px;
      object-fit: contain;
      margin: 40px 0;
      margin-top: 0;
      padding: 0;
    }
  }
  .text-blue {
    color: #073fb7;
  }
  .BannerStrip.red {
    background: linear-gradient(45deg, #ff6200, #c3b5ba 80%);
  }
  .comingsoonbox {
    position: relative;
    img {
      position: absolute;
      right: -10px;
      top: -7px;
    }
  }
`;

export default InfoWrapper;
