import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import Sectionwrapper from './section1_wrapper';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import LogoImageLight from 'common/src/assets/image/hosting/logo_light.png';
import LogoImageDark from 'common/src/assets/image/hosting/logo_dark.png';
import mobileimage from 'common/src/assets/image/hosting/Pages/mobileapp/mobileapp-section-1-img.png';

const Mobileapp_section1 = ({ row, col, logobox, title, title2, setwidth }) => {
  return (
    <Sectionwrapper id="about_banner">
      <Container className="banner_container">
        {/* <Box {...row} {...logobox}>
          <img
            src={LogoImageLight}
            alt="SalesCatcher"
            className="logoimage-mobileapp"
          />
        </Box> */}
        <Box {...row}>
          <Box {...setwidth}>
            <Heading
              {...title}
              content="Maximize your Shopify store revenue 
with a fully-integrable and scalable 
mobile app solution"
            ></Heading>

            <div className="underline"></div>
            <Heading
              {...title2}
              content="Witness 3x increase in conversions and engage seamlessly"
            ></Heading>
          </Box>
        </Box>
        <Box>
          <img src={mobileimage} alt="SalesCatcher" />
        </Box>
      </Container>
    </Sectionwrapper>
  );
};

Mobileapp_section1.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  title1: PropTypes.object,
  description: PropTypes.object,
  textArea: PropTypes.object,
};

Mobileapp_section1.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    pt: '100px',
  },
  col: {
    width: ['100%', '100%', '90%', '100%', '55%'],
  },
  logobox: {
    pt: '100px',
  },
  setwidth: {
    width: ['100%', '100%', '100%', '100%', '90%'],
  },
  title: {
    fontWeight: 600,
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
    fontSize: ['25px', '25px', '25px', '45px', '45px'],
    textShadow: '1px 1px 1px rgba(0,0,0,0.2)',
    lineHeight: '1.3em',
    wordWrap: 'break-word',
    mt: '45px',
  },
  title2: {
    fontWeight: 500,
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
    // fontSize: "24px",
    fontSize: ['20px', '20px', '20px', '24px', '24px'],
    textShadow: '1px 1px 1px rgba(0,0,0,0.4)',
    lineHeight: 'normal',
    wordWrap: 'break-word',
    mt: '30px',
  },
};

export default Mobileapp_section1;
