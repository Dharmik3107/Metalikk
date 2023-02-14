import React from "react";
import styled from "styled-components";
import ShapesGrid from "../Components/Shapes/ShapesGrid";
import Sidebar from "../Components/Sidebar/Sidebar";
import { theme } from "../Components/Theme/Theme";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  min-height: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 180px !important;
`;
const Shapes = () => {
  return (
    <Main>
      <Sidebar />
      <ShapesGrid />
    </Main>
  );
};

export default Shapes;
