import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import Img from 'gatsby-image';
import ParticlesComponent from '../../Particle/home';
import BannerWrapper from '../banner.style';

import HomeImg from 'common/src/assets/image/hosting/logo_light.png';
import Arrow from 'common/src/assets/image/hosting/mobileapp_wholesale/arrow.webp';
// import Icon from "./react.svg";

import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';

const BannerHomeSection = ({
  row,
  col,
  title,
  title1,
  title2,
  description,
  textArea,
  imageArea,
  topmargin,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      file(
        relativePath: {
          eq: "image/hosting/Pages/Delivering-world-class-customer.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <>
      <BannerWrapper id="banner_home_section">
        <Container className="banner_container">
          {/* <ParticlesComponent /> */}
          <Box {...row}>
            <img src={HomeImg} style={{ maxWidth: '250px' }}></img>
          </Box>
          <Box {...row}>
            <Heading
              {...title}
              content="Boost Your Wholesale Store Revenue By 3x With A Fully Functional Mobile App Solution!"
            />
            <Heading
              {...title1}
              content="Mobile apps help Shopify stores in appealing to a bigger audience and accelerating conversions!"
            />
          </Box>
          <Box {...row} {...topmargin}>
            <Link to="/contact" className="btn btn-grad-red">
              <span className="btn-text" style={{ padding: '50px 30px' }}>
                Contact Us
              </span>
            </Link>
          </Box>
          <Box {...row}>
            <Text {...description} content="Scroll down to know more" />
          </Box>
          <Box {...row}>
            <img src={Arrow} style={{ maxWidth: '30px' }}></img>
          </Box>
        </Container>
      </BannerWrapper>
    </>
  );
};

BannerHomeSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  title1: PropTypes.object,
  title2: PropTypes.object,
  description: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
};

BannerHomeSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    className: 'row',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '90%', '100%', '55%'],
  },
  textArea: {
    width: ['100%', '100%', '45%', '45%', '45%'],
    className: 'bannerText',
    mt: '50px',
    mb: '50px',
  },
  imageArea: {
    width: ['100%', '100%', '55%', '55%', '55%'],
    className: 'imgBox imgFull',
  },
  title2: {
    fontSize: ['18px', '18px', '18px', '18px', '18px'],
    fontWeight: '300',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '10px',
    lineHeight: '1.31',
    textAlign: 'left',
    as: 'h3',
  },
  title1: {
    fontSize: ['20px', '20px', '24px', '24px', '24px'],
    fontWeight: '400',
    color: '#fff',
    letterSpacing: '-0.025em',
    mt: '25px',
    mb: '5px',
    lineHeight: '1.31',
    textAlign: 'center',
    as: 'h2',
  },
  title: {
    fontSize: ['30px', '35px', '35px', '38px', '46px'],
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 'normal',
    mt: '50px',
    mb: '0',
    lineHeight: '1.1',
    textAlign: 'center',
    as: 'h1',
  },
  description: {
    fontSize: ['16px', '16px', '16px', '18px', '18px'],
    color: '#fff',
    lineHeight: '1.5',
    mt: '30px',
    mb: '0',
    textAlign: 'left',
    fontWeight: '300',
  },
  topmargin: {
    mt: '30px',
  },
};

export default BannerHomeSection;
