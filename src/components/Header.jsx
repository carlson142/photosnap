import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { IoMenuOutline } from "react-icons/io5";

import logo from "../img/shared/desktop/logo.svg";
import MobileMenu from "./MobileMenu";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 10rem;

  position: relative;

  @media (max-width: 1024px) {
    padding: 2rem 5rem;
  }
`;

const LogoCont = styled(Link).attrs({ to: "/photosnap/" })``;

const Logo = styled.img``;

const List = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled(Link)`
  text-decoration: none;

  font-size: 1.5rem;
  font-family: inherit;
  color: black;

  position: relative;

  transition: all 0.2s ease-in;

  :not(:last-child) {
    margin-right: 5rem;
  }

  :hover {
    color: var(--color-light-gray);
  }

  ::after {
    content: "";
    display: block;

    position: absolute;
    bottom: -0.7rem;

    height: 1px;
    width: 0;
    background-color: black;

    opacity: 0;
    transition: all 0.2s ease-in;
  }

  :hover::after {
    opacity: 1;
    width: 100%;
  }
`;

const BtnCont = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomButton = styled.button`
  border: none;

  font-size: 1.3rem;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 1px;

  padding: 1.5rem 2rem;

  background-color: black;
  color: white;
  cursor: pointer;

  transition: var(--tr);

  :hover {
    background-color: var(--color-light-gray);
    color: black;
  }
`;

const HambCont = styled.div`
  display: none;
  user-select: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [mobile, setMobile] = useState(false);

  const toggleMenu = () => {
    setMobile(!mobile);
  };

  return (
    <Container>
      <LogoCont>
        <Logo src={logo} alt="logo" />
      </LogoCont>

      <List>
        <Item to="/stories">STORIES</Item>
        <Item to="/features">FEATURES</Item>
        <Item to="/pricing">PRICING</Item>
      </List>

      <BtnCont>
        <CustomButton>get an invite</CustomButton>
      </BtnCont>

      <HambCont>
        <IoMenuOutline size={20} onClick={toggleMenu} />
      </HambCont>
      <AnimatePresence>
        {mobile && <MobileMenu toggleMenu={toggleMenu} />}
      </AnimatePresence>
    </Container>
  );
};

export default Header;
