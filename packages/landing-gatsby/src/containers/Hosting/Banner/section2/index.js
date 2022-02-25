import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Container from 'common/src/components/UI/Container';
import BannerWrapper from '../banner.style';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';

import GlideCarouselSection from '../../GlideCarousel';

const BannerSection2 = ({ row, col, title, title1, description, textArea }) => {
  return (
    <BannerWrapper id="banner_section2">
      <div className="boxContainer">
        <Container fullWidth noGutter className="banner_container">
          <Fade left cascade>
            <Box {...textArea}>
              <Heading
                {...title1}
                content="SalesCatcher Intelligent Offering"
              />
              <GlideCarouselSection />
              <div className="BannerStrip" />
              <Text
                {...description}
                content="Our IO bot can read and derive intent from any and all leads, it understands what the customer is looking for and matches up an offer that is perfect for them. IO works in auto-drive as your internet super salesman always working and always converting."
              />
              <Link to="/about" className="btn btn_secondary learnMore">
                <span className="btn-text">Learn More</span>
              </Link>
            </Box>
          </Fade>
        </Container>
      </div>
    </BannerWrapper>
  );
};

BannerSection2.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  title1: PropTypes.object,
  description: PropTypes.object,
  textArea: PropTypes.object,
};

BannerSection2.defaultProps = {
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
    width: ['100%', '70%', '80%', '65%', '55%'],
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
    mb: '0',
    lineHeight: '1.31',
    textAlign: 'left',
    as: 'h2',
  },
  description: {
    fontSize: ['16px', '16px', '16px', '18px', '18px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '20px',
    textAlign: 'left',
  },
};

export default BannerSection2;
