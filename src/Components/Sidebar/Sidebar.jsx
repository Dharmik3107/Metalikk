import React from "react";
import { theme } from "../Theme/Theme";
import styled from "styled-components";
import Socials from "../Socials/Socials";

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  min-height: 720px;
  width: 180px;
  background-color: ${theme.primary};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-decoration: none;
  list-style: none;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${theme.secondary};
`;

const NavItem = styled.li`
  width: 100%;
  text-align: center;
  padding: 10px 0px;
  border-top: 1px solid ${theme.border};
  transition: 0.4s all;
  &:last-child {
    border-bottom: 1px solid ${theme.border};
  }
  &:hover {
    cursor: pointer;
    color: ${theme.Hover};
  }
  &:hover svg {
    filter: brightness(0) saturate(100%) invert(76%) sepia(34%) saturate(3998%)
      hue-rotate(97deg) brightness(107%) contrast(101%);
  }
`;

const WebTitle = styled.h1`
  color: white;
  font-family: "Inter", sans-serif;
  padding-top: 10px;
  transition: 0.4s all;
  &:hover {
    cursor: pointer;
  }
`;

const SVGRightArrow = styled.svg`
  margin-left: 10px;
  fill: ${theme.secondary};
  transition-delay: 0.2s;
`;
const Sidebar = () => {
  return (
    <Navbar>
      <WebTitle>METALIKK</WebTitle>
      <NavList>
        <NavItem>
          Shapes
          <SVGRightArrow
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7 8.83008L4.05939 15.4707C3.6004 15.9297 2.85822 15.9297 2.40411 15.4707L1.3006 14.3672C0.841614 13.9082 0.841614 13.166 1.3006 12.7119L6.00763 8.00488L1.3006 3.29785C0.841614 2.83887 0.841614 2.09668 1.3006 1.64258L2.39923 0.529297C2.85822 0.0703125 3.6004 0.0703125 4.0545 0.529297L10.6951 7.16992C11.159 7.62891 11.159 8.37109 10.7 8.83008Z"
              fill="white"
            />
          </SVGRightArrow>
        </NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </NavList>
      <Socials />
    </Navbar>
  );
};

export default Sidebar;
