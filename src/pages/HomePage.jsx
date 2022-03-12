import React from "react";
import styled from "styled-components";
import HomeSectionFive from "../components/HomeSections/HomeSectionFive";
import HomeSectionFour from "../components/HomeSections/HomeSectionFour";
import HomeSectionOne from "../components/HomeSections/HomeSectionOne";
import HomeSectionThree from "../components/HomeSections/HomeSectionThree";
import HomeSectionTwo from "../components/HomeSections/HomeSectionTwo";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const HomePage = () => {
  return (
    <Container>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
    </Container>
  );
};

export default HomePage;
