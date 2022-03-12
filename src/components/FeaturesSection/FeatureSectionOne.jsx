import React from "react";
import styled from "styled-components";

import hero from "../../img/features/desktop/hero.jpg";

const Container = styled.div`
  height: 65vh;
  width: 100vw;

  display: flex;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    height: 70vh;
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

const FeatureSectionOne = () => {
  return (
    <Container>
      <Left>
        <Title>FEATURES</Title>
        <Text>
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photograpers who wanted to share their
          stories.
        </Text>
      </Left>

      <Right>
        <Image src={hero} alt="hero" />
      </Right>
    </Container>
  );
};

export default FeatureSectionOne;
