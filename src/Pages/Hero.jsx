import React from "react";
import styled from "styled-components";
import { theme } from "../Components/Theme/Theme";
import Sidebar from "../Components/Sidebar/Sidebar";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  min-height: 720px;
`;

const Hero = () => {
  return (
    <Main>
      <Sidebar />
    </Main>
  );
};

export default Hero;
