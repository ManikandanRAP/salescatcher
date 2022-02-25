import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Container from 'common/src/components/UI/Container';

import AboutImage from 'common/src/assets/image/hosting/Pages/About.png';

import AboutWrapper from './about.style';

const AboutSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "image/hosting/Pages/About.png" }) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Box {...sectionWrapper}>
      <Container>
        <AboutWrapper>
          {/* <Heading
            {...title}
            content="About Us" 
          />*/}
          <div className="aboutContainer">
            <Fade left cascade>
              {/* <img  src={AboutImage} alt="About Us" /> */}
              <Image
                fluid={Data.file.childImageSharp.fluid}
                objectFit="contain"
                alt="About Us"
                className="image"
              />
            </Fade>
            <Fade right cascade>
              <div>
                <Text
                  {...description}
                  content="SalesCatcher.io was founded in 2008 but its true genesis goes back to 2006 in the internet department of a Buick/GMC dealership located in southern California."
                />
                <Text {...title} content="Automotive Lead Engagement" />
                <Text
                  {...description}
                  content="You can say we have automotive DNA in our blood. Our goal, from the beginning, was to help the dealership sales professionals communicate better with their customers. "
                />
                <Text
                  {...description}
                  content="SalesCatcher.io has come a long way over the years and now we have the best technology stack in all of the automotive industry. We are committed to reimagining and reinventing our technology to provide you with the new capabilities you need to excel. We are bringing tomorrow’s technologies today so you can obliterate your competition."
                />
                <Text
                  {...description}
                  content="Our tech stack is serverless and built on the cloud so we can deliver the best performance at scale regardless of where your dealership is located. SC achieves this by always using local CDNs to deliver the content and minimize latency. We use the latest in API, AI, & RPA technologies to make integration with your CRM and DMS systems a breeze. We have a decoupled architecture that is powered by our AI engine, SC Intelligent Offering, which allows us to provide our quality content to your customers regardless of how they prefer to consume it. We provide true headless capabilities so your customer can digest the content where and how they like. They could be on a mobile device or desktop, they could be in an email or text message, or on their favorite social media site, or using voice commands --- it doesn’t matter! Our new technology stack will allow you to meet your customers wherever they are and however, they like. These new innovations and capabilities will raise your brand above your competition."
                />
                <Text
                  {...description}
                  content="SalesCatcher.io’s Artificial Intelligence technology is what elevates us above our competitors. We have integrated AI, ML, and RPA automation deep into our tech stack which is the intelligence that powers our platform and improved effectiveness. Our AI isn’t exhaustive but it is human-like and will quickly learn to be your top-performing sales professional. It will never replace your sales teams but it will give them superhuman type powers."
                />
                <Text
                  {...description}
                  content="Our commitment is to you, our customer, and to your customers the car buyers. We are dedicated to bringing you the latest technologies to help you serve your customers the best. "
                />
                <Text {...title} content="Mobile Commerce Solutions " />
                <Text
                  {...description}
                  content="We have expanded our services to mobile commerce solutions that are perfect for e-commerce businesses. Our world-class solutions can increase conversions 3x and maximize your Shopify revenue through a seamless, fully-integrable and scalable mobile app solution."
                />
                <Text
                  {...title}
                  content="Digital Marketing, Website Development & Maintenance "
                />
                <Text
                  {...description}
                  content="SalesCatcher offers technology-driven marketing and sales services with a scientific approach for guaranteed outcomes. We work with you hand in glove, partners in the truest sense. We’ll do whatever it takes to get leads flowing. Our end-to-end services entail support at every stage from Go-to-Market."
                />
              </div>
            </Fade>
          </div>
        </AboutWrapper>
      </Container>
    </Box>
  );
};

AboutSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
};

AboutSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: '40px',
    pb: '40px',
    // pb: ['40px', '40px', '80px', '80px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '49%', '49%', '49%'],
    mb: '30px',
    mt: '30px',
  },
  imageArea: {
    width: ['100%', '100%', '49%', '49%', '49%'],
    mb: '30px',
    mt: '30px',
  },
  title: {
    fontSize: ['20px', '20px', '18px', '18px', '18px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mt: '30px',
    mb: '15px',
    textAlign: 'left',
  },
  description: {
    fontSize: '16px',
    color: '#252525',
    lineHeight: '1.75',
    mb: '10px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default AboutSection;
