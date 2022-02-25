import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Container from 'common/src/components/UI/Container';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';

const GlideCarouselSection = ({ title }) => {
  const glide1option = {
    type: 'carousel',
    dots: 'true',
    autoplay: 4500,
    perView: 1,
    animationDuration: 400,
    animationTimingFunc: 'cubic-bezier(.95,.73,.29,.84)',
    hoverpause: true,
  };
  const slideData = [
    'Real-time immediate 24/7 lead response',
    'Customer Intent - IO understands the way humans do',
    'Vehicle Match - IO searches your inventory + all other local inventory to find the perfectly matched vehicle',
    'On-the-spot-messaging - IO creates and delivers sculpted messages via email and text',
    'IO notifies sales rep when a lead is engaged and ready to convert',
    'IO integrates effortlessly to your CRM & DMS systems for fast and easy deployment',
  ];
  return (
    <div>
      <GlideCarousel options={glide1option}>
        <>
          {slideData.map((item, index) => (
            <GlideSlide key={index}>
              <Heading {...title} content={item} />
            </GlideSlide>
          ))}
        </>
      </GlideCarousel>
    </div>
  );
};

GlideCarouselSection.propTypes = {
  title: PropTypes.object,
};

GlideCarouselSection.defaultProps = {
  title: {
    fontSize: ['20px', '20px', '20px', '20px', '20px'],
    fontWeight: '400',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.31',
    textAlign: 'left',
    as: 'h2',
    padding: '0',
  },
};

export default GlideCarouselSection;
