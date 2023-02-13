import React from "react";
import styled from "styled-components";
import { theme } from "../Theme/Theme";

const TextContainer = styled.div`
  min-width: 300px;
  max-width: 700px;
  min-height: 300px;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const LargeText = styled.h1`
  font-size: 150px;
  font-family: "Inter", sans-serif;
  color: ${theme.primary};
`;
const SpanText = styled.span`
  font-size: 60px;
  opacity: 0.5;
`;
const SmallText = styled.h5`
  font-size: 60px;
  font-family: "Inter", sans-serif;
  color: ${theme.primary};
  opacity: 0.75;
`;

const HeroText = () => {
  return (
    <TextContainer>
      <LargeText>
        METALIKK<SpanText>.info</SpanText>
      </LargeText>
      <SmallText>A Weight Calculator</SmallText>
    </TextContainer>
  );
};

export default HeroText;
