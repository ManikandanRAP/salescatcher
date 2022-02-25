import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import Sectionwrapper from './section7_wrapper';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import LogoImageLight from 'common/src/assets/image/hosting/logo_light.png';
import LogoImageDark from 'common/src/assets/image/hosting/logo_dark.png';
import mobileimage from 'common/src/assets/image/hosting/Pages/mobileapp/mobileapp-sectiontwo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const Mobileapp_section7 = ({ row, titlefont, textfont }) => {
  return (
    <Sectionwrapper id="mobileappp_section7">
      <Container>
        <Box>
          <Heading
            {...titlefont}
            content="Numerous Shopify stores use mobile apps to engage with their customers, drive 
revenue and improve engagement"
          />
        </Box>
        <Box {...row}>
          <a
            className="btn btn-grad-red"
            href="https://apps.shopify.com/vajro?utm_source=intercom&amp;utm_medium=email&amp;utm_campaign=JC(mail1)"
          >
            Get a Demo now!
          </a>
        </Box>
      </Container>
    </Sectionwrapper>
  );
};

Mobileapp_section7.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  title1: PropTypes.object,
  description: PropTypes.object,
  textArea: PropTypes.object,
};

Mobileapp_section7.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    pb: '20px',
  },
  titlefont: {
    fontSize: '24px',
    fontSize: ['20px', '20px', '20px', '24px', '24px'],
    lineHeight: 1.42857143,
    textAlign: 'center',
    fontWeight: 700,
    // color: "#2F2F2F",
    color: '#000',
  },
};

export default Mobileapp_section7;
