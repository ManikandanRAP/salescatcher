import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import BannerWrapper from '../banner.style';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';

import IconBox from '../../Iconbox';

const BannerSection3 = ({ row, col, title, title1, description, textArea }) => {
  return (
    <BannerWrapper id="banner_section3">
      <Container className="banner_container">
        <Fade right cascade>
          <Box {...textArea}>
            {/* <Heading {...title1} content="SalesCatcher Intelligent Offering" /> */}
            <Heading {...title} content="Power Your Dealership To Victory" />
            <Text
              {...description}
              content="Our tech-stack is second to none in the automotive sales industry. We are built on the cloud with a decoupled serverless architecture powered by true AI technologies that deliver new capabilities and efficiencies to power your dealership to victory."
            />
            <IconBox />
          </Box>
        </Fade>
      </Container>
    </BannerWrapper>
  );
};

BannerSection3.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  title1: PropTypes.object,
  description: PropTypes.object,
  textArea: PropTypes.object,
};

BannerSection3.defaultProps = {
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
    width: '100%',
  },
  title1: {
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    fontWeight: '400',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '10px',
    lineHeight: '1.31',
    textAlign: 'center',
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

export default BannerSection3;
