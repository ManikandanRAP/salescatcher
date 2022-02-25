import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import Img from 'gatsby-image';
import BannerWrapper from './wrapper';

import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';

const BannerHomeSection = ({
  row,
  col,
  bannertitlefont,
  bannersubtitlefont,
}) => {
  return (
    <>
      <BannerWrapper id="banner_home_section">
        <Container className="banner_container">
          <Box {...row}>
            <Box {...col}>
              <Text
                {...bannertitlefont}
                content="Go Mobile and Grow your Vape and Smoke Online Store Revenue by 3x"
              />
              <Text
                {...bannersubtitlefont}
                content="Adopt a mobile-first strategy with a private app, engage more effectively 
                and market your products with real-time rich media notifications! Retain 
                your customers with top-notch shopping experience and witness a 
                phenomenal boost in your conversion rates!"
              />
              <Link to="/contact" className="btn btn-grad-red">
                <span className="btn-text">Get a Mobile App Now!</span>
              </Link>
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
    justifyContent: 'flex-start',
    className: 'row',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '100%', '60%', '60%'],
  },
  bannertitlefont: {
    fontSize: ['40px', '42px', '45px', '50px', '54px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mt: '100px',
    mb: '10px',
    lineHeight: '1.31',
    textAlign: 'left',
    as: 'h3',
  },
  bannersubtitlefont: {
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    fontWeight: '400',
    color: '#fff',
    letterSpacing: '-0.025em',
    mt: '50px',
    mb: '50px',
    lineHeight: '1.5',
    textAlign: 'left',
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
