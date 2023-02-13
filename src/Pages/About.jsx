import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import styled from "styled-components";
import AboutText from "../Components/AboutText/AboutText";

const Main = styled.main`
  width: calc(100vw - 45px);
  height: 100vh;
  min-height: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 90px !important;
`;

const About = () => {
  return (
    <Main>
      <Sidebar />
      <AboutText />
    </Main>
  );
};

export default About;
