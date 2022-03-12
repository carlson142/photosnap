import React, { useState } from "react";
import styled from "styled-components";
import PSTCardComponent from "./PSTCardComponent";

const Container = styled.div`
  width: 100vw;
  padding: 5rem 10rem;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 1440px) {
    padding: 5rem;
  }

  @media (max-width: 768px) {
    padding: 5rem 1rem;
  }

  @media (max-width: 455px) {
    padding: 5rem 0;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sub = styled.span`
  font-size: 1.5rem;
`;

const ToggleCont = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  height: 3rem;
  width: 6rem;
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  height: 0;
  width: 0;
`;

const Span = styled.span`
  position: absolute;
  cursor: pointer;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: var(--color-light-gray);
  border-radius: 2rem;

  ::after {
    content: "";
    display: block;

    position: absolute;
    left: ${(props) => (props.toggle === false ? "0.5rem" : "3.3rem")};
    top: 50%;
    transform: translate(0, -50%);

    height: 2.2rem;
    width: 2.2rem;
    background-color: black;
    border-radius: 50%;

    transition: all 0.2s ease-in;
  }
`;

const Bot = styled.div`
  padding: 10rem 5rem;

  @media (max-width: 1024px) {
    padding: 5rem;
  }
`;

const PricingSectionTwo = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      <Top>
        <Sub>Monthly</Sub>

        <ToggleCont>
          <Label>
            <Input />
            <Span
              toggle={toggle}
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          </Label>
        </ToggleCont>

        <Sub>Annually</Sub>
      </Top>

      <Bot>
        <PSTCardComponent toggle={toggle} />
      </Bot>
    </Container>
  );
};

export default PricingSectionTwo;
