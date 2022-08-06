import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import Button from "./Button";

export function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
}

const StyledMenu = styled.button`
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
  background: ${({ style1 }) => (style1 ? "#162824" : "linear-gradient(45deg, #00c34d, #00a854)")};
  border-radius: 22px;
`;

const StyledMenuTitle = styled.span`
  text-decoration: none;
  margin: 0px;
  border-radius: 0.5rem;
  font-weight: 400;
  width: fit-content;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  user-select: none;
`;

const StyledMenuItem = styled.a`
  text-decoration: none;
  margin: 0px;
  border-radius: 0.5rem;
  width: fit-content;
  color: #fff;
`;

const StyledExternalLink = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: block;
  margin: 0.25rem 0;
  width: 100%;
  cursor: pointer;
`;

const StyledMenuItemLink = styled.a`
  color: #fff;
`;

const StyledMenuItemLinkStyle1 = styled.span`
  color: #fff;
`;

export default function Menu(props) {
  const { style1, email, name, href } = props;

  const handleClick = () => {
    if (props.onClick) props.onClick();
  };

  return (
    <StyledMenu style1={style1} onClick={handleClick}>
      <StyledMenuTitle>
        {email ? (
          <StyledMenuItem target="_blank" href="mailto:ratelsapp@protonmail.com">
            {name}
          </StyledMenuItem>
        ) : style1 ? (
          <StyledMenuItemLinkStyle1>{name}</StyledMenuItemLinkStyle1>
        ) : (
          <StyledMenuItemLink href={href} target={"_blank"} style={{ marginRight: "0.25rem" }}>
            {name}
          </StyledMenuItemLink>
        )}
      </StyledMenuTitle>
    </StyledMenu>
  );
}
