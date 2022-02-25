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

import HomeImg from 'common/src/assets/image/hosting/Pages/Automotive Lead.png';
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
}) => {
  const Data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "image/hosting/Pages/automotive_banner.png" }) {
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
          <ParticlesComponent />
          <Box {...row}>
            <Box {...col} {...textArea}>
              <Fade left cascade>
                <div>
                  <Heading {...title2} content="SalesCatcher.io" />
                  <div>
                    <Heading {...title} content="Automotive Lead Engagement" />
                  </div>
                  <div>
                    <Heading {...title} content=" " />
                  </div>
                  <Heading
                    {...title1}
                    content="Communicate better / Convert more"
                  />
                  <div className="BannerStrip red" />
                  <Text
                    {...description}
                    content="SalesCatcher.io is the leading engagement platform in the retail automotive industry thanks to our AI-powered serverless cloud platform which is delivering new capabilities to power your lead conversions."
                  />
                  <div className="empty_space20" />
                  <Link to="#Sectiontwo" className="btn btn-grad-red">
                    <span className="btn-text">Show Me How</span>
                  </Link>
                </div>
              </Fade>
            </Box>
            <Box {...col} {...imageArea}>
              <Fade right cascade>
                {/* <img src={HomeImg} alt="Automotive Lead" /> */}
                <Img
                  fluid={Data.file.childImageSharp.fluid}
                  objectFit="contain"
                  alt=""
                />
                {/* <Icon /> */}
              </Fade>
            </Box>
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
    mt: '15px',
    mb: '5px',
    lineHeight: '1.31',
    textAlign: 'left',
    as: 'h2',
  },
  title: {
    fontSize: ['30px', '35px', '35px', '38px', '55px'],
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 'normal',
    mb: '0',
    lineHeight: '1.1',
    textAlign: 'left',
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
};

export default BannerHomeSection;
