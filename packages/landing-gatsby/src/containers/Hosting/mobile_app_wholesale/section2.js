import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import { Link } from 'gatsby';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import SectionWrapper from './section.style';
import Sectionwrapper2 from './section3.style';
import Sectionwrapperlast from './sectionlast.style';

import pushicon from 'common/src/assets/image/hosting/mobileapp_wholesale/push.webp';
import analytic from 'common/src/assets/image/hosting/mobileapp_wholesale/analytics.webp';
import personalshopper from 'common/src/assets/image/hosting/mobileapp_wholesale/personal-shopper.webp';
import integrations from 'common/src/assets/image/hosting/mobileapp_wholesale/Integrations.webp';
const InfoSection = ({
  sectionWrapper,
  row,
  row2,
  col2,
  col3,
  col4,
  title,
  coldescription,
  description,
  margintop,
  description2,
  coltitle,
  runningbgtext,
  runningbgtextpadded,
  marginbottom,
}) => {
  return (
    <>
      <SectionWrapper>
        <Box {...sectionWrapper} className="bg_white">
          <Container>
            <Box {...row} {...margintop}>
              <Heading
                {...title}
                content="Do You Know?"
                className="underline"
              />
            </Box>
            <Box {...row}>
              <Text
                {...description}
                content="SalesCatcher stores report that over 80% of their online traffic come from mobile devices. With e-commerce platforms claiming that nearly 50% of their conversions happen over mobile devices and smartphones, a mobile-first approach would be the next best step for you."
              />
            </Box>
          </Container>

          <Container>
            <Box {...row} {...margintop}>
              <Heading
                {...title}
                content="
                Why SalesCatcher?
                "
                className="underline"
              />
            </Box>
            <Box {...row}>
              <Heading {...description2} content="It's Simple." />
            </Box>
            <Box {...row}>
              <Text
                {...description}
                content="SalesCatcher offers Ecommerce and Shopify stores a mobile platform that is simple, powerful and customizable, and requires absolutely no coding knowledge. With features and integrations handpicked to elevate your store’s performance, SalesCatcher is the best mobile app builder on Shopify today!"
              />
            </Box>
          </Container>

          <Container>
            <Box {...row} {...margintop}>
              <Box {...col2}>
                <Box {...row}>
                  <img src={pushicon} className="columnimage" />
                </Box>

                <Heading {...coltitle} content="Engaging Push Notifications " />
                <Text
                  {...coldescription}
                  content="Minimize cart abandonment and recapture your customers by automating rich and personalized 
                push notifications."
                />
              </Box>
              <Box {...col2}>
                <Box {...row}>
                  <img src={analytic} className="columnimage" />
                </Box>
                <Heading {...coltitle} content="Advanced Analytics" />
                <Text
                  {...coldescription}
                  content="Keep track of your mobile app audience. Analyse user Behavior for effective retargeting and conversions."
                />
              </Box>
              <Box {...col2}>
                <Box {...row}>
                  <img src={personalshopper} className="columnimage" />
                </Box>
                <Heading {...coltitle} content="AI Personal Shopper" />
                <Text
                  {...coldescription}
                  content="Suggest products based on user Behavior and history, from the customers’ own 
                    AI personal shopper."
                />
              </Box>
              <Box {...col2}>
                <Box {...row}>
                  <img src={integrations} className="columnimage" />
                </Box>
                <Heading {...coltitle} content="Integrations" />
                <Text
                  {...coldescription}
                  content="
                    Deliver the perfect omni-channel experience by integrating your mobile app with 40+ existing platforms for product filters, reviews, analytics, chat and more.
                    "
                />
              </Box>
            </Box>
          </Container>
        </Box>
      </SectionWrapper>

      <Sectionwrapper2 id="about_banner">
        <Container className="banner_container">
          <Box>
            <Text
              {...runningbgtext}
              content="700+ Shopify stores and 100+ Shopify Plus stores trust SalesCatcher to engage with their customers, drive revenue and increase conversions"
            ></Text>
          </Box>
        </Container>
      </Sectionwrapper2>

      <SectionWrapper>
        <Container>
          <Box {...row} {...margintop}>
            <Heading
              {...title}
              content="Blynk Live Selling"
              className="underline"
            />
          </Box>
          <p className="content">
            <span>Live videos on your Facebook pages and mobile app </span>{' '}
            simultaneously! Leverage your customers’ impulse shopping behavior
            and watch your <span>revenue grow 3x </span> in no time.
          </p>
          <p className="content">
            The platform comes with a bunch of innovative features like{' '}
            <span>
              Auto-invoicing, Barcode scanning and Dynamic Product Selection
            </span>{' '}
            that would make the entire experience absolutely seamless!
          </p>

          {/* <Box {...row} {...margintop}>
            <Heading
              {...title}
              content="SalesCatcher is now offering our product free for 6-months!"
              className="underline"
            />
          </Box>
          <p className="content bottommargin">
            Sign up right now and leverage our{' '}
            <span>Growth and Power Premium plans</span> with all their
            functionalities <span>free for 6 months!</span>
          </p> */}
        </Container>
      </SectionWrapper>

      <Sectionwrapperlast>
        <Container className="banner_container">
          <Box>
            <Text
              {...runningbgtextpadded}
              content="SalesCatcher is an easily customizable fully-functional mobile app solution for your eCommerce store."
            ></Text>
            <Text
              {...runningbgtextpadded}
              className="underline"
              content="Zero code. Zero commissions. Maximum revenue."
            ></Text>
          </Box>
          <Box {...row} {...marginbottom}>
            <Link to="/contact" className="btn btn-grad-red">
              <span className="btn-text" style={{ padding: '50px 30px' }}>
                Contact Us To Know More
              </span>
            </Link>
          </Box>
        </Container>
      </Sectionwrapperlast>
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
    className: 'row',
    justifyContent: 'center',
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
    textAlign: 'center',
  },
  col2: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '47%', '30%', '30%', '25%'],
    className: 'col',
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
    fontSize: ['25px', '25px', '36px', '33px', '38px'],
    fontWeight: '700',
    color: '#2A9BF9',
    letterSpacing: '-0.025em',
    mb: '10px',
    as: 'h1',
    textAlign: 'center',
  },
  coltitle: {
    fontSize: ['18px', '20px', '20px', '22px', '22px'],
    fontWeight: '700',
    color: '#252525',
    letterSpacing: '-0.025em',
    mb: '10px',
    as: 'h1',
    textAlign: 'center',
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
    fontSize: ['15px', '16px', '16px', '20px', '20px'],
    color: '#252525',
    lineHeight: '1.75',
    mt: '20px',
    mb: '0',
    textAlign: 'center',
  },
  description2: {
    fontSize: ['18px', '18px', '20px', '24px', '24px'],
    color: '#252525',
    lineHeight: '1.75',
    mt: '20px',
    mb: '0',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  coldescription: {
    fontSize: ['15px', '16px', '16px', '18px', '18px'],
    color: '#252525',
    lineHeight: '1.2',
    mt: '20px',
    mb: '0',
    textAlign: 'center',
  },
  runningbgtext: {
    fontSize: ['22px', '22px', '28px', '28px', '30px'],
    fontWeight: '500',
    color: '#fff',
    lineHeight: '1.4em',
    mt: '30px',
    mb: '30px',
    textAlign: 'center',
  },
  runningbgtextpadded: {
    fontSize: ['22px', '22px', '28px', '28px', '30px'],
    fontWeight: '500',
    color: '#fff',
    lineHeight: '1.4em',
    mt: '30px',
    mb: '30px',
    px: ['10px', '10px', '10px', '5px', '80px'],
    textAlign: 'center',
  },
  margintop: {
    mt: '50px',
  },
  marginbottom: {
    mt: '50px',
    mb: '50px',
  },
};

export default InfoSection;
