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
import Section2image from 'common/src/assets/image/hosting/Pages/mobileapp/mobileapp-sectiontwo.png';

// import SCtext from 'common/src/assets/image/hosting/Pages/SC TextingMessaging App.png';
import SCtextVideo from 'common/src/assets/image/hosting/Pages/videos/SC Texting-Messaging App.mp4';

import comingsoon from 'common/src/assets/image/hosting/Pages/Coming soon.png';

const InfoSection = ({
  sectionWrapper,
  row,
  col3,
  col4,
  title,
  titlesmall,
  description,
}) => {
  return (
    <>
      <Box {...sectionWrapper} className="bg_white">
        <Container>
          <InfoWrapper>
            <Box {...row}>
              <Box {...col3}>
                <Fade left cascade>
                  <img
                    className="imageBox mw550"
                    src={Section2image}
                    alt="Effortless, customizable yet powerful"
                  />
                </Fade>
              </Box>
              <Box {...col4}>
                <Fade right cascade>
                  <div>
                    <Heading {...titlesmall} content="SalesCatcher.io" />
                    <Heading
                      {...title}
                      dangerouslySetInnerHTML={{
                        __html:
                          'Effortless,<br/><b>Customizable yet Powerful</b>',
                      }}
                    />
                    <div className="BannerStrip red" />
                    <Text
                      {...description}
                      dangerouslySetInnerHTML={{
                        __html:
                          '<b><i>Zero lines of coding required.</b></i> Launch your mobile app in a day and get started with minimal to no effort.',
                      }}
                    />
                    <Text
                      {...description}
                      dangerouslySetInnerHTML={{
                        __html:
                          '​With <b><i>rich media push notifications and live selling, </b></i> you can not only boost customer engagement but also recapture your audience.',
                      }}
                    />
                    <Text
                      {...description}
                      dangerouslySetInnerHTML={{
                        __html:
                          '<b><i>Customize your mobile app to reflect your brand image in mere minutes, and offer an unparalleled shopping experience! </b></i>',
                      }}
                    />
                    <Text
                      {...description}
                      dangerouslySetInnerHTML={{
                        __html:
                          '<b><i>Build a safe and secure shopping environment for your customers</b></i> with a powerful mobile app.  ',
                      }}
                    />
                    <div className="empty_space20" />
                  </div>
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
    className: 'row',
  },
  row2: {
    flexBox: true,
    flexWrap: 'wrap',
    className: 'row',
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
