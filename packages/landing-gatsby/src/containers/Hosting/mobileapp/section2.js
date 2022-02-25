import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import Sectionwrapper from './section2_wrapper';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import LogoImageLight from 'common/src/assets/image/hosting/logo_light.png';
import LogoImageDark from 'common/src/assets/image/hosting/logo_dark.png';
import mobileimage from 'common/src/assets/image/hosting/Pages/mobileapp/mobileapp-sectiontwo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const Mobileapp_section2 = ({ row, col1, col2, blockdisplay }) => {
  return (
    <Sectionwrapper id="mobileappp_section2">
      <Container>
        <Box {...row}>
          <Box {...col1}>
            <Box {...blockdisplay}>
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                className="righticon"
              />
              <p className="content">
                <span>Zero lines of coding required.</span> Launch your mobile
                app in a day and get started with minimal to no effort.
              </p>
            </Box>
            <Box {...blockdisplay}>
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                className="righticon"
              />
              <p className="content">
                With{' '}
                <span> rich media push notifications and live selling,</span>
                you can not only boost customer engagement but also recapture
                your audience.
              </p>
            </Box>
            <Box {...blockdisplay}>
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                className="righticon"
              />
              <p className="content">
                <span>
                  {' '}
                  Customize your mobile app to reflect your brand image in mere
                  minutes, and offer an unparalleled shopping experience!{' '}
                </span>
              </p>
            </Box>
            <Box {...blockdisplay}>
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                className="righticon"
              />
              <p className="content">
                <span>
                  Build a safe and secure shopping environment for your
                  customers
                </span>
                with a powerful mobile app.
              </p>
            </Box>
          </Box>
          <Box {...col2}>
            <img src={mobileimage} alt="image"></img>
          </Box>
        </Box>
      </Container>
    </Sectionwrapper>
  );
};

Mobileapp_section2.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  title1: PropTypes.object,
  description: PropTypes.object,
  textArea: PropTypes.object,
};

Mobileapp_section2.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    // justifyContent: "start",
  },
  col1: {
    width: ['100%', '100%', '100%', '40%', '40%'],
  },
  col2: {
    width: ['100%', '100%', '100%', '60%', '60%'],
  },
  blockdisplay: {
    flexBox: true,
  },
};

export default Mobileapp_section2;
