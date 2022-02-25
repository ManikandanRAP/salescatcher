import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import Sectionwrapper from './section6_wrapper';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import LogoImageLight from 'common/src/assets/image/hosting/logo_light.png';
import LogoImageDark from 'common/src/assets/image/hosting/logo_dark.png';
import mobileimage from 'common/src/assets/image/hosting/Pages/mobileapp/mobileapp-section6-image.png';
import shopifymage from 'common/src/assets/image/hosting/Pages/mobileapp/shopify-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const Mobileapp_section6 = ({ row, col1, col2, titlefont }) => {
  return (
    <Sectionwrapper id="mobileappp_section2">
      <Container>
        <Box {...row}>
          <Box {...col1}>
            <img src={mobileimage} alt="image"></img>
          </Box>
          <Box {...col2}>
            <Heading
              {...titlefont}
              content="100+ Shopify Plus Stores and 700+ Shopify Stores have adopted the mobile first strategy to level-up their business operations"
            />
            <div className="underline"></div>
            <div>
              <img src={shopifymage} alt="image" className="shopifyimage"></img>
            </div>
          </Box>
        </Box>
      </Container>
    </Sectionwrapper>
  );
};

Mobileapp_section6.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  title1: PropTypes.object,
  description: PropTypes.object,
  textArea: PropTypes.object,
};

Mobileapp_section6.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    // justifyContent: "start",
  },
  col1: {
    width: ['100%', '100%', '100%', '55%', '55%'],
  },
  col2: {
    width: ['100%', '100%', '100%', '45%', '45%'],
    px: ['0px', '0px', '0px', '20px', '50px'],
    pt: ['100px', '100px', '100px', '0px', '0px'],
  },
  titlefont: {
    // fontSize: "36px",
    fontSize: ['25px', '25px', '25px', '36px', '36px'],
    lineHeight: 1.42857143,
    textAlign: 'left',
    fontWeight: 700,
    color: '#0B4ABF',
  },
};

export default Mobileapp_section6;
