import React from "react";
import { IoArrowForward } from "react-icons/io5";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: relative;

  ::after {
    content: "";
    display: block;

    position: absolute;
    bottom: 0;

    height: 5px;
    width: 100%;
    background: linear-gradient(
      to right,
      var(--color-orange),
      var(--color-purple),
      var(--color-blue)
    );

    opacity: 0;
    transition: var(--tr);
  }

  :hover::after {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.7);
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;

  color: white;

  width: 100%;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;

  margin-bottom: 0.5rem;
  margin-left: 2rem;
`;

const Author = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;

  margin-bottom: 2rem;
  margin-left: 2rem;
`;

const Button = styled.button`
  width: 100%;

  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;

  padding: 2rem;
  text-transform: uppercase;

  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ::after {
    content: "";
    display: block;

    position: absolute;
    top: 0;

    height: 1px;
    width: 90%;
    background-color: white;
  }
`;

const SSTCard = ({ author, date, illustration, title }) => {
  return (
    <Container whileHover={{ y: -15 }} transition={{ type: "tween" }}>
      <Image src={require(`../../img/stories/desktop/${illustration}`)} />

      <Info>
        <Title>{title}</Title>
        <Author>by {author}</Author>

        <Button>
          read story
          <IoArrowForward size={20} />
        </Button>
      </Info>
    </Container>
  );
};

export default SSTCard;
