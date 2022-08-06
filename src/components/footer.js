import React, { useState } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: relative;
  text-align: center;
  padding: 30px 0 43px;
  font-family: "GT Haptik Regular";
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #6e6e6e;
  border-top: 1px solid rgba(71, 71, 71, 0.1);
  & ul {
    padding: 0;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
  }
  & li {
    list-style: none;
    height: 49px;
    width: 49px;
    margin: 0 0 0 30px;
    background: #1c2520;
    border-radius: 50%;
  }
  & li:hover {
    background: #fff;
  }
  & a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & img {
    height: 24px;
  }
`;

const Footer = () => {
  const [links, setLinks] = useState({
    tw: require("../images/tw.svg").default,
    tel: require("../images/tel.svg").default,
    ds: require("../images/ds.svg").default,
  });

  return (
    <StyledFooter>
      <ul>
        <li>
          <a
            href="https://twitter.com/ratels_wallet?s=21"
            onMouseOver={() => {
              setLinks({
                ...links,
                tw: require("../images/tw2.svg").default,
              });
            }}
            onMouseOut={() => {
              setLinks({
                ...links,
                tw: require("../images/tw.svg").default,
              });
            }}
          >
            <img src={links.tw} />
          </a>
        </li>
        <li>
          <a
            href="https://h5aet-waaaa-aaaab-qaamq-cai.raw.ic0.app/u/Ratels_wallet"
            onMouseOver={() => {
              setLinks({
                ...links,
                ds: require("../images/ds2.svg").default,
              });
            }}
            onMouseOut={() => {
              setLinks({
                ...links,
                ds: require("../images/ds.svg").default,
              });
            }}
          >
            <img src={links.ds} />
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
};
export default Footer;
