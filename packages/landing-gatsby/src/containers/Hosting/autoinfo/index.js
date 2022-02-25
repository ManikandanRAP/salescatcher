import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';

import { Link } from 'gatsby';
import InfoWrapper from './autoinfo.style';
import CarouselSlider1 from '../Carousel';

// images
import automotivelead from 'common/src/assets/image/hosting/Pages/Automotive Lead.svg';
import mobilecommerce from 'common/src/assets/image/hosting/Pages/mobileapp/mobileapp-section-1-img.png';
import NotAverageLead from 'common/src/assets/image/hosting/Pages/Not Your Average.png';
import IntelligentOffering from 'common/src/assets/image/hosting/Pages/Intelligent Offering.png';
import Analytics from 'common/src/assets/image/hosting/Pages/Analytics & Optimization.png';
import Calltoaction from 'common/src/assets/image/hosting/Pages/Call-to-Actions.png';
import Contentdriven from 'common/src/assets/image/hosting/Pages/Content Driven Messaging.png';
import EmailMarketing from 'common/src/assets/image/hosting/Pages/Email Marketing.png';
import Deliverability from 'common/src/assets/image/hosting/Pages/Deliverability.png';
import SCInteractive from 'common/src/assets/image/hosting/Pages/SC Interactive Engine.png';
// import SCtext from 'common/src/assets/image/hosting/Pages/SC TextingMessaging App.png';
import endtoend from 'common/src/assets/image/hosting/Pages/End-to-End-Digital-Marketing.png';
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
      {/* <Box {...sectionWrapper} className="bg_white" id="Sectiontwo">
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
                        __html: "Automotive Lead<br/><b>Engagement</b>",
                      }}
                    />
                    <div className="BannerStrip red" />
                    <Text
                      {...description}
                      dangerouslySetInnerHTML={{
                        __html:
                          "SalesCatcher.io is the leading engagement platform in the retail automotive industry thanks to our AI-powered serverless cloud platform which is delivering new capabilities to power your lead conversions.",
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
                        __html: "Mobile<br/><b>Commerce</b>",
                      }}
                    />
                    <div className="BannerStrip red" />
                    <Text
                      {...description}
                      dangerouslySetInnerHTML={{
                        __html:
                          "Witness 3x increase in conversions and engage seamlessly, maximize your Shopify store revenue with a fully-integrable and scalable mobile app solution.",
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
                    src={endtoend}
                    alt="Not Your Average Lead Conversion Platform"
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
                          "End-to-End Digital Marketing, <br/><b>Website Development and Maintenance</b>",
                      }}
                    />
                    <div className="BannerStrip red" />
                    <Text
                      {...description}
                      dangerouslySetInnerHTML={{
                        __html:
                          "The customary approach with Sales & Marketing companies is to commit to producing marketing and sales materials. It does not focus on delivering outcomes and lacks a scientific approach. We offer technology-driven marketing and sales services. Consider us as your partners in the truest essence, we will do what ever it takes to get the leads flowing in to the top of your funnel. From documenting your Go-to-Market Strategy, revamping or recreating your website, all the way till strategising and executing your monthly marketing strategy. ",
                      }}
                    />
                    <div className="empty_space20" />
                    <Link to="/about" className="btn btn-grad-red">
                      <span className="btn-text">Learn More</span>
                    </Link>
                  </div>
                </Fade>
              </Box>
            </Box>
          </InfoWrapper>
        </Container>
      </Box> */}
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
                        __html:
                          'Not Your Average<br/><b>Lead Conversion Platform</b>',
                      }}
                    />
                    <div className="BannerStrip red" />
                    <Text
                      {...description}
                      dangerouslySetInnerHTML={{
                        __html:
                          'It is the technological superhuman AI-powered platform designed to help your dealership communicate better and convert more. Our tech-stack is second to none in the automotive sales industry. We are built on the cloud with a decoupled serverless architecture powered by true AI technologies that deliver new capabilities and efficiencies to power your dealership to victory.',
                      }}
                    />
                    <div className="empty_space20" />
                    <Link to="/about" className="btn btn-grad-red">
                      <span className="btn-text">Learn More</span>
                    </Link>
                  </div>
                </Fade>
              </Box>
              <Box {...col3}>
                <Fade right cascade>
                  <img
                    className="imageBox mw550"
                    src={NotAverageLead}
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
                    src={IntelligentOffering}
                    alt="SalesCatcher Intelligent Offering (SC/IO)"
                  />
                </Fade>
              </Box>
              <Box {...col4}>
                <Fade right cascade>
                  <div>
                    <Heading
                      {...title}
                      dangerouslySetInnerHTML={{
                        __html:
                          'SalesCatcher<br/><b>Intelligent Offering (SC IO)</b>',
                      }}
                    />
                    <Heading
                      {...subtitle}
                      content="Automated 24/7 Lead Response"
                    />
                    <div className="BannerStrip red" />
                    <Text
                      {...description}
                      content="The IO in SalesCatcher stands for Intelligent Offering which is our AI engine that powers automated lead response 24/7 in a human way. Our IO bot can read and derive intent from any and all leads, it understands what the customer is looking for and matches up an offer that is perfect for them. IO works in auto-drive as your internet super salesman always working and always converting."
                    />
                    <CarouselSlider1 value={intelligentofferingSlider} />
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
                  <Heading
                    {...title}
                    dangerouslySetInnerHTML={{
                      __html:
                        '<b>SC Interactive Engine & Contactless Sales Engagement</b>',
                    }}
                  />
                  <div className="BannerStrip red" />
                  <Text
                    {...description}
                    content="SalesCatcher is also a powerful engagement tool that allows you to showcase any vehicle in or out of your inventory by hand. In today’s landscape, contactless sales are important so being able to communicate effectively with your leads over the phone and internet is crucial. SC Interactive helps you create handcrafted messages on any desired vehicle with the specific details the customer is looking for like color options, product info, current incentives, features and benefits, pre-owned options and so much more. SalesCatcher will do all the heavy lifting - all you have to do is point and say go. This all happens in seconds so you create content-rich attention-grabbing messages that will power your contactless sales process."
                  />
                  <CarouselSlider1 value={SCInteractiveSlider} />
                </Fade>
              </Box>
              <Box {...col3}>
                <Fade right cascade>
                  <img
                    className="imageBox mw550"
                    src={SCInteractive}
                    alt="SC Interactive Engine & Contactless Sales Engagement"
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
                    src={Deliverability}
                    alt="Deliverability"
                  />
                </Fade>
              </Box>
              <Box {...col4}>
                <Fade right cascade>
                  <div>
                    <Heading
                      {...title}
                      dangerouslySetInnerHTML={{
                        __html: '<b>Deliverability</b>',
                      }}
                    />
                    <div className="BannerStrip red" />
                    <Text
                      {...description}
                      content="SalesCatcher integrates seamlessly and can deliver emails through your CRM system but too many dealers are dogged by deliverability issues with emails landing in SPAM. We have a fix, you can choose to deliver your emails via SalesCatcher because we are your email experts and have taken great pain to ensure maximum deliverability to the inbox. And since SalesCatcher plays nice with the CRMs, your reply messages will automatically be routed to your CRM system."
                    />
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
                  <Heading
                    {...title}
                    dangerouslySetInnerHTML={{
                      __html: '<b>SC Messaging App</b>',
                    }}
                  />
                  <div className="comingsoonbox">
                    <div className="BannerStrip red" />
                    <img
                      className="mw-125"
                      src={comingsoon}
                      alt="coming soon"
                    />
                  </div>
                  <Text
                    {...description}
                    dangerouslySetInnerHTML={{
                      __html:
                        'SalesCatcher’s goal is to help car dealers communicate better with their customers. So getting your message read is important but too many emails go unread, in contrast virtually all text messages are read and responded to immediately. Our automated IO engine can integrate effortlessly to your CRM’s texting platform while crafting and sending all messages through it or you can choose to use SC Message, our best-in-class messaging platform to send and receive your texts. All messages can be routed and noted in your CRM regardless of how you use our messaging platform.',
                    }}
                  />
                </Fade>
              </Box>
              <Box {...col3}>
                {/* <Fade right cascade> */}
                <video
                  className="imageBox mw450"
                  preload="auto"
                  loop
                  autoPlay
                  muted
                >
                  <source src={SCtextVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* </Fade> */}
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
                    src={Calltoaction}
                    alt="Call-to-Actions & Custom Landing Pages"
                  />
                </Fade>
              </Box>
              <Box {...col4}>
                <Fade right cascade>
                  <Heading
                    {...title}
                    dangerouslySetInnerHTML={{
                      __html: '<b>Call-to-Actions & Custom Landing Pages</b>',
                    }}
                  />
                  <div className="BannerStrip red" />
                  <Text
                    {...description}
                    content="Communicating better means good messaging and leading customers the natural way. All of our communications come with call-to-actions supported by lead specific custom landing pages. These pages are designed to engage, convert, and are specific to your customer’s requests."
                  />
                  <CarouselSlider1 value={CalltoactionSlider} />
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
                  <Heading
                    {...title}
                    dangerouslySetInnerHTML={{
                      __html: '<b>Email Marketing</b>',
                    }}
                  />
                  <div className="BannerStrip red" />
                  <Text
                    {...description}
                    content="For your email marketing messages to resonate with your customers, it first needs to reach the inbox. With SalesCatcher as your email marketing provider, you benefit from personal attention to details from our email experts as well as our industry-leading platform. We plan and build your campaign, deploy it, and finally monitor it for successful results."
                  />
                  <CarouselSlider1 value={emailmarketingSlider} />
                </Fade>
              </Box>
              <Box {...col3}>
                <Fade right cascade>
                  <img
                    className="imageBox mw550"
                    src={EmailMarketing}
                    alt="Email Marketing"
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
                    src={Contentdriven}
                    alt="Content Driven Messaging"
                  />
                </Fade>
              </Box>
              <Box {...col4}>
                <Fade right cascade>
                  <Heading
                    {...title}
                    dangerouslySetInnerHTML={{
                      __html: '<b>Content Driven Messaging</b>',
                    }}
                  />
                  <div className="BannerStrip red" />
                  <Text
                    {...description}
                    content="Communicating well with prospects is hard but SalesCatcher makes it easy with quality content. SC matches all communications with lead specific content to drive engagement. Your leads are shopping you against your competition so let SalesCatcher’s content-driven messaging help you shine."
                  />
                  <CarouselSlider1 value={contentdrivenSlider} />
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
                  <Heading
                    {...title}
                    dangerouslySetInnerHTML={{
                      __html: '<b>Analytics & Optimization</b>',
                    }}
                  />
                  <div className="BannerStrip red" />
                  <Text
                    {...description}
                    content="Boost your performance with our email & text analytics. We go beyond opens and clicks. SalesCatcher.io can show you how long someone is engaged with your email - did they read, skim, glance, or delete it. We will also tell you where your message was opened, which email provider, and what devices. We will implement A/B testing and help you analyze the results to maximize your ROI."
                  />
                  <CarouselSlider1 value={analyticsSlider} />
                </Fade>
              </Box>
              <Box {...col3}>
                <Fade right cascade>
                  <img
                    className="imageBox mw550"
                    src={Analytics}
                    alt="Analytics & Optimization"
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
