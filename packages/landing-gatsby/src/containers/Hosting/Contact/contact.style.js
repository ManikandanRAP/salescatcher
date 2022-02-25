import styled from 'styled-components';

const ContactFromWrapper = styled.div`
  .form_fields {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    justify-content: space-between;
    > .reusecore__input,
    > input {
      width: 48.5%;
    }
    .input_full_width {
      width: 100%;
      textarea {
        border: 1px solid rgba(235, 235, 235, 0);
      }
    }
    .messagebox {
      margin: 0;
      margin-bottom: 20px;
      min-height: 100px;
      font-family: inherit;
      border-radius: 4px;
      border: 1px solid rgb(235, 235, 235);
    }
    .field-wrapper {
      margin-bottom: 15px;
    }
    @media only screen and (max-width: 678px) {
      .reusecore__input {
        width: 100%;
      }
    }
  }
  .formMessage p {
    color: #c92b47;
    font-weight: bold;
    font-size: 20px;
    margin-top: 35px;
  }
`;

export default ContactFromWrapper;
