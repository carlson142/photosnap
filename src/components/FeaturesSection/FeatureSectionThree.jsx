import React from "react";
import { IoArrowForward } from "react-icons/io5";
import styled from "styled-components";

import hero from "../../img/shared/desktop/bg-beta.jpg";
import CustomButton from "../CustomButton";

const Container = styled.div`
  width: 100vw;
  height: 35vh;

  background: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  padding: 0 5rem;

  @media (max-width: 1024px) {
    padding: 0 0 0 5rem;
  }

  @media (max-width: 600px) {
    justify-content: center;
    padding: 0;
  }
`;

const Text = styled.h1`
  font-size: 4rem;
  font-weight: 400;

  color: white;

  @media (max-width: 1440px) {
    font-size: 3rem;
  }

  @media (max-width: 455px) {
    font-size: 2rem;
  }
`;

const Right = styled.div`
  flex: 1;

  padding: 0 5rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    padding: 0 5rem 0 0;
  }

  @media (max-width: 600px) {
    justify-content: center;
    padding: 0;
  }
`;

const BtnCont = styled.div`
  display: flex;
  align-items: center;
`;

const FeatureSectionThree = () => {
  return (
    <Container>
      <Left>
        <Text>
          WE'RE IN BETA <br></br>GET YOUR INVITE TODAY
        </Text>
      </Left>
      <Right>
        <BtnCont>
          <CustomButton color="white">get an invite</CustomButton>
          <IoArrowForward size={20} color="white" />
        </BtnCont>
      </Right>
    </Container>
  );
};

export default FeatureSectionThree;
