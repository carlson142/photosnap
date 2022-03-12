import React from "react";
import { IoArrowForward } from "react-icons/io5";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import hero2 from "../../img/home/desktop/beautiful-stories.jpg";
import CustomButton from "../CustomButton";

const Container = styled.div`
  height: 90vh;
  width: 100vw;

  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60vw;

  @media (max-width: 1024px) {
    width: 40vw;
  }

  @media (max-width: 600px) {
    height: 100%;
    width: 100vw;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: 2px;

  margin-bottom: 3rem;

  @media (max-width: 144rem) {
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
  align-items: center;
`;

const Right = styled.div`
  width: 40vw;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 10rem;

  color: black;

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

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const HomeSectionTwo = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Left>
        <Image src={hero2} alt="hero 2" />
      </Left>

      <Right>
        <Title>BEAUTIFUL STORIES EVERY TIME</Title>
        <Text>
          We provide design templates to ensure your stories look terrific.
          Easily add photos, text, embed maps and media from other networks.
          Then share your story with everyone.
        </Text>

        <BtnCont>
          <CustomButton color="black" onClick={() => navigate("/stories")}>
            view the stories
          </CustomButton>
          <IoArrowForward size={20} />
        </BtnCont>
      </Right>
    </Container>
  );
};

export default HomeSectionTwo;
