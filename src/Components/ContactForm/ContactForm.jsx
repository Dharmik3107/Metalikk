import React from "react";
import styled from "styled-components";
import { theme } from "../Theme/Theme";

const FormContainer = styled.div`
  width: 50%;
  height: fit-content;
  max-height: 80%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  margin-bottom: 20px !important;
  color: ${theme.primary};
  font-size: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const NameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px !important;
`;

const NameInput = styled.input`
  width: 100%;
  outline: 2px solid ${theme.primary};
  border: 2px solid ${theme.primary};
  height: 36px;
  text-indent: 1rem;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 600;
  border: none;
  transition: 0.3s all;
  &:focus {
    outline: 2px solid ${theme.Hover};
  }
  &::placeholder {
    color: ${theme.primary};
    opacity: 0.5;
  }
`;

const EmailInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  outline: 2px solid ${theme.primary};
  height: 36px;
  text-indent: 1rem;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 600;
  border: none;
  transition: 0.3s all;
  &:focus {
    outline: 2px solid ${theme.Hover};
  }
  &::placeholder {
    color: ${theme.primary};
    opacity: 0.5;
  }
`;

const Labels = styled.label`
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px !important;
`;

const TextBox = styled.textarea`
  width: 100%;
  height: 150px;
  text-indent: 1rem;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 600;
  padding-top: 1rem !important;
  outline: 2px solid ${theme.primary};
  border: none;
  transition: 0.3s all;
  &:focus {
    outline: 2px solid ${theme.Hover};
  }
  &::placeholder {
    color: ${theme.primary};
    opacity: 0.5;
  }
`;

const Button = styled.button`
  width: 180px;
  height: 36px;
  background: none;
  outline: 2px solid ${theme.primary};
  border: none;
  color: ${theme.primary};
  font-family: "Inter", sans-serif;
  letter-spacing: 0.1em;
  font-weight: 600;
  transition: 0.5s all;
  &:hover {
    cursor: pointer;
    box-shadow: inset 12em 0 0 0 ${theme.primary};
    color: ${theme.secondary};
  }
`;

const ContactForm = () => {
  return (
    <FormContainer>
      <Title>Contact me</Title>
      <Form action="">
        <NameContainer>
          <Field>
            <Labels>First Name</Labels>
            <NameInput placeholder="Enter First Name" required />
          </Field>
          <Field>
            <Labels>Last Name</Labels>
            <NameInput placeholder="Enter Last Name" required />
          </Field>
        </NameContainer>
        <Field>
          <Labels>Email Address</Labels>
          <EmailInput placeholder="Enter Email Address" required />
        </Field>
        <Field>
          <Labels>Message</Labels>
          <TextBox placeholder="Enter your valuable message here..." required />
        </Field>
      </Form>
      <Button type="submit">Email Me!</Button>
    </FormContainer>
  );
};

export default ContactForm;
