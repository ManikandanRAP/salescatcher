import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import IconBoxWrapper from './iconbox.style';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';

import section3Img1 from 'common/src/assets/image/hosting/Icons/advanced-ai.png';
import section3Img2 from 'common/src/assets/image/hosting/Icons/built-for-automobile-dealerships.png';
import section3Img3 from 'common/src/assets/image/hosting/Icons/robust-serverless-architecture.png';

const IconBox = ({ row, col, title, description }) => {
  return (
    <IconBoxWrapper>
      <Box {...row}>
        <Box {...col}>
          <img src={section3Img1} alt="Advanced AI" />
          <Heading
            {...title}
            dangerouslySetInnerHTML={{
              __html: 'Advanced<br />AI',
            }}
          />
        </Box>
        <Box {...col}>
          <img src={section3Img2} alt="Built For Automobile Dealership" />
          <Heading
            {...title}
            dangerouslySetInnerHTML={{
              __html: 'Built For Automobile<br />Dealership',
            }}
          />
        </Box>
        <Box {...col}>
          <img src={section3Img3} alt="Robust Serverless Architecture" />
          <Heading
            {...title}
            dangerouslySetInnerHTML={{
              __html: 'Robust Serverless<br />Architecture',
            }}
          />
        </Box>
      </Box>
    </IconBoxWrapper>
  );
};

IconBox.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
};

IconBox.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    className: 'row',
    pt: '30px',
    pb: '0',
  },
  col: {
    width: [1, '31.33%', '31.33%', '25%', '25%'],
    className: 'col',
  },
  title: {
    fontSize: ['16px', '16px', '16px', '16px', '16px'],
    fontWeight: 'bold',
    color: '#454545',
    letterSpacing: '-0.025em',
    mt: '10px',
    mb: '10px',
    lineHeight: '1.31',
    textAlign: 'center',
    as: 'h4',
  },
  description: {
    fontSize: ['16px', '16px', '16px', '18px', '18px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '20px',
    textAlign: 'center',
  },
};

export default IconBox;
