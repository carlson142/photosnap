import { motion } from "framer-motion";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";

const Block = styled(motion.div)`
  height: 50vh;
  width: 100vw;

  margin: 0 auto;

  background-color: white;
`;

const BlockVariants = {
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 500,
    transition: {
      duration: 0.3,
    },
  },
};

const Test = ({ toggleMenu, setBlock }) => {
  return (
    <Block
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={BlockVariants}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <IoCloseOutline
        size={25}
        onClick={() => {
          toggleMenu();
          setBlock((prev) => !prev);
        }}
      />
    </Block>
  );
};

export default Test;
