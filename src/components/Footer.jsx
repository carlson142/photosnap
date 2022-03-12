import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import {
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoInstagram,
} from "react-icons/io5";

import { IoArrowForward } from "react-icons/io5";

import "./Footer.scss";
import footLogo from "../img/shared/desktop/logo-white.svg";
import CustomButton from "./CustomButton";

const Container = styled.footer`
  padding: 5rem 10rem;
  background-color: black;

  display: flex;
  justify-content: space-between;

  color: white;

  @media (max-width: 1024px) {
    padding: 5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 2rem;
  }
`;

const LogoCont = styled(Link).attrs({ to: "/" })``;

const Logo = styled.img``;

const Socials = styled.div`
  display: flex;

  margin-top: 3rem;
`;

const Social = styled.div`
  :not(:last-child) {
    margin-right: 3rem;
  }
`;

const Mid = styled.div`
  margin-right: auto;
  margin-left: 15rem;

  @media (max-width: 1024px) {
    margin-left: 5rem;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 2rem;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Item = styled(Link)`
  font-size: 1.3rem;
  font-family: inherit;

  color: white;
  text-decoration: none;
  text-transform: uppercase;

  transition: var(--tr);

  :hover {
    color: var(--color-light-gray);
  }

  :not(:last-child) {
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      margin-bottom: 1.5rem;
    }
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const BtnCont = styled.div`
  display: flex;
`;

const Copyright = styled.p`
  font-size: 1.6rem;
  margin-top: auto;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <LogoCont>
          <Logo src={footLogo} alt="footer logo" />
        </LogoCont>

        <Socials>
          <Social>
            <IoLogoFacebook className="social fb" />
          </Social>
          <Social>
            <IoLogoYoutube className="social yt" />
          </Social>
          <Social>
            <IoLogoTwitter className="social tw" />
          </Social>
          <Social>
            <IoLogoPinterest className="social pt" />
          </Social>
          <Social>
            <IoLogoInstagram className="social ig" />
          </Social>
        </Socials>
      </Left>

      <Mid>
        <List>
          <Item to="/">home</Item>
          <Item to="/stories">stories</Item>
          <Item to="/features">features</Item>
          <Item to="/pricing">pricing</Item>
        </List>
      </Mid>

      <Right>
        <BtnCont>
          <CustomButton color="white">get an invite</CustomButton>
          <IoArrowForward size={20} />
        </BtnCont>
        <Copyright>Copyright 2022. All Rights Reserved.</Copyright>
      </Right>
    </Container>
  );
};

export default Footer;
