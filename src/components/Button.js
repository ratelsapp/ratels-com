import React from "react";
import styled from "styled-components";
import { openInNewWindow } from "../utils";

const StyledButton = styled.button`
  color: #fff;
  padding: 0.5rem 0rem;
  margin: 0;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
  list-style: none;
  padding: 0 25px;
  height: 44px;
  background: ${({ style1, primary }) =>
    style1 ? "#162824" : primary ? "linear-gradient(45deg, #00c34d, #00a854)" : "#1F1F1F"};
  border-radius: 22px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`;

export default function Button({ children, ...props }) {
  const { style1, link, primary } = props;

  const handleClick = () => {
    if (props.onClick) props.onClick();
    if (link) openInNewWindow(link, "button-open-in-new-window");
  };

  return (
    <StyledButton style1={style1} primary={primary} onClick={handleClick}>
      {children}
    </StyledButton>
  );
}
