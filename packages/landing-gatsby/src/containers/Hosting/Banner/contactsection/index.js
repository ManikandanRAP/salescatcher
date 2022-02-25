import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import BannerWrapper from '../banner.style';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import ParticlesComponent from '../../Particle/home';

const ContactBannerSection = ({
  row,
  col,
  title,
  title1,
  description,
  textArea,
}) => {
  return (
    <BannerWrapper id="contact_banner">
      <ParticlesComponent />
      <Container className="banner_container">
        <Fade bottom cascade>
          <Box {...textArea}>
            {/* <Heading
              {...title1}
              content="SalesCatcher Intelligent Offering"
            /> */}
            <Heading {...title} content="Contact Us" />
            <Text
              {...description}
              content="SalesCatcher.io is ready to have a discussion with you and show you our capabilities. Please fill out this form and we will be in contact shortly."
            />
            {/* <div className="BannerStrip" />

            <Link to="#" className="btn btn_secondary learnMore">
              <span className="btn-text">Learn More</span>
            </Link> */}
          </Box>
        </Fade>
      </Container>
    </BannerWrapper>
  );
};

ContactBannerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  title1: PropTypes.object,
  description: PropTypes.object,
  textArea: PropTypes.object,
};

ContactBannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col: {
    width: ['100%', '100%', '90%', '100%', '55%'],
  },
  textArea: {
    width: ['100%', '100%', '80%', '80%', '80%'],
    margin: '0 auto',
  },
  title1: {
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    fontWeight: '400',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '10px',
    lineHeight: '1.31',
    textAlign: 'left',
    as: 'h3',
  },
  title: {
    fontSize: ['25px', '25px', '35px', '35px', '35px'],
    fontWeight: '400',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '20px',
    lineHeight: '1.31',
    textAlign: 'center',
    as: 'h2',
  },
  description: {
    fontSize: ['16px', '16px', '16px', '18px', '18px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '20px',
    textAlign: 'center',
  },
};

export default ContactBannerSection;
