import React from "react";
import styled from "styled-components";
import StoriesSectionOne from "../components/StoriesSections/StoriesSectionOne";
import StoriesSectionTwo from "../components/StoriesSections/StoriesSectionTwo";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Stories = () => {
  return (
    <Container>
      <StoriesSectionOne />
      <StoriesSectionTwo />
    </Container>
  );
};

export default Stories;
