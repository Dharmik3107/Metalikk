import React from "react";
import styled from "styled-components";
import { theme } from "../Theme/Theme";
import { NavLink } from "react-router-dom";

const TextContainer = styled.div`
  /* min-width: 300px;
  max-width: 700px;
  min-height: 300px;
  max-height: 700px; */
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

const Button = styled.button`
  background: none;
  border: 2px solid ${theme.primary};
  padding: 5px 15px !important;
  font-size: 20px;
  font-family: "Inter", sans-serif;
  color: ${theme.primary};
  margin-top: 10px !important;
  transition: 0.7s all;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    box-shadow: inset 11em 0 0 0 ${theme.primary};
    color: ${theme.secondary};
  }
`;

const ActiveLink = styled(NavLink)`
  text-decoration: none;
`;

const HeroText = () => {
  return (
    <TextContainer>
      <LargeText>
        METALIKK<SpanText>.info</SpanText>
      </LargeText>
      <SmallText>A Weight Calculator</SmallText>
      <ActiveLink to="/shapes">
        <Button>Let's Calculate</Button>
      </ActiveLink>
    </TextContainer>
  );
};

export default HeroText;
