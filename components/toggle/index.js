import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.togglebackground};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.6rem;
  :focus {
    outline: none;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return <ToggleButton onClick={toggleTheme}>Switch Theme</ToggleButton>;
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
