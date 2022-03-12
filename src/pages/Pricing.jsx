import React from "react";
import styled from "styled-components";
import FeatureSectionThree from "../components/FeaturesSection/FeatureSectionThree";
import PricingSectionOne from "../components/PricingSections/PricingSectionOne";
import PricingSectionThree from "../components/PricingSections/PricingSectionThree";
import PricingSectionTwo from "../components/PricingSections/PricingSectionTwo";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Pricing = () => {
  return (
    <Container>
      <PricingSectionOne />
      <PricingSectionTwo />
      <PricingSectionThree />
      <FeatureSectionThree />
    </Container>
  );
};

export default Pricing;
