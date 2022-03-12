import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

import data from "../../stories.json";

import { IoArrowForward } from "react-icons/io5";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
  }

  @media (max-width: 455px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
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

const HomeSectionFour = () => {
  const newData = data.filter((el) => el.id > 1 && el.id < 6);

  const navigate = useNavigate();

  return (
    <Container>
      {newData.map((el) => {
        return (
          <Card
            key={el.id}
            transition={{ type: "tween" }}
            whileHover={{ y: -20 }}
          >
            <Image
              src={require(`../../img/stories/desktop/${el.illustration}`)}
            />

            <Info>
              <Title>{el.title}</Title>
              <Author>by {el.author}</Author>

              <Button onClick={() => navigate("/stories")}>
                read story
                <IoArrowForward size={20} />
              </Button>
            </Info>
          </Card>
        );
      })}
    </Container>
  );
};

export default HomeSectionFour;
