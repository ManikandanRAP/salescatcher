import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';

import { Link } from 'gatsby';
import InfoWrapper from './style';
import CarouselSlider1 from '../Carousel';

// images

import NotAverageLead from 'common/src/assets/image/hosting/Pages/Not Your Average.png';
import section4image from 'common/src/assets/image/hosting/Pages/mobileapp/mobilebusiness.png';
import Analytics from 'common/src/assets/image/hosting/Pages/Analytics & Optimization.png';
import Calltoaction from 'common/src/assets/image/hosting/Pages/Call-to-Actions.png';
import Contentdriven from 'common/src/assets/image/hosting/Pages/Content Driven Messaging.png';
import EmailMarketing from 'common/src/assets/image/hosting/Pages/Email Marketing.png';
import Deliverability from 'common/src/assets/image/hosting/Pages/Deliverability.png';
import SCInteractive from 'common/src/assets/image/hosting/Pages/SC Interactive Engine.png';
// import SCtext from 'common/src/assets/image/hosting/Pages/SC TextingMessaging App.png';
import SCtextVideo from 'common/src/assets/image/hosting/Pages/videos/SC Texting-Messaging App.mp4';

import comingsoon from 'common/src/assets/image/hosting/Pages/Coming soon.png';

const InfoSection = ({
  sectionWrapper,
  row,
  col,
  row2,
  col2,
  col3,
  col4,
  col5,
  col6,
  title,
  subtitle,
  titlewhite,
  titlesmall,
  description,
  descriptionwhite,
  IconDesc,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
}) => {
  return (
    <>
      <Box {...sectionWrapper} className="bg_light">
        <Container>
          <InfoWrapper>
            <Box {...row}>
              <Box {...col4}>
                <Fade left cascade>
                  <div>
                    <Heading
                      {...title}
                      dangerouslySetInnerHTML={{
                        __html:
                          'Hear from a top-performing Shopify Plus store<br/><b>that took their business mobile </b>',
                      }}
                    />
                    {/* <Heading
                      {...subtitle}
                      content="Automated 24/7 Lead Response"
                    /> */}
                    <div className="BannerStrip red" />
                    <Text
                      {...description}
                      dangerouslySetInnerHTML={{
                        __html:
                          "<b><i>Megalopolis,</b></i> a collectibles store based in Utah, is more than just the internet's definitive source for premium action figures. They are the only collectibles lifestyle brand who also offer industry news, original streaming content, and hottest new collectibles in the world. ",
                      }}
                    />
                    <Text
                      {...description}
                      dangerouslySetInnerHTML={{
                        __html:
                          '<b><i>Matt Westover,</b></i> the founder of Megalopolis, strives to collaborate with brands committed to the production and promotion of quality figures, statues, etc. They’ve partnered with industry heavyweights like Four Horsemen Toy Design and Boss Fight Studio to bring the best quality products for their customers.',
                      }}
                    />
                    <Text
                      {...description}
                      dangerouslySetInnerHTML={{
                        __html:
                          '<b><i>The store efficiently used Push Notifications on their mobile app to improve their customer engagement and in turn, sales on their mobile devices</b></i>',
                      }}
                    />
                  </div>
                </Fade>
              </Box>
              <Box {...col3}>
                <Fade right cascade>
                  <img
                    className="imageBox mw550"
                    src={section4image}
                    alt="SalesCatcher Intelligent Offering (SC/IO)"
                  />
                </Fade>
              </Box>
            </Box>
          </InfoWrapper>
        </Container>
      </Box>
    </>
  );
};

InfoSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  row2: PropTypes.object,
  col2: PropTypes.object,
  col3: PropTypes.object,
  col4: PropTypes.object,
  titlesmall: PropTypes.object,
  title: PropTypes.object,
  subtitle: PropTypes.object,
  titlewhite: PropTypes.object,
  description: PropTypes.object,
  descriptionwhite: PropTypes.object,
  IconDesc: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageAreaRow: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageWrapperOne: PropTypes.object,
  imageWrapperTwo: PropTypes.object,
};

InfoSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: '50px',
    pb: '50px',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  row2: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '50%', '50%', '50%'],
  },
  col2: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '47%', '30%', '30%', '25%'],
    className: 'col',
  },
  col3: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '50%', '55%', '55%'],
    mt: ['20px', '20px', '0px', '0px', '0px'],
  },
  col4: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '50%', '45%', '45%'],
  },
  col5: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '100%', '100%', '45%'],
  },
  col6: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '100%', '100%', '55%'],
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '42%'],
  },
  imageArea: {
    width: ['100%', '100%', '50%'],
    flexBox: true,
    flexDirection: 'row-reverse',
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    ml: '-200px',
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px',
  },
  title: {
    fontSize: ['25px', '25px', '36px', '33px', '35px'],
    fontWeight: '300',
    color: '#2A9BF9',
    letterSpacing: '-0.025em',
    mb: '10px',
    as: 'h1',
  },
  titlewhite: {
    fontSize: ['25px', '25px', '36px', '36px', '36px'],
    fontWeight: '300',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '10px',
    as: 'h1',
  },
  titlesmall: {
    fontSize: ['18px', '18px', '18px', '18px', '18px'],
    fontWeight: 'bold',
    color: '#C3B5BA',
    letterSpacing: '-0.025em',
    mb: '5px',
    as: 'h3',
  },
  subtitle: {
    fontSize: ['20px', '20px', '24px', '24px', '24px'],
    fontWeight: 'bold',
    color: '#C3B5BA',
    letterSpacing: '-0.025em',
    mt: '15px',
    mb: '5px',
    lineHeight: '1.31',
    textAlign: 'left',
    as: 'h3',
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#252525',
    lineHeight: '1.75',
    mt: '20px',
    mb: '0',
  },
  descriptionwhite: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    lineHeight: '1.75',
    mt: '20px',
    mb: '0',
  },
  IconDesc: {
    fontSize: ['16px', '16px', '14px', '14px', '14px'],
    color: '#252525',
    lineHeight: '1.4',
    mt: '10px',
    mb: '0',
    textAlign: 'center',
  },
};

export default InfoSection;
