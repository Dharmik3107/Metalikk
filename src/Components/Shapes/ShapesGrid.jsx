import React from "react";
import styled from "styled-components";
import { theme } from "../Theme/Theme";

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 180px !important;
`;

const GridRow = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridItem = styled.div`
  width: 25vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  border: 1px solid rgba(131, 131, 131, 0.25);
  padding: 0px 10px !important;
  transition: 0.5s all;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 5%);
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 90%;
`;

const ItemTitle = styled.h3`
  width: 100%;
  height: 10%;
  border-top: 1px solid rgba(131, 131, 131, 0.25);
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-size: 25px;
  color: ${theme.primary};
`;

const ShapesGrid = () => {
  return (
    <GridContainer>
      <GridRow>
        <GridItem>
          <ItemImage src="#" alt="Shape Image- Cylinder"></ItemImage>
          <ItemTitle>Cylinder</ItemTitle>
        </GridItem>
        <GridItem>
          <ItemImage src="#" alt="Shape Image- Cubical"></ItemImage>
          <ItemTitle>Cubical</ItemTitle>
        </GridItem>
        <GridItem>
          <ItemImage src="#" alt="Shape Image- Hexagonal"></ItemImage>
          <ItemTitle>Hexagonal</ItemTitle>
        </GridItem>
        <GridItem>
          <ItemImage src="#" alt="Shape Image- Plate"></ItemImage>
          <ItemTitle>Plate</ItemTitle>
        </GridItem>
      </GridRow>
      <GridRow>
        <GridItem>
          <ItemImage src="#" alt="Shape Image- L Section"></ItemImage>
          <ItemTitle>L Section</ItemTitle>
        </GridItem>
        <GridItem>
          <ItemImage src="#" alt="Shape Image- I Section"></ItemImage>
          <ItemTitle>I Section</ItemTitle>
        </GridItem>
        <GridItem>
          <ItemImage src="#" alt="Shape Image- C Section"></ItemImage>
          <ItemTitle>C Section</ItemTitle>
        </GridItem>
        <GridItem>
          <ItemImage src="#" alt="Shape Image- T Section"></ItemImage>
          <ItemTitle>T Section</ItemTitle>
        </GridItem>
      </GridRow>
    </GridContainer>
  );
};

export default ShapesGrid;
