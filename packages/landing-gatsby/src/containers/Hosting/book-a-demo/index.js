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
import image from '../../../../../common/src/assets/image/hosting/Pages/new-page/never-struggle.png';
import sliderimage1 from '../../../../../common/src/assets/image/hosting/Pages/new-page/slider-1.png';
import sliderimage2 from '../../../../../common/src/assets/image/hosting/Pages/new-page/slider-2.png';
import sliderimage3 from '../../../../../common/src/assets/image/hosting/Pages/new-page/slider-3.png';
import sliderimage4 from '../../../../../common/src/assets/image/hosting/Pages/new-page/slider-4.png';
import sliderimage5 from '../../../../../common/src/assets/image/hosting/Pages/new-page/slider-5.png';
import imagegroup from '../../../../../common/src/assets/image/hosting/Pages/new-page/image-group.svg';

import Slider from 'react-slick';
import CarouselSliderWrapper from './CarouselSlider.style';
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Box {...sectionWrapper} className="bg_light" id="Sectiontwo">
        <Container>
          <InfoWrapper>
            <Box {...row}>
              <Box {...col4}>
                <Fade left cascade>
                  <div>
                    <Heading {...titlesmall} content="How does it work? " />
                    <Heading
                      {...title}
                      dangerouslySetInnerHTML={{
                        __html:
                          '<b>Never Struggle to fill your Sales Pipeline Again !</b>',
                      }}
                    />
                    <div className="BannerStrip red" />
                    <Text
                      {...description}
                      dangerouslySetInnerHTML={{
                        __html:
                          'Our intelligent bots utilize Intelligent Process Automation (IPA) to access, view, and analyze buyback opportunities. It’s like having a salesperson with a 100% strike rate, looking at every vehicle, booking out every car with accurate vehicle info, checking it history to find any previous or current issues, and then engaging the customer with a friendly outreach to gauge buyback opportunity.',
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
                    src={image}
                    alt="Not Your Average Lead Conversion Platform"
                  />
                </Fade>
              </Box>
            </Box>
          </InfoWrapper>
        </Container>
      </Box>
      <Box>
        <Container>
          <CarouselSliderWrapper>
            <Slider {...settings}>
              <div>
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    textAlign="center"
                    dangerouslySetInnerHTML={{
                      __html: '<b>Accessing RO Data</b>',
                    }}
                    mb="50"
                    mt="100"
                  />

                  <Text
                    {...description}
                    textAlign="center"
                    dangerouslySetInnerHTML={{
                      __html:
                        'The RPA workflow allows the bot to access the Repair Order in your CRM or DMS while the AI enables it to read and comprehend the data with utmost effeciency.',
                    }}
                    mb="50"
                  />
                </Fade>
                <Container>
                  <div>
                    <img
                      src={sliderimage5}
                      style={{
                        opacity: '1',
                        'text-align': 'center',
                        'margin-bottom': '30px',
                      }}
                    />
                  </div>
                </Container>
              </div>
              <div>
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    textAlign="center"
                    dangerouslySetInnerHTML={{
                      __html: '<b>Pulling Build Data</b>',
                    }}
                    mb="50"
                    mt="100"
                  />

                  <Text
                    {...description}
                    textAlign="center"
                    dangerouslySetInnerHTML={{
                      __html:
                        'Our build data is like looking at the original Windows Sticker on the vehicle, so we know exactly what equipment that vehicle came with off the factory line.',
                    }}
                    mb="50"
                  />
                </Fade>
                <Container>
                  <div>
                    <img
                      src={sliderimage2}
                      style={{
                        opacity: '1',
                        'text-align': 'center',
                        'margin-bottom': '30px',
                      }}
                    />
                  </div>
                </Container>
              </div>
              <div>
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    textAlign="center"
                    dangerouslySetInnerHTML={{
                      __html:
                        '<b>Matching Build Data To Your Referred Book Value</b>',
                    }}
                    mb="50"
                    mt="100"
                  />

                  <Text
                    {...description}
                    textAlign="center"
                    dangerouslySetInnerHTML={{
                      __html: '',
                    }}
                    mb="50"
                  />
                </Fade>
                <Container>
                  <div>
                    <img
                      src={sliderimage3}
                      style={{
                        opacity: '1',
                        'text-align': 'center',
                        'margin-bottom': '30px',
                      }}
                    />
                  </div>
                </Container>
              </div>
              <div>
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    textAlign="center"
                    dangerouslySetInnerHTML={{
                      __html: '<b>Checking The Vehicle History</b>',
                    }}
                    mb="50"
                    mt="100"
                  />

                  <Text
                    {...description}
                    textAlign="center"
                    dangerouslySetInnerHTML={{
                      __html: '',
                    }}
                    mb="50"
                  />
                </Fade>
                <Container>
                  <div>
                    <img
                      src={sliderimage4}
                      style={{
                        opacity: '1',
                        'text-align': 'center',
                        'margin-bottom': '30px',
                      }}
                    />
                  </div>
                </Container>
              </div>
              <div>
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    textAlign="center"
                    dangerouslySetInnerHTML={{
                      __html:
                        '<b>Matching The Pricing Offer To Dealers Parameters</b>',
                    }}
                    mb="50"
                    mt="100"
                  />

                  <Text
                    {...description}
                    textAlign="center"
                    dangerouslySetInnerHTML={{
                      __html: '',
                    }}
                    mb="50"
                  />
                </Fade>
                <Container>
                  <div>
                    <img
                      src={sliderimage1}
                      style={{
                        opacity: '1',
                        'text-align': 'center',
                        'margin-bottom': '30px',
                        'margin-bottom': '30px',
                      }}
                    />
                  </div>
                </Container>
              </div>
            </Slider>
          </CarouselSliderWrapper>
        </Container>
      </Box>
      <Box
        style={{
          backgroundColor: '#F5F5F5',
          padding: '80px 0px',
          marginTop: '50px',
        }}
      >
        <Container>
          <Fade top cascade>
            <Heading
              {...title}
              textAlign="center"
              dangerouslySetInnerHTML={{
                __html: '<b>Are you leaving $$$ on the table?</b>',
              }}
              mb="50px"
              color="#000"
            />
          </Fade>
          <Fade left cascade>
            <Text
              {...description}
              textAlign="center"
              dangerouslySetInnerHTML={{
                __html:
                  'Our AI-driven bot performs an end-to-end evaluation of service drive customers and automatically engages them via text to see if they are interested in a trade-in evaluation',
              }}
              mb="50"
              color="#000"
            />
          </Fade>
          <Fade right cascade>
            <Text
              {...description}
              textAlign="center"
              dangerouslySetInnerHTML={{
                __html:
                  'Buy Back Bot makes it possible to provide quotes based on the availability of the model, requirements of customer, and the minimum time in which the car can be made available, i.e. <b>reduce the average quote response time to 30 minutes.</b>',
              }}
              mb="50"
              color="#000"
            />
          </Fade>
        </Container>
      </Box>
      <Box>
        <Container>
          <Fade top cascade>
            <Heading
              {...title}
              textAlign="center"
              dangerouslySetInnerHTML={{
                __html: '<b>AI Powered Workflow</b>',
              }}
              mb="80px"
              mt="100px"
              color="#000"
            />
          </Fade>
          <div style={{ textAlign: 'center' }}>
            <Fade bottom cascade>
              <img
                src={imagegroup}
                alt="AI powered Workflow"
                style={{ width: '100%' }}
              />
            </Fade>
          </div>
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
