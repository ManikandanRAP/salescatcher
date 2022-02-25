import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';

import { Link } from 'gatsby';
import InfoWrapper from './info.style';
import CarouselSlider1 from '../Carousel';

// images
import automotivelead from 'common/src/assets/image/hosting/Pages/Automotive Lead.svg';
import mobilecommerce from 'common/src/assets/image/hosting/Pages/mobileapp/mobileapp-section-1-img.png';
import NotAverageLead from 'common/src/assets/image/hosting/Pages/Not Your Average.png';
import digitalmarketing from 'common/src/assets/image/hosting/Pages/End-to-End-Digital-Marketing.png';
import IntelligentOffering from 'common/src/assets/image/hosting/Pages/Intelligent Offering.png';
import Analytics from 'common/src/assets/image/hosting/Pages/Analytics & Optimization.png';
import Calltoaction from 'common/src/assets/image/hosting/Pages/Call-to-Actions.png';
import Contentdriven from 'common/src/assets/image/hosting/Pages/Content Driven Messaging.png';
import EmailMarketing from 'common/src/assets/image/hosting/Pages/Email Marketing.png';
import Deliverability from 'common/src/assets/image/hosting/Pages/Deliverability.png';
import SCInteractive from 'common/src/assets/image/hosting/Pages/SC Interactive Engine.png';
// import SCtext from 'common/src/assets/image/hosting/Pages/SC TextingMessaging App.png';
import SCtextVideo from 'common/src/assets/image/hosting/Pages/videos/SC Texting-Messaging App.mp4';

import comingsoon from 'common/src/assets/image/hosting/Pages/Coming soon.png';

// slider texts
const speed25 = 2500;
const speed35 = 3000;
const speed5 = 5000;

const intelligentofferingSlider = {
  text: [
    'Real-time immediate 24/7 lead response',
    'Customer Intent - IO understands the way humans do',
    'Vehicle Match - IO searches your inventory + all other local inventory to find the perfectly matched vehicle',
    'On-the-spot-messaging - IO creates and delivers sculpted messages via email and text',
    'IO notifies sales rep when a lead is engaged and ready to convert',
    'IO integrates effortlessly to your CRM & DMS systems for fast and easy deployment',
  ],
  autoplayspeed: speed5,
};

const SCInteractiveSlider = {
  text: [
    'Hand-crafted messaging',
    'Current incentives',
    'Content-rich information',
    'Showcase inventory or locator vehicles',
  ],
  autoplayspeed: speed25,
};

const CalltoactionSlider = {
  text: [
    'Reserve Pricing',
    'Appraise Trade-in',
    'Get Pre-approved',
    'View all Current Incentives',
    'Current Lease Offers',
    'View Available Colors',
  ],
  autoplayspeed: speed35,
};

const emailmarketingSlider = {
  text: [
    'Effective campaign planning and execution',
    'Spam tested for increased deliverability',
    'Maximize ROI with advanced analytics',
    'Responsive design',
  ],
  autoplayspeed: speed25,
};

const contentdrivenSlider = {
  text: [
    'Color-matched images',
    'Vehicle specific pricing and product information',
    'Features & Benefits',
    'Incentive breakdown',
    'Pre-owned options',
    'Safety & Technology highlights',
  ],
  autoplayspeed: speed25,
};

const analyticsSlider = {
  text: [
    'Data based stats for optimization',
    'Customer engagement',
    'A/B Testing',
    'Category tags',
  ],
  autoplayspeed: speed25,
};

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
      <Box {...sectionWrapper} className="bg_white" id="Sectiontwo">
        <Container>
          <InfoWrapper>
            <Box {...row}>
              <Box {...col3}>
                <Fade left cascade>
                  <img
                    className="imageBox mw550"
                    src={automotivelead}
                    alt="automotive lead engagement"
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
                        __html: '<b>Automotive Lead Engagement</b>',
                      }}
                    />
                    <div className="BannerStrip red" />
                    <Text
                      {...description}
                      dangerouslySetInnerHTML={{
                        __html:
                          'SalesCatcher.io is the leading engagement platform in the retail automotive industry thanks to our AI-powered serverless cloud platform which is delivering new capabilities to power your lead conversions.',
                      }}
                    />
                    <div className="empty_space20" />
                    <Link to="/automotive" className="btn btn-grad-red">
                      <span className="btn-text">Learn More</span>
                    </Link>
                  </div>
                </Fade>
              </Box>
            </Box>
          </InfoWrapper>
        </Container>
      </Box>
      <Box {...sectionWrapper} className="bg_light">
        <Container>
          <InfoWrapper>
            <Box {...row}>
              <Box {...col4}>
                <Fade left cascade>
                  <div>
                    <Heading {...titlesmall} content="SalesCatcher.io" />
                    <Heading
                      {...title}
                      dangerouslySetInnerHTML={{
                        __html: '<b>Mobile Commerce</b>',
                      }}
                    />
                    <div className="BannerStrip red" />
                    <Text
                      {...description}
                      dangerouslySetInnerHTML={{
                        __html:
                          'Witness 3x increase in conversions and engage seamlessly, maximize your Shopify store revenue with a fully-integrable and scalable mobile app solution.',
                      }}
                    />
                    <div className="empty_space20" />
                    <Link to="/mobile-app" className="btn btn-grad-red">
                      <span className="btn-text">Learn More</span>
                    </Link>
                  </div>
                </Fade>
              </Box>
              <Box {...col3}>
                <Fade right cascade>
                  <img
                    className="imageBox mw550"
                    src={mobilecommerce}
                    alt="Not Your Average Lead Conversion Platform"
                  />
                </Fade>
              </Box>
            </Box>
          </InfoWrapper>
        </Container>
      </Box>
      <Box {...sectionWrapper} className="bg_white">
        <Container>
          <InfoWrapper>
            <Box {...row}>
              <Box {...col3}>
                <Fade left cascade>
                  <img
                    className="imageBox mw550"
                    src={digitalmarketing}
                    alt="End-to-End Digital Marketing"
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
                          '<b>End-to-End Digital Marketing, Website Development and Maintenance</b>',
                      }}
                    />
                    <div className="BannerStrip red" />
                    <Text
                      {...description}
                      dangerouslySetInnerHTML={{
                        __html:
                          'The customary approach with Sales & Marketing companies is to commit to producing marketing and sales materials. It does not focus on delivering outcomes and lacks a scientific approach. We offer technology-driven marketing and sales services. Consider us as your partners in the truest essence, we will do what ever it takes to get the leads flowing in to the top of your funnel. From documenting your Go-to-Market Strategy, revamping or recreating your website, all the way till strategising and executing your monthly marketing strategy. ',
                      }}
                    />
                    <div className="empty_space20" />
                    <Link to="#" className="btn btn-grad-red">
                      <span className="btn-text">Learn More</span>
                    </Link>
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
