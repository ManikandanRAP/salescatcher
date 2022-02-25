import styled from 'styled-components';

const SectionWrapper = styled.section`
  .underline {
    position: relative;
  }
  .underline:after {
    content: '';
    position: absolute;
    top: 105%;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    height: 2px;
    width: 80%;
    background: linear-gradient(45deg, #ff6200, #c3b5ba 80%);
  }
  .columnimage {
    width: 100%;
    max-width: 160px;
  }
  .content {
    font-size: 20px;
    text-align: center;
    font-size: 20px;
    line-height: 1.5;
    margin-top: 45px;
    span {
      font-weight: bold;
      font-style: italic;
    }
  }
  .bottommargin {
    margin-bottom: 70px;
  }
`;

export default SectionWrapper;
