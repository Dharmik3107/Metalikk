import React from "react";
import { theme } from "../Theme/Theme";
import styled from "styled-components";
import Socials from "../Socials/Socials";
import { NavLink } from "react-router-dom";

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
  &:last-child {
    border-bottom: 1px solid ${theme.border};
  }
`;

const ActiveLink = styled(NavLink)`
  color: ${theme.secondary};
  text-decoration: none;
  transition: 0.4s all;
  &:hover {
    cursor: pointer;
    color: ${theme.Hover};
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

const Sidebar = () => {
  return (
    <Navbar>
      <WebTitle>
        <ActiveLink to="/">METALIKK</ActiveLink>
      </WebTitle>
      <NavList>
        <NavItem>
          <ActiveLink to="/shapes">Shapes</ActiveLink>
        </NavItem>
        <NavItem>
          <ActiveLink to="/about">About</ActiveLink>
        </NavItem>
        <NavItem>
          <ActiveLink to="/contact">Contact</ActiveLink>
        </NavItem>
      </NavList>
      <Socials />
    </Navbar>
  );
};

export default Sidebar;
