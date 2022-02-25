import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import { Link } from 'gatsby';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import SectionOneWrapper from './section_one_wrapper';
import SectionTwoWrapper from './section_two_wrapper';
import SectionThreeWrapper from './section_three_wrapper';
import SectionFourWrapper from './section_four_wrapper';

import integrations from 'common/src/assets/image/hosting/smokingandvaping/group.png';
import arrow from 'common/src/assets/image/hosting/smokingandvaping/arrow.png';
import box1 from 'common/src/assets/image/hosting/smokingandvaping/hand.png';
import box2 from 'common/src/assets/image/hosting/smokingandvaping/notificationicon.png';
import box3 from 'common/src/assets/image/hosting/smokingandvaping/graph.png';
import box4 from 'common/src/assets/image/hosting/smokingandvaping/carticon.png';
import box5 from 'common/src/assets/image/hosting/smokingandvaping/puzzleicon.png';
const InfoSection = ({
  row,
  sectiononetitle,
  sectiononesubtitle,
  sectiononesubdescription,
  sectiontwotitle,
  sectiontwosubtitle,
  whitecol,
  whitebox,
  sectionthreetitle,
  sectionthreesubtitle,
  sectionthreedescription,
  sectionfourtitle,
  margintop,
  sectionfoursubtitle,
  row2,
  col2,
  boxtitle,
  boxdescription,
}) => {
  return (
    <>
      <SectionOneWrapper>
        <Container>
          <Box>
            <Text
              {...sectiononetitle}
              content="Build a Reliable and Secure Mobile App for your CBD and Vaping Business with SalesCatcher’s Intuitive Features & Plugins "
            />
            <Text
              {...sectiononesubtitle}
              content="Feel like you’re missing out on potential engagement due to Facebook ad prohibitions?"
            />
            <Text
              {...sectiononesubdescription}
              content="Leverage rich media notifications to stay in touch with your customers and offer the best shopping experience to boost customer retention and scale up with a world-class mobile app solution. that requires absolutely zero coding."
            />
          </Box>
        </Container>
      </SectionOneWrapper>
      <SectionTwoWrapper>
        <Container>
          <Box>
            <Text
              {...sectiontwotitle}
              content="With over 65% of traffic coming from mobile devices, M-commerce has been the primary channel for CBD and vaping products, contributing to over 45% of overall sales in 2020, and the trend is only gaining more momentum as we move into 2021!"
            />
            <Text
              {...sectiontwosubtitle}
              content="Here’s how an online store from New York that sells CBD based products leveraged their mobile app to boost their revenue:"
            />
          </Box>
          <Box {...row}>
            <Box {...whitecol}>
              <Box {...whitebox}>
                <img src={arrow} alt="icon" className="arrowicon" />{' '}
                <span>308%</span>
                <div>
                  <p>Sales On Mobile App</p>
                </div>
              </Box>
            </Box>
            <Box {...whitecol}>
              <Box {...whitebox}>
                <img src={arrow} alt="icon" className="arrowicon" />{' '}
                <span>227%</span>
                <div>
                  <p>Online Review</p>
                </div>
              </Box>
            </Box>
            <Box {...whitecol}>
              <Box {...whitebox}>
                <img src={arrow} alt="icon" className="arrowicon" />{' '}
                <span>160%</span>
                <div>
                  <p>Online Sessions</p>
                </div>
              </Box>
            </Box>
          </Box>
        </Container>
      </SectionTwoWrapper>
      <SectionThreeWrapper>
        <Container>
          <Text
            {...sectionthreetitle}
            content="Get High on Revenues with a World-Class Mobile App!"
          />
          <Box {...row2}>
            {/* item 1 */}
            <Box {...col2}>
              <div className="box">
                <div className="hovericon">
                  <img src={box1} alt="icon" />
                </div>
                <div className="boxtitle">
                  <Text {...boxtitle} content="Simple Drag-and-Drop Builder" />
                </div>
                <div className="boxdescription">
                  <Text
                    {...boxdescription}
                    content="Build your mobile app in a matter of minutes with absolutely no line of code, and offer a superior shopping experience"
                  />
                </div>
              </div>
            </Box>
            {/* item 2 */}
            <Box {...col2}>
              <div className="box">
                <div className="hovericon">
                  <img src={box2} alt="icon" />
                </div>
                <div className="boxtitle">
                  <Text {...boxtitle} content="Engaging Push notifications" />
                </div>
                <div className="boxdescription">
                  <Text
                    {...boxdescription}
                    content="Leverage the power of real-time rich media notifications, and boost revenue by engaging and retaining your customers with the best mobile shopping experience"
                  />
                </div>
              </div>
            </Box>
            {/* item 3 */}
            <Box {...col2}>
              <div className="box">
                <div className="hovericon">
                  <img src={box3} alt="icon" />
                </div>
                <div className="boxtitle">
                  <Text {...boxtitle} content="Advanced analytics" />
                </div>
                <div className="boxdescription">
                  <Text
                    {...boxdescription}
                    content="Monitor the performance of your store to run data-driven offers on your store and increase sales. Keep track of your mobile app audience, analyze user behavior for effective retargeting and conversions
                    "
                  />
                </div>
              </div>
            </Box>

            {/* item 4 */}
            <Box {...col2}>
              <div className="box">
                <div className="hovericon">
                  <img src={box4} alt="icon" />
                </div>
                <div className="boxtitle">
                  <Text {...boxtitle} content="AI Personal Shopper" />
                </div>
                <div className="boxdescription">
                  <Text
                    {...boxdescription}
                    content="Drive more revenue and engagement with relevant product suggestions to your customers based on their buying behavior and purchase history
                    "
                  />
                </div>
              </div>
            </Box>

            {/* item 5 */}
            <Box {...col2}>
              <div className="box">
                <div className="hovericon">
                  <img src={box5} alt="icon" />
                </div>
                <div className="boxtitle">
                  <Text {...boxtitle} content="Integrations" />
                </div>
                <div className="boxdescription">
                  <Text
                    {...boxdescription}
                    content="Deliver the perfect omni-channel experience by integrating your mobile app with 50+ existing plug-ins. Enable store integrations with reward & loyalty tools, product filters, chat solutions, back to stock alerts, analytics and review platforms. 
                    "
                  />
                </div>
              </div>
            </Box>
          </Box>
          <Text
            {...sectionthreesubtitle}
            content="Over 1200+ online stores trust SalesCatcher for their mobile app solution, and witness a phenomenal improvement in engagement and revenue "
          />
          <Text
            {...sectionthreedescription}
            content="The CBD industry as a whole is estimated to reach $20 billion in sales by 2024! How are you gonna distinguish yourself in the market? "
          />
        </Container>
      </SectionThreeWrapper>
      <SectionFourWrapper>
        <Container>
          <Text
            {...sectionfourtitle}
            content="Who needs Google and Apple listings when you can offer a private mobile app on your website and experience a significant surge in revenue?"
          />
          <Text
            {...sectiononesubtitle}
            {...margintop}
            content="Get a mobile app for your Smoking and Vaping business today!"
          />
          <Text
            {...sectionfoursubtitle}
            {...margintop}
            content="Build your mobile app right away. Explore the tools and plugins you need to optimize your      business and drive more conversions"
          />
          <div className="centeralign">
            <Link to="/contact" className="btn btn-grad-red">
              <span className="btn-text">Get a Mobile App Now!</span>
            </Link>
          </div>
        </Container>
      </SectionFourWrapper>
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
    justifyContent: [
      'center',
      'center',
      'space-between',
      'space-between',
      'space-between',
    ],
  },
  row2: {
    flexBox: true,
    flexWrap: 'wrap',
    className: 'row',
    justifyContent: 'center',
  },
  col2: {
    pr: '15px',
    pl: '15px',
    pt: '15px',
    pb: '15px',
    width: ['100%', '100%', '30%', '25%', '25%'],
    mb: ['20px', '20px', '0px', '0px', '0px'],
    mt: '50px',
    mx: '3%',
    textAlign: 'center',
    className: 'hoverbox',
  },
  whitecol: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '30%', '25%', '25%'],
    mb: ['20px', '20px', '0px', '0px', '0px'],
    textAlign: 'center',
  },
  sectiononetitle: {
    fontSize: ['25px', '25px', '30px', '30px', '32px'],
    fontWeight: '700',
    color: '#2F2F2F',
    letterSpacing: '-0.025em',
    mb: '30px',
    as: 'h1',
    textAlign: 'center',
  },
  sectiononesubtitle: {
    fontSize: ['20px', '20px', '22px', '24px', '24px'],
    fontWeight: '500',
    color: '#66BB6A',
    letterSpacing: '-0.025em',
    mb: '30px',
    as: 'h2',
    textAlign: 'center',
  },
  sectiononesubdescription: {
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    fontWeight: '400',
    color: '#2F2F2F',
    letterSpacing: '-0.025em',
    mb: '60px',
    as: 'h2',
    textAlign: 'center',
    lineHeight: '1.5em',
  },
  sectiontwotitle: {
    fontSize: ['25px', '25px', '28px', '28px', '28px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    lineHeight: '1.5em',
    mb: '30px',
    as: 'h1',
    textAlign: 'center',
  },
  sectiontwosubtitle: {
    fontSize: ['20px', '20px', '22px', '24px', '24px'],
    fontWeight: '500',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '30px',
    as: 'h2',
    textAlign: 'center',
  },
  sectionthreetitle: {
    fontSize: ['30px', '32px', '34px', '34px', '36px'],
    fontWeight: '700',
    color: '#2F2F2F',
    letterSpacing: '-0.025em',
    mb: '30px',
    as: 'h1',
    textAlign: 'center',
    className: 'underline',
    position: 'relative',
  },
  sectionthreesubtitle: {
    fontSize: ['25px', '28px', '30px', '30px', '32px'],
    fontWeight: '700',
    color: '#2F2F2F',
    letterSpacing: '-0.025em',
    mb: '30px',
    mt: '40px',
    as: 'h1',
    textAlign: 'center',
  },
  sectionthreedescription: {
    fontSize: ['20px', '20px', '22px', '24px', '24px'],
    fontWeight: '400',
    color: '#66BB6A',
    letterSpacing: '-0.025em',
    mt: '50px',
    mb: '30px',
    as: 'h2',
    textAlign: 'center',
  },
  sectionfourtitle: {
    fontSize: ['25px', '28px', '30px', '30px', '32px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '30px',
    mt: '40px',
    as: 'h1',
    lineHeight: '1.5em',
    textAlign: 'center',
    className: 'underline',
  },
  sectionfoursubtitle: {
    fontSize: ['20px', '20px', '22px', '24px', '24px'],
    fontWeight: '400',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '30px',
    as: 'h2',
    textAlign: 'center',
  },
  boxtitle: {
    fontSize: ['20px', '20px', '20px', '20px', '20px'],
    fontWeight: '400',
    color: '#212E35',
    letterSpacing: '-0.025em',
    mt: '20px',
    mb: '30px',
    as: 'h2',
    textAlign: 'left',
  },
  boxdescription: {
    fontSize: ['16px', '16px', '16px', '16px', '16px'],
    fontWeight: '400',
    color: '#212E35',
    letterSpacing: '-0.025em',
    lineHeight: '1.2em',
    mt: '20px',
    mb: '30px',
    as: 'p',
    textAlign: 'left',
  },
  whitebox: {
    className: 'whitebox',
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
