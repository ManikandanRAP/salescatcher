import React from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { hostingTheme } from 'common/src/theme/hosting';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/Hosting/hosting.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/Hosting/Navbar';
import Helmet from 'react-helmet';
// import FeatureSection from "../containers/Hosting/Features";
// import InfoSection from "../containers/Hosting/Info";
// import AboutSection from "../containers/Hosting/About";
// import PaymentSection from "../containers/Hosting/Payment";
// import GuaranteeSection from "../containers/Hosting/Guarantee";
// import FaqSection from "../containers/Hosting/Faq";
// import ServicesSection from "../containers/Hosting/Services";
// import AboutBannerSection from "../containers/Hosting/Banner/aboutsection";
// import PricingSection from "../containers/Hosting/Pricing";
// import TestimonialSection from "../containers/Hosting/Testimonials";
// import ContactSection from "../containers/Hosting/Contact";
// import Footer from "../containers/Hosting/Footer";
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import SEO from '../components/seo';
import Banner from '../containers/Hosting/Banner/bannermobileapp';
import Section1 from '../containers/Hosting/mobileapp/section1';
import Section2 from '../containers/Hosting/mobileapplication/section2';
import Section3 from '../containers/Hosting/mobileapp/section3';
import Section4 from '../containers/Hosting/mobileapplication/section4';
import Section5 from '../containers/Hosting/mobileapp/section5';
import Section6 from '../containers/Hosting/mobileapp/section6';
import Section7 from '../containers/Hosting/mobileapp/section7';
import image from '../../../common/src/assets/image/hosting/Pages/mobileapp/mobileapp-section.png';
export default () => {
  return (
    <ThemeProvider theme={hostingTheme}>
      <ParallaxProvider>
        {/* <SEO title="Mobile App" description="" /> */}
        <Helmet>
          <title>Mobile App | SalesCatcher</title>
          <meta
            name="description"
            content="Maximize your Shopify store revenue 
                    with a fully-integrable and scalable 
                    mobile app solution"
          />
          <meta property="og:image" content={image} />
        </Helmet>
        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper className="AboutPage">
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          {/* <Section1 /> */}
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
        </ContentWrapper>
      </ParallaxProvider>
    </ThemeProvider>
  );
};
