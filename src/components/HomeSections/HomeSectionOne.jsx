import React from "react";
import { IoArrowForward } from "react-icons/io5";
import styled from "styled-components";
import CustomButton from "../CustomButton";

import hero from "../../img/home/desktop/create-and-share.jpg";

const Container = styled.div`
  height: 90vh;
  width: 100vw;

  display: flex;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

const Left = styled.div`
  width: 40vw;
  background-color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 10rem;

  color: white;

  @media (max-width: 1440px) {
    padding: 0 7rem;
  }

  @media (max-width: 1024px) {
    width: 60vw;
  }

  @media (max-width: 768px) {
    padding: 0 4rem;
  }

  @media (max-width: 600px) {
    width: 100vw;
    padding: 5rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: 2px;

  margin-bottom: 3rem;

  @media (max-width: 1440px) {
    font-size: 3rem;
  }

  @media (max-width: 455px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;

  margin-bottom: 3rem;
`;

const BtnCont = styled.div`
  display: flex;
`;

const Right = styled.div`
  width: 60vw;

  @media (max-width: 1024px) {
    width: 40vw;
  }

  @media (max-width: 600px) {
    height: 100%;
    width: 100vw;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const HomeSectionOne = () => {
  return (
    <Container>
      <Left>
        <Title>CREATE AND SHARE YOUR PHOTO STORIES</Title>
        <Text>
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </Text>

        <BtnCont>
          <CustomButton color="white">GET AN INVITE</CustomButton>
          <IoArrowForward size={20} />
        </BtnCont>
      </Left>

      <Right>
        <Image src={hero} alt="hero" />
      </Right>
    </Container>
  );
};

export default HomeSectionOne;
