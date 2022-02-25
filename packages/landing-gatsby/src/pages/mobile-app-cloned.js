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
import FeatureSection from '../containers/Hosting/Features';
import InfoSection from '../containers/Hosting/Info';
import AboutSection from '../containers/Hosting/About';
import PaymentSection from '../containers/Hosting/Payment';
import GuaranteeSection from '../containers/Hosting/Guarantee';
import FaqSection from '../containers/Hosting/Faq';
import ServicesSection from '../containers/Hosting/Services';
import AboutBannerSection from '../containers/Hosting/Banner/aboutsection';
import PricingSection from '../containers/Hosting/Pricing';
import TestimonialSection from '../containers/Hosting/Testimonials';
import ContactSection from '../containers/Hosting/Contact';
import Footer from '../containers/Hosting/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import SEO from '../components/seo';
import Section1 from '../containers/Hosting/mobileapp/section1';
import Section2 from '../containers/Hosting/mobileapp/section2';
import Section3 from '../containers/Hosting/mobileapp/section3';
import Section4 from '../containers/Hosting/mobileapp/section4';
import Section5 from '../containers/Hosting/mobileapp/section5';
import Section6 from '../containers/Hosting/mobileapp/section6';
import Section7 from '../containers/Hosting/mobileapp/section7';
export default () => {
  return (
    <ThemeProvider theme={hostingTheme}>
      <ParallaxProvider>
        <SEO title="Mobile App" />

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper className="AboutPage">
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>

          <Section1 />
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
