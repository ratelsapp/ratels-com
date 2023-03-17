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
  text-align: left;
  list-style: none;
  padding: 0 25px;
  height: 44px;
  background: ${({ style1, primary, border }) =>
    style1 ? "#162824" : primary ? "linear-gradient(45deg, #00c34d, #00a854)" : border ? "none" : "#1F1F1F"};
  border: ${({ border }) => (border ? "1px solid #00c34d" : "none")};
  border-radius: 22px;
  font-size: 16px;
  color: ${({ border }) => (border ? "#00c34d" : "#fff")};
  cursor: pointer;
`;

export default function Button({ children, ...props }) {
  const { style1, link, primary, border } = props;

  const handleClick = () => {
    if (props.onClick) props.onClick();
    if (link) openInNewWindow(link, "button-open-in-new-window");
  };

  return (
    <StyledButton style1={style1} primary={primary} border={border} onClick={handleClick}>
      {children}
    </StyledButton>
  );
}
