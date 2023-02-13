import React from "react";
import styled from "styled-components";
import { theme } from "../Components/Theme/Theme";
import Sidebar from "../Components/Sidebar/Sidebar";
import ContactForm from "../Components/ContactForm/ContactForm";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  min-height: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 90px !important;
`;

const Contact = () => {
  return (
    <Main>
      <Sidebar />
      <ContactForm />
    </Main>
  );
};

export default Contact;
