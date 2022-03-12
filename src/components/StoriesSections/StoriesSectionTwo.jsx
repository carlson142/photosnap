import React from "react";
import styled from "styled-components";

import data from "../../stories.json";
import SSTCard from "./SSTCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, auto);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 455px) {
    grid-template-columns: 1fr;
  }
`;

const StoriesSectionTwo = () => {
  const newData = data.filter((el) => el.id > 1);

  return (
    <Container>
      {newData.map((el) => {
        return <SSTCard key={el.id} {...el} />;
      })}
    </Container>
  );
};

export default StoriesSectionTwo;
