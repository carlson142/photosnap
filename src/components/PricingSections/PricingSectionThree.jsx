import React from "react";
import styled from "styled-components";
import PSThTable from "./PSThTable";

const Container = styled.div`
  padding: 0 10rem 15rem 10rem;
  padding-top: 0;

  display: flex;
  flex-direction: column;

  align-items: center;

  @media (max-width: 600px) {
    padding: 0 5rem 5rem 5rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 3px;

  margin-bottom: 3rem;
`;

const PricingSectionThree = () => {
  return (
    <Container>
      <Title>Compare</Title>
      <PSThTable />
    </Container>
  );
};

export default PricingSectionThree;
