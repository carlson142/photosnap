import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 25vw;
  height: 40vh;

  padding: 0 5rem;

  background-color: var(--color-light-gray);
  color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1440px) {
    padding: 0 2rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const ProCard = styled.div`
  width: 25vw;
  height: 45vh;

  padding: 0 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: black;
  color: white;
  position: relative;

  transform: translateY(-2.5rem);

  ::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;

    height: 5px;
    width: 100%;
    background: linear-gradient(
      to right,
      var(--color-orange),
      var(--color-purple),
      var(--color-blue)
    );
  }

  @media (max-width: 1440px) {
    padding: 0 2rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
    transform: translateY(0);

    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;

  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;

  text-align: center;

  margin-bottom: 2rem;
`;

const PriceCont = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  margin-bottom: 3rem;
`;

const Price = styled.span`
  font-size: 3rem;

  transition: var(--tr);
`;

const Duration = styled.span`
  font-size: 1.5rem;
`;

const CustomButton = styled.button`
  border: none;
  width: 100%;

  font-size: 1.3rem;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 2px;

  padding: 1.5rem 2rem;

  background-color: black;
  background-color: ${(props) => (props.w ? "black" : "white")};
  color: ${(props) => (props.w ? "white" : "black")};

  cursor: pointer;

  transition: var(--tr);

  :hover {
    background-color: ${(props) => (props.w ? "white" : "gray")};
    color: ${(props) => (props.w ? "black" : "white")};
  }
`;

const PSTCardComponent = ({ toggle }) => {
  return (
    <Container>
      <Card>
        <Title>Basic</Title>

        <Text>
          Includes basic usage of our platform. Recommended for new and aspiring
          photographers.
        </Text>

        <PriceCont>
          <Price>${toggle === false ? "19.00" : "190.00"}</Price>
          <Duration>per {toggle === false ? "month" : "year"}</Duration>
        </PriceCont>

        <CustomButton w>Pick Plan</CustomButton>
      </Card>

      <ProCard>
        <Title>Pro</Title>

        <Text>
          More advanced features available. Recommended for photography veterans
          and professionals.
        </Text>

        <PriceCont>
          <Price>${toggle === false ? "39.00" : "390.00"}</Price>
          <Duration>per {toggle === false ? "month" : "year"}</Duration>
        </PriceCont>

        <CustomButton>Pick Plan</CustomButton>
      </ProCard>

      <Card>
        <Title>Business</Title>

        <Text>
          Additional features available such as more detailed metrics.
          Recommended for business owners.
        </Text>

        <PriceCont>
          <Price>${toggle === false ? "99.00" : "990.00"}</Price>
          <Duration>per {toggle === false ? "month" : "year"}</Duration>
        </PriceCont>

        <CustomButton w>Pick Plan</CustomButton>
      </Card>
    </Container>
  );
};

export default PSTCardComponent;
