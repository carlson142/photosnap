import React from "react";
import styled from "styled-components";

const Container = styled.section``;

const Main = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Main;
