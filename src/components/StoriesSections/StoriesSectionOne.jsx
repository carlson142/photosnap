import React from "react";
import { IoArrowForward } from "react-icons/io5";
import styled from "styled-components";

import hero from "../../img/stories/desktop/moon-of-appalacia.jpg";
import heroTB from "../../img/stories/tablet/moon-of-appalacia.jpg";
// import heroMB from "../../img/stories/mobile/moon-of-appalacia.jpg";

import CustomButton from "../CustomButton";

const Container = styled.div`
  width: 100vw;
  height: 90vh;

  background: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;

  padding: 0 10rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  color: white;

  @media (max-width: 768px) {
    padding: 0 5rem;
    background: url(${heroTB});
    height: 70vh;
  }
`;

const Anons = styled.p`
  font-size: 1.6rem;
  letter-spacing: 1px;

  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 5rem;
  letter-spacing: 1px;

  width: 50%;

  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    width: 80%;
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Info = styled.div`
  display: flex;

  margin-bottom: 2rem;
`;

const Date = styled.div`
  font-size: 1.5rem;
  font-weight: 400;

  color: var(--color-light-gray);

  margin-right: 1rem;
`;

const Author = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;

const Text = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: var(--color-light-gray);

  width: 50%;

  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const BtnCont = styled.div`
  display: flex;
  align-items: center;
`;

const StoriesSectionOne = () => {
  return (
    <Container>
      <Anons>LAST MONTH'S FEATURED STORY</Anons>

      <Title>HAZY FULL MOON OF APPALACIA</Title>

      <Info>
        <Date>March 2nd 2020</Date>
        <Author>by John Appleseed</Author>
      </Info>

      <Text>
        The dissected plateau area, while not actually made up of geological
        mountains, is popularly called "mountains," especially in eastern
        Kentucky and West Virginia, and while the ridges are not high, the
        terrain is extremely rugged.
      </Text>

      <BtnCont>
        <CustomButton color="white">view the stories</CustomButton>
        <IoArrowForward size={20} />
      </BtnCont>
    </Container>
  );
};

export default StoriesSectionOne;
