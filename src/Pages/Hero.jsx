import React from "react";
import styled from "styled-components";
import { theme } from "../Components/Theme/Theme";
import Sidebar from "../Components/Sidebar/Sidebar";
import HeroText from "../Components/HeroText/HeroText";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  min-height: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
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
