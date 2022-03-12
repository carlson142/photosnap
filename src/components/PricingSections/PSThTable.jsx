import React from "react";
import styled from "styled-components";

import check from "../../img/pricing/desktop/check.svg";

const Container = styled.div`
  display: grid;
  grid-template-columns: 40vw 15vw 15vw 15vw;
  grid-template-rows: repeat(9, 10rem);
`;

const Text = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

const MiniCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.fc ? "flex-start" : "center")};

  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};

  border-bottom: ${(props) =>
    props.bb ? "1px solid black" : "1px solid var(--color-light-gray)"};
`;

const Icon = styled.img``;

const PSThTable = () => {
  return (
    <Container>
      {/* TOP ROW */}
      <MiniCont bb fc>
        <Text>THE FEATURES</Text>
      </MiniCont>

      <MiniCont bb>
        <Text>BASIC</Text>
      </MiniCont>

      <MiniCont bb>
        <Text>PRO</Text>
      </MiniCont>

      <MiniCont bb>
        <Text>BUSINESS</Text>
      </MiniCont>

      {/* 2-d row */}
      <MiniCont column="1/2" row="2/3" fc>
        <Text>UNLIMITED STORY POSTING</Text>
      </MiniCont>

      <MiniCont column="2/3" row="2/3">
        <Icon src={check} />
      </MiniCont>

      <MiniCont column="3/4" row="2/3">
        <Icon src={check} />
      </MiniCont>

      <MiniCont column="4/5" row="2/3">
        <Icon src={check} />
      </MiniCont>

      {/* 3-d row */}
      <MiniCont column="1/2" row="3/4" fc>
        <Text>UNLIMITED PHOTO UPLOAD</Text>
      </MiniCont>

      <MiniCont column="2/3" row="3/4">
        <Icon src={check} />
      </MiniCont>

      <MiniCont column="3/4" row="3/4">
        <Icon src={check} />
      </MiniCont>

      <MiniCont column="4/5" row="3/4">
        <Icon src={check} />
      </MiniCont>

      {/* 4-d row */}
      <MiniCont column="1/2" row="4/5" fc>
        <Text>EMBEDDING CUSTOM CONTENT</Text>
      </MiniCont>

      <MiniCont column="2/3" row="4/5"></MiniCont>

      <MiniCont column="3/4" row="4/5">
        <Icon src={check} />
      </MiniCont>

      <MiniCont column="4/5" row="4/5">
        <Icon src={check} />
      </MiniCont>

      {/* 5-d row */}
      <MiniCont column="1/2" row="5/6" fc>
        <Text>CUSTOMIZE METADATA</Text>
      </MiniCont>

      <MiniCont column="2/3" row="5/6"></MiniCont>

      <MiniCont column="3/4" row="5/6">
        <Icon src={check} />
      </MiniCont>

      <MiniCont column="4/5" row="5/6">
        <Icon src={check} />
      </MiniCont>

      {/* 6-d row */}
      <MiniCont column="1/2" row="6/7" fc>
        <Text>ADVANCED METRICS</Text>
      </MiniCont>

      <MiniCont column="2/3" row="6/7"></MiniCont>

      <MiniCont column="3/4" row="6/7"></MiniCont>

      <MiniCont column="4/5" row="6/7">
        <Icon src={check} />
      </MiniCont>

      {/* 7-d row */}
      <MiniCont column="1/2" row="7/8" fc>
        <Text>PHOTO DOWNLOADS</Text>
      </MiniCont>

      <MiniCont column="2/3" row="7/8"></MiniCont>

      <MiniCont column="3/4" row="7/8"></MiniCont>

      <MiniCont column="4/5" row="7/8">
        <Icon src={check} />
      </MiniCont>

      {/* 8-d row */}
      <MiniCont column="1/2" row="8/9" fc>
        <Text>SEARCH ENGINE INDEXING</Text>
      </MiniCont>

      <MiniCont column="2/3" row="8/9"></MiniCont>

      <MiniCont column="3/4" row="8/9"></MiniCont>

      <MiniCont column="4/5" row="8/9">
        <Icon src={check} />
      </MiniCont>

      {/* 9-d row */}
      <MiniCont column="1/2" row="9/10" fc>
        <Text>CUSTOM ANALYTICS</Text>
      </MiniCont>

      <MiniCont column="2/3" row="9/10"></MiniCont>

      <MiniCont column="3/4" row="9/10"></MiniCont>

      <MiniCont column="4/5" row="9/10">
        <Icon src={check} />
      </MiniCont>
    </Container>
  );
};

export default PSThTable;
