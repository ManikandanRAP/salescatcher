import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Input from 'common/src/components/Input';
import Container from 'common/src/components/UI/Container';

import ContactFromWrapper from './contact.style';

import axios from 'axios';

const ContactSection = ({
  sectionWrapper,
  row,
  secTitleWrapper,
  contactForm,
  addressForm,
  secHeading,
  secText,
  button,
  note,
}) => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://getform.io/f/450dc298-de00-4844-9637-8acd90737815',
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(
          true,
          'Thanks for contacting us! We will get back to you soon.',
          form
        );
      })
      .catch(r => {
        handleServerResponse(
          false,
          'Oops! the connection has been interrupted. Please try to submit again.',
          form
        );
      });
  };
  return (
    <Box {...sectionWrapper}>
      <Container>
        <ContactFromWrapper>
          {/* <Box {...secTitleWrapper}>
            <Heading
              {...secHeading}
              content="SalesCatcher.io is ready to have a discussion with you and show you our capabilities. Please fill out this form and we will be in contact shortly."
            />
          </Box> */}
          <Box {...row}>
            <Box {...contactForm}>
              <Heading {...secHeading} content="Drop Us a Note Today" />
              <form onSubmit={handleOnSubmit}>
                <div className="form_fields">
                  <Input
                    inputType="text"
                    Name="firstName"
                    placeholder="First Name*"
                    aria-label="text"
                    required
                  />
                  <Input
                    inputType="text"
                    Name="lastName"
                    placeholder="Last Name"
                    iconPosition="right"
                    isMaterial={false}
                    aria-label="text"
                  />
                </div>
                <div className="form_fields">
                  <Input
                    inputType="text"
                    Name="phone"
                    placeholder="Phone*"
                    iconPosition="right"
                    isMaterial={false}
                    aria-label="form_input"
                    required
                  />
                  <Input
                    inputType="email"
                    Name="email"
                    placeholder="Email*"
                    iconPosition="right"
                    isMaterial={false}
                    aria-label="email"
                    required
                  />
                </div>
                <div className="form_fields">
                  <Input
                    inputType="text"
                    Name="dealership"
                    placeholder="Dealership Name*"
                    iconPosition="right"
                    isMaterial={false}
                    aria-label="text"
                    required
                  />
                  <Input
                    inputType="text"
                    Name="title"
                    placeholder="Title*"
                    iconPosition="right"
                    isMaterial={false}
                    aria-label="text"
                    required
                  />
                </div>
                <div className="form_fields">
                  <Input
                    inputType="textarea"
                    Name="message"
                    placeholder="What would you like to discuss?*"
                    iconPosition="right"
                    isMaterial={false}
                    aria-label="text"
                    aria-label="message"
                    className="messagebox input_full_width"
                    required
                  />
                </div>
                <Button
                  {...button}
                  title="SEND MESSAGE"
                  className="btn btn-grad-red"
                  type="submit"
                  value="submit"
                />
                <div className="formMessage">
                  {serverState.status && (
                    <p className={!serverState.status.ok ? 'errorMsg' : ''}>
                      {serverState.status.msg}
                    </p>
                  )}
                </div>
                <div className="empty_space20" />
              </form>
            </Box>
            {/* <Box {...addressForm}>
              <Heading {...secHeading} content="CONTACT INFORMATION" />
              <address className="">
                <div>Address:</div>
                <div>
                  2133 W Chapman Ave, M<br />
                </div>
                <div>Orange CA 92868&nbsp;&nbsp;</div>
                <div>&nbsp;</div>
                <div>Telephone:</div>
                <div><a href="tel:8883176808">(888) 317-6808</a></div>
                <div>&nbsp;</div>
                <div>Fax:</div>
                <div><a href="tel:7149419076">(714) 941-9076</a></div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </address>
            </Box> */}
          </Box>
        </ContactFromWrapper>
      </Container>
    </Box>
  );
};

ContactSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  contactForm: PropTypes.object,
  addressForm: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  button: PropTypes.object,
  note: PropTypes.object,
};

ContactSection.defaultProps = {
  sectionWrapper: {
    id: 'contact_section',
    as: 'section',
    pt: '40px',
    pb: '30px',
    // pb: ['0px', '0px', '0px', '0px', '80px'],
    bg: '#f9fbfd',
  },
  secTitleWrapper: {
    mb: ['45px', '50px', '60px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: `${2}`,
    letterSpacing: '0.15em',
    fontWeight: `${6}`,
    color: 'primary',
    mb: `${3}`,
  },
  secHeading: {
    textAlign: 'center',
    fontSize: [`${6}`, `${8}`],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: `${8}`,
    as: 'h3',
  },
  row: {
    flexBox: true,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  contactForm: {
    width: [1, 1, 1, '65%', '70%'],
    padding: '0 20px',
    margin: '30px 0',
  },
  addressForm: {
    width: [1, 1, 1, '35%', '30%'],
    padding: '0 20px',
    margin: '30px 0',
  },
  button: {
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `${4}`,
  },
  note: {
    fontSize: ['13px', '14px', '15px', '15px', '15px'],
    color: '#5d646d',
    lineHeight: '1.87',
    textAlign: 'center',
  },
};

export default ContactSection;
