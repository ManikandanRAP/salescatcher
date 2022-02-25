import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import Sectionwrapper from './section5_wrapper';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import LogoImageLight from 'common/src/assets/image/hosting/logo_light.png';
import LogoImageDark from 'common/src/assets/image/hosting/logo_dark.png';
import mobileimage1 from 'common/src/assets/image/hosting/Pages/mobileapp/image1.png';
import mobileimage2 from 'common/src/assets/image/hosting/Pages/mobileapp/image2.png';
import mobileimage3 from 'common/src/assets/image/hosting/Pages/mobileapp/image3.png';
import mobileimage4 from 'common/src/assets/image/hosting/Pages/mobileapp/image4.png';
import mobileimage5 from 'common/src/assets/image/hosting/Pages/mobileapp/image5.png';

import { marginTop } from 'styled-system';

const Mobileapp_section5 = ({
  titlefont,
  titlewidth,
  row,
  row2,
  col1,
  col2,
  textfont,
  subtitlefont,
  column,
}) => {
  return (
    <Sectionwrapper id="about_banner">
      <Container className="banner_container">
        <Box {...row}>
          <Box {...titlewidth}>
            <Fade top cascade>
              <Text
                {...titlefont}
                content="
              Here’s what mobile apps offer to your online store"
              ></Text>
              <div className="BannerStrip red" />
            </Fade>
          </Box>
        </Box>
        {/* ====================================== */}
        <Box {...row}>
          {/* item1 */}

          <Box {...column}>
            <Fade left cascade>
              <img src={mobileimage1}></img>
              <Heading
                {...subtitlefont}
                content="Advanced analytics "
              ></Heading>
              <Text
                {...textfont}
                content=" Monitor the performance of your store to run data-driven offers on
              your store and increase sales. Keep track of your mobile app
              audience, analyze user behavior for effective retargeting and
              conversions."
              ></Text>
            </Fade>
          </Box>

          {/* item2 */}

          <Box {...column}>
            <Fade right cascade>
              <img src={mobileimage2}></img>
              <Heading {...subtitlefont} content="Integrations"></Heading>
              <Text
                {...textfont}
                content="Deliver the perfect omnichannel experience by integrating your mobile app with 40+ existing plug-ins. Enable store integrations with reward & loyalty tools, product filters, chat solutions, back to stock alerts, analytics and review platforms. "
              ></Text>
            </Fade>
          </Box>
        </Box>
        <Box {...row}>
          {/* item 3 */}
          <Box {...column}>
            <Fade left cascade>
              <img src={mobileimage3}></img>
              <Heading
                {...subtitlefont}
                content="Engaging Push notifications "
              ></Heading>
              <Text
                {...textfont}
                content="Minimize cart abandonment and recapture your customers using automated and rich media push notifications. "
              ></Text>
            </Fade>
          </Box>
          {/* item 4 */}
          <Box {...column}>
            <Fade right cascade>
              <img src={mobileimage4}></img>
              <Heading
                {...subtitlefont}
                content="Sell on Live Video for free "
              ></Heading>
              <Text
                {...textfont}
                content="Promote your products through Live Video Commerce and watch your shoppers go into a buying frenzy. Drive more conversions as your leverage impulsive customer behavior."
              ></Text>
            </Fade>
          </Box>
        </Box>
        <Box {...row}>
          {/* item 5 */}

          <Box {...column}>
            <Fade left cascade>
              <img src={mobileimage5}></img>
              <Heading
                {...subtitlefont}
                content="AI Personal Shopper "
              ></Heading>
              <Text
                {...textfont}
                content="Drive more revenue and engagement. Suggest relevant products to your customers based on their buying behavior and purchase history."
              ></Text>
            </Fade>
          </Box>
        </Box>
      </Container>
    </Sectionwrapper>
  );
};

Mobileapp_section5.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  title1: PropTypes.object,
  description: PropTypes.object,
  textArea: PropTypes.object,
};

Mobileapp_section5.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'start',
    justifyContent: 'center',
    pb: '20px',
  },
  row2: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'start',
    mt: '30px',
  },
  column: {
    width: ['100%', '100%', '50%', '50%', '50%'],
    p: '20px',
    flexBox: true,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  col1: {
    width: ['100%', '100%', '100%', '20%', '20%'],
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: ['center', 'center', 'center', 'start', 'start'],
  },
  col2: {
    width: ['100%', '100%', '100%', '80%', '80%'],
  },
  titlefont: {
    // fontSize: "32px",
    fontSize: ['25px', '25px', '25px', '32px', '32px'],
    lineHeight: 1.42857143,
    textAlign: 'center',
    fontWeight: 700,
    color: '#2F2F2F',
    fontSize: ['25px', '25px', '36px', '33px', '35px'],
    fontWeight: '500',
    color: '#2A9BF9',
    letterSpacing: '-0.025em',
    mb: '10px',
    as: 'h1',
  },
  textfont: {
    // fontSize: "18px",
    // fontSize: ["16px", "16px", "16px", "18px", "18px"],
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    lineHeight: 1.42857143,
    textAlign: ['center', 'center', 'center', 'center', 'center'],
    fontWeight: 400,
    color: '#2F2F2F',
    wordWrap: 'break-word',
    mt: '25px',
  },
  subtitlefont: {
    // fontSize: "20px",
    fontSize: ['18px', '18px', '18px', '20px', '20px'],
    lineHeight: 1.42857143,
    textAlign: ['center', 'center', 'center', 'center', 'center'],
    fontWeight: 700,
    color: '#2F2F2F',
    mt: ['15px', '15px', '15px', '15px', '15px'],
  },
  titlewidth: {
    width: 'max-content',
  },
};

export default Mobileapp_section5;
