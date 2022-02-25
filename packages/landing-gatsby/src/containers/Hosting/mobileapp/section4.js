import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import Sectionwrapper from './section4_wrapper';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import LogoImageLight from 'common/src/assets/image/hosting/logo_light.png';
import LogoImageDark from 'common/src/assets/image/hosting/logo_dark.png';
import mobileimage from 'common/src/assets/image/hosting/Pages/mobileapp/mobileapp-section4-image.png';
import { marginTop } from 'styled-system';

const Mobileapp_section4 = ({ titlefont, titlewidth, row }) => {
  return (
    <Sectionwrapper id="about_banner">
      <Container className="banner_container">
        <Box {...row}>
          <Box {...titlewidth}>
            <Text
              {...titlefont}
              content="
            Hear from a top-performing Shopify Plus store that 
            took their business mobile"
            ></Text>
          </Box>
        </Box>
        <Box {...{ marginTop: '35px' }}>
          <p className="content">
            <span>Megalopolis, </span>a collectibles store based in Utah, is
            more than just the internet's definitive source for premium action
            figures. They are the only collectibles lifestyle brand who also
            offer industry news, original streaming content, and hottest new
            collectibles in the world.
          </p>
        </Box>
        <Box {...{ marginTop: '35px' }}>
          <p className="content">
            <span> Matt Westover, </span>the founder of Megalopolis, strives to
            collaborate with brands committed to the production and promotion of
            quality figures, statues, etc. They’ve partnered with industry
            heavyweights like Four Horsemen Toy Design and Boss Fight Studio to
            bring the best quality products for their customers.
          </p>
        </Box>
        <Box {...{ marginTop: '35px' }}>
          <p className="content">
            <span>
              {' '}
              The store efficiently used Push Notifications on their mobile app
              to improve their customer engagement and in turn, sales on their
              mobile devices
            </span>
          </p>
        </Box>
        <Box {...{ marginTop: '70px', ...row }}>
          <img src={mobileimage} alt="image"></img>
        </Box>
      </Container>
    </Sectionwrapper>
  );
};

Mobileapp_section4.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  title1: PropTypes.object,
  description: PropTypes.object,
  textArea: PropTypes.object,
};

Mobileapp_section4.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col: {
    width: ['100%', '100%', '90%', '100%', '55%'],
  },
  titlefont: {
    // fontSize: "32px",
    fontSize: ['25px', '25px', '25px', '32px', '32px'],
    lineHeight: 1.42857143,
    textAlign: 'center',
    fontWeight: 700,
    color: '#2F2F2F',
  },
  textfont: {
    fontSize: '20px',
    lineHeight: 1.42857143,
    textAlign: 'center',
    fontWeight: 700,
    color: '#2F2F2F',
  },
  titlewidth: {
    width: ['100%', '100%', '100%', '90%', '90%'],
  },
};

export default Mobileapp_section4;
