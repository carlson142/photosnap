import React from "react";
import styled from "styled-components";
import FeatureSectionOne from "../components/FeaturesSection/FeatureSectionOne";
import FeatureSectionThree from "../components/FeaturesSection/FeatureSectionThree";
import FeatureSectionTwo from "../components/FeaturesSection/FeatureSectionTwo";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Features = () => {
  return (
    <Container>
      <FeatureSectionOne />
      <FeatureSectionTwo />
      <FeatureSectionThree />
    </Container>
  );
};

export default Features;
