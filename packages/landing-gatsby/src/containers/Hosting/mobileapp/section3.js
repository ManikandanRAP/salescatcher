import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import Sectionwrapper from './section3_wrapper';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import LogoImageLight from 'common/src/assets/image/hosting/logo_light.png';
import LogoImageDark from 'common/src/assets/image/hosting/logo_dark.png';
import mobileimage from 'common/src/assets/image/hosting/Pages/mobileapp/mobileapp-section-1-img.png';

const Mobileapp_section3 = ({ textfont }) => {
  return (
    <Sectionwrapper id="about_banner">
      <Container className="banner_container">
        <Box>
          <Text
            {...textfont}
            content="Set foot into the world of m-commerce with the most experienced mobile app builders, and witness your online store grow and scale up with a world-class mobile app that requires absolutely no line of coding. Leverage rich media notifications to improve engagement, and offer the best shopping experience to boost customer retention with an intuitive mobile app solution."
          ></Text>
        </Box>
      </Container>
    </Sectionwrapper>
  );
};

Mobileapp_section3.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  title1: PropTypes.object,
  description: PropTypes.object,
  textArea: PropTypes.object,
};

Mobileapp_section3.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col: {
    width: ['100%', '100%', '100%', '100%', '55%'],
  },
  textfont: {
    fontSize: ['16px', '16px', '16px', '20px', '20px'],
    lineHeight: 1.5,
    textAlign: 'center',
    fontWeight: 700,
    color: 'white',
  },
};

export default Mobileapp_section3;
