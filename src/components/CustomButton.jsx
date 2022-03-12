import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  background-color: transparent;
  border: none;
  border-bottom: 1px solid transparent;

  color: ${(props) => props.color};

  cursor: pointer;
  transition: var(--tr);

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-right: 2rem;

  :hover {
    border-bottom: 1px solid ${(props) => props.color};
    margin-right: 4rem;
  }
`;

const CustomButton = ({ children, ...otherProps }) => {
  return <Button {...otherProps}>{children}</Button>;
};

export default CustomButton;
