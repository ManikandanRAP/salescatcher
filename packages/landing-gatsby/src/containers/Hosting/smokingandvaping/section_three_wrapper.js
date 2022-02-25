import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
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
    background-color: black;
  }
  .centeralign {
    text-align: center;
    img {
      width: 100%;
    }
  }
  .hoverbox {
    border-radius: 10px;
  }
  .hoverbox:hover {
    background-color: #66bb6a;
    .hovericon {
      img {
        filter: brightness(0) invert(1);
      }
    }
    .box {
      .boxtitle h2,
      .boxdescription p {
        color: #fff !important;
      }
    }
  }
  .hovericon {
    max-width: 75px;
    img {
      width: 100%;
    }
  }
`;

export default SectionWrapper;
