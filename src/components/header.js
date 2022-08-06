import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import styled from "styled-components";
import Menu from "./menu";
import Donate from "./Donate";
import Button from "./Button";
import useDocumentScrollThrottled from "../utils/useDocumentScrollThrottled";
import { openInNewWindow } from "../utils/index";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 39px 0 0;
  width: 1200px;
  margin: 0 auto;
  @media (max-width: 960px) {
    padding: 1.5rem 2rem;
    width: 100%;
    height: ${({ open }) => (open ? "100vh" : "100%")};
  }
`;

const StyledNav = styled.nav`
  box-sizing: border-box;
  // display: flex;
  align-items: center;
  justify-content: center;
  transition: right 0.25s ease;
  display: flex;
  @media (max-width: 960px) {
    position: fixed;
    top: 0px;
    display: block;
    right: ${({ open }) => (open ? "0px" : "-100%")};
    align-items: flex-start;
    flex-wrap: wrap;
    -webkit-overflow-scrolling: touch;
    background-color: #00000c;
    width: 100%;
    height: 100%;
    z-index: 999;
    padding: 0 0.93rem;
    overflow: scroll;
    box-shadow: ${({ theme }) => theme.shadows.huge};
  }

  > * + * {
    margin-left: 24px;
  }

  @media (max-width: 960px) {
    > * + * {
      margin-left: 0;
      margin-bottom: 24px;
    }
  }
`;

const StyledNavTitleWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledHomeLink = styled.a`
  max-height: 41px;
  display: flex;
  align-items: center;
  color: #fff;
`;

const StyledNavLink = styled.a`
  margin: 0.93rem 0 6rem 0;
  display: flex;
  align-items: center;
  @media (min-width: 960px) {
    display: none;
  }
`;

const MenuToggle = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey9};
  display: none;
  z-index: 9999;
  width: 24px;
  height: 24px;
  padding: 0px;

  :focus {
    outline: none;
  }
  @media (max-width: 960px) {
    display: initial;
    position: ${({ open }) => (open ? "fixed" : "relative")};
    right: ${({ open }) => (open ? "1.5rem" : "initial")};
    top: ${({ open }) => (open ? "1.4rem" : "initial")};
  }
`;

const StyledLogo = styled.img`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  margin: 0;
  width: 159px;
  height: 47px;
  transform: rotate(0deg);
  transition: transform 0.2s linear;
  overflow: hidden;
`;

const StyledCloseIcon = styled.img`
  path {
    stroke: ${({ theme }) => theme.textColor};
  }
`;

const Header = (props) => {
  const matches = useMediaQuery("only screen and (max-width: 1024px)");
  const node = useRef();
  const button = useRef();
  const [isMenuOpen, updateIsMenuOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  const [headerBG, setHeaderBG] = useState(false);

  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    setHeaderBG(currentScrollTop > 2);
  });

  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isMenuOpen) {
      node.current.addEventListener("wheel", function (e) {
        e.preventDefault();
      });
    } else {
      node.current.addEventListener("wheel", function (e) {});
    }

    return () => {
      document.body.style.overflow = originalStyle;
      node.current.addEventListener("wheel", function (e) {});
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (node.current.contains(e.target) || button.current.contains(e.target)) {
        return;
      }
      updateIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, updateIsMenuOpen, matches]);

  const handleTaggerMenu = (e) => {
    e.stopPropagation();
    e.preventDefault();
    updateIsMenuOpen(!isMenuOpen);
  };

  const handleDonateClick = () => {
    setDonateOpen(true);
  };

  const handleToDAPP = () => {
    openInNewWindow(`https://wmdg5-jaaaa-aaaal-aav4q-cai.ic0.app/`, "ratel_dapp");
  };

  const menus = [
    {
      name: "DAPP",
      id: "DAPP",
      onClick: handleToDAPP,
      primary: true,
    },
    {
      name: "Donate",
      id: "Donate",
      onClick: handleDonateClick,
    },
    {
      name: "Contact us",
      id: "Contact",
      email: true,
      link: "mailto:ratelsapp@protonmail.com",
    },
  ];

  return (
    <>
      <StyledHeader open={isMenuOpen} showBG={headerBG}>
        <StyledNavTitleWrapper>
          <StyledHomeLink
            to="/"
            style={{
              textDecoration: `none`,
            }}
            alt="ratel"
            title="ratel"
          >
            <StyledLogo src={require("../images/logo.svg").default} />
          </StyledHomeLink>
        </StyledNavTitleWrapper>
        <MenuToggle ref={button} open={isMenuOpen} onClick={handleTaggerMenu}>
          {isMenuOpen ? (
            <StyledCloseIcon src={require("../images/x.inline.png").default} />
          ) : (
            <StyledCloseIcon src={require("../images/menu.inline.png").default} />
          )}
        </MenuToggle>
        <StyledNav ref={node} open={isMenuOpen}>
          <StyledNavLink
            to="/"
            style={{
              textDecoration: `none`,
            }}
            alt="ratel"
            title="ratel"
          >
            <StyledLogo src={require("../images/logo.png").default} />
          </StyledNavLink>
          {menus.map((menu) => {
            return (
              <Button key={menu.name} link={menu.link} primary={menu.primary} onClick={menu.onClick}>
                {menu.name}
              </Button>
            );
          })}
        </StyledNav>
      </StyledHeader>
      <Donate open={donateOpen} onClose={() => setDonateOpen(false)} />
    </>
  );
};

export default Header;
