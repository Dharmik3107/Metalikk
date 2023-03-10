import React from "react";
import HeroText from "../Components/HeroText/HeroText";
import Sidebar from "../Components/Sidebar/Sidebar";
import styled from "styled-components";

const Main = styled.main`
  width: calc(100vw - 45px);
  height: 100vh;
  min-height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 90px !important;
`;

const Hero = () => {
  return (
    <Main>
      <Sidebar />
      <HeroText />
    </Main>
  );
};

export default Hero;
