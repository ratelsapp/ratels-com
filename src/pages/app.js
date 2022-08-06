import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Layout from "../layouts";

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 1200px;
  will-change: transform;
  margin: 177px 0 340px;
  position: relative;
`;

const StyledBodyTitleSub = styled.h2`
  font-size: 36px;
  line-height: 60px;
  margin: 0 0 65px;
  pointer-events: none;
  white-space: initial;
  overflow-wrap: normal;
  width: 644px;
  font-family: "GT Haptik Regular";
  text-align: left;
`;

const StyledBodySubText = styled.h3`
  width: 780px;
  line-height: 38px;
  font-size: 24px;
  margin: 0;
  color: #a2a2a2;
  text-align: left;
  font-family: Montserrat;
`;

const StyledItemRow = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 65px 0 0 0;
  width: 778px;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-start;
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 20px;
    }
  }
  & a::selection {
    background: transparent;
  }
  & span::selection {
    background: transparent;
  }
`;

const StyledSectionTitle = styled.h1`
  font-size: 42px;
  white-space: wrap;
  overflow-wrap: normal;
  width: 900px;
  text-align: center;
  font-family: "GT Haptik Regular";
  margin: 112px auto 0;
  // @media (max-width: 960px) {
  //   width: 100%;
  //   font-size: 2rem;
  //   line-height: 2.5rem;
  //   margin-top: 4rem;
  // }
  // @media (max-width: 640px) {
  //   width: 100%;
  //   margin-top: 3.75rem;
  //   text-align: center;
  //   font-size: 1.375rem;
  //   line-height: 1;
  // }
`;

const StyledWalletBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: flex-end;
  margin: 107px auto 77px;
  width: 1200px;
`;

const circleKeyframes = keyframes`
  0% { transform: rotateZ(0deg) }
  100% { transform: rotateZ(360deg) }
`;

const circleAni = (className, deg, radius) => {
  var circleContainer = document.getElementsByClassName(className)[0];
  var id = setInterval(frame, 1);
  function frame() {
    deg = deg + Math.PI * (9 / 20000);
    const x = Math.cos(deg) * radius;
    const y = Math.sin(deg) * radius;
    circleContainer.style.left = x + "px";
    circleContainer.style.top = y + "px";
  }
  return null;
};

const StyledWalletCircle = styled.div`
  width: 370px;
  height: 370px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  & div.circle {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #020d07;
    border: 1px dashed #464c48;
    border-radius: 50%;
    animation: ${circleKeyframes} 30s infinite linear;
  }
  & img.center {
    width: 180px;
    height: 180px;
    position: relative;
    margin: 0;
  }
  & img.aside1 {
    width: 136px;
    height: 136px;
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    transform: translate(117px, 117px);
  }
  & img.aside2 {
    width: 136px;
    height: 136px;
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    transform: translate(117px, 117px);
  }
  & img.aside3 {
    width: 136px;
    height: 136px;
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    transform: translate(117px, 117px);
  }
  & img.aside4 {
    width: 136px;
    height: 136px;
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    transform: translate(117px, 117px);
  }
`;

const StyledWalletDecr = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  & h3 {
    font-size: 32px;
    font-family: Montserrat;
    font-weight: 500;
    color: #ffffff;
    margin: 0;
  }
  & p {
    font-size: 24px;
    font-family: Montserrat;
    font-weight: 400;
    color: #a2a2a2;
    line-height: 38px;
    margin: 38px 0 0 0;
  }
`;

const Wallet = () => {
  useEffect(() => {
    circleAni("aside1", 0, 180);
    circleAni("aside2", 80, 220);
    circleAni("aside3", 160, 180);
    circleAni("aside4", 240, 190);
  }, []);

  return (
    <>
      <StyledSectionTitle>The most feature-rich crypto wallet</StyledSectionTitle>
      <StyledWalletBox>
        <StyledWalletCircle>
          <div className="circle"></div>
          <img className="center" src={require("../images/wallet-center.png").default} />
          <img className="aside1" src={require("../images/wallet-aside1.png").default} />
          <img className="aside2" src={require("../images/wallet-aside2.png").default} />
          <img className="aside3" src={require("../images/wallet-aside3.png").default} />
          <img className="aside4" src={require("../images/wallet-aside4.png").default} />
        </StyledWalletCircle>
        <StyledWalletDecr>
          <h3>Ratels Wallet</h3>
          <p>
            As a browser extension, Ratels Wallet provides you with a key vault, secure login, token storage, NFT
            collection and token exchange, etc. everything you need to manage digital assets on the Internet Computer.
          </p>
        </StyledWalletDecr>
      </StyledWalletBox>
    </>
  );
};

const FeatureList = styled.ul`
  display: flex;
  width: 1200px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5px 0 100px;
  padding: 0;
  & li {
    position: relative;
    width: 366px;
    height: 382px;
    border-radius: 10px;
    margin: 50px 50px 0 0;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  & li:nth-child(3n) {
    margin-right: 0;
  }
  & div {
    position: relative;
  }
  & i {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #111a16, #232c2a);
    box-shadow: 0px 6px 19px 2px rgba(4, 15, 10, 0.21);
    opacity: 0.3;
  }
  & b {
    margin-top: 71px;
    font-size: 32px;
    font-family: Montserrat;
    font-weight: 400;
    color: #ffffff;
    line-height: 59px;
    position: relative;
  }
`;

const Feature = () => {
  return (
    <>
      <StyledSectionTitle>Here are all the features you need</StyledSectionTitle>
      <FeatureList>
        <li>
          <i></i>
          <div>
            <img src={require("../images/fea1.png").default} />
          </div>
          <b>Token Swaps</b>
        </li>
        <li>
          <i></i>
          <div>
            <img src={require("../images/fea2.png").default} />
          </div>
          <b>NFTs & Collection</b>
        </li>
        <li>
          <i></i>
          <div>
            <img src={require("../images/fea3.png").default} />
          </div>
          <b>Explore New Project</b>
        </li>
        <li>
          <i></i>
          <div>
            <img src={require("../images/fea4.png").default} />
          </div>
          <b>Send & Receive</b>
        </li>
        <li>
          <i></i>
          <div>
            <img src={require("../images/fea5.png").default} />
          </div>
          <b>Assets Management</b>
        </li>
        <li>
          <i></i>
          <div>
            <img src={require("../images/fea6.png").default} />
          </div>
          <b>ICP Real-time Info</b>
        </li>
      </FeatureList>
    </>
  );
};

const StyledButton = styled.a`
  font-size: 20px;
  height: 44px;
  width: 182px;
  color: ${(props) => (props.primary ? "#fff" : "#D5D5D5")};
  border-radius: 22px;
  line-height: 44px;
  background: ${(props) => (props.primary ? "linear-gradient(45deg, #00C34D, #00A854)" : "#212121")};
  cursor: pointer;
  position: relative;
  text-align: left;
  text-indent: 60px;
  :hover {
    background: ${(props) => (props.primary ? "linear-gradient(45deg, #00A854, #00A530)" : "#212121")};
  }
  &:before {
    content: "";
    position: absolute;
    width: 19px;
    height: 19px;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
    background: url(${(props) =>
        props.primary ? require("../images/button-icon1.png").default : require("../images/button-icon2.png").default})
      no-repeat center;
  }
  & span {
    width: 182px;
    height: 56px;
    position: absolute;
    top: -60px;
    left: 0;
    background: url(${require("../images/pop.png").default});
    text-align: center;
    text-indent: initial;
  }
`;

const upDownKeyframs = keyframes`
  0% { transform: translateY(-30px) }
  100% { transform: translateY(30px) }
`;

const StyledDecr = styled.div`
  width: 332px;
  height: 692px;
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  & img {
    margin: 0;
    position: absolute;
  }
  & img:nth-child(1) {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  & img:nth-child(2) {
    left: -106px;
    top: 52px;
    z-index: 1;
    animation: ${upDownKeyframs} 7.1s infinite ease-in-out alternate;
  }
  & img:nth-child(3) {
    right: -89px;
    top: 141px;
    z-index: 2;
    animation: ${upDownKeyframs} 6.5s infinite ease-in-out alternate;
  }
  & img:nth-child(4) {
    left: -117px;
    bottom: -42px;
    z-index: 4;
    animation: ${upDownKeyframs} 8s infinite ease-in-out alternate;
  }
`;

const Index = (props) => {
  const data = {
    tw: require("../images/tw.svg").default,
    tel: require("../images/tel.svg").default,
    ds: require("../images/ds.svg").default,
  };

  const [popOpen, setPopOpen] = useState(false);

  useEffect(() => {
    document.addEventListener(
      "click",
      () => {
        setPopOpen(false);
      },
      false
    );
  }, []);

  return (
    <Layout>
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitleSub>The most personalized crypto wallet on the Internet Computer</StyledBodyTitleSub>
          <StyledBodySubText>
            Ratels are fearless animals. Following this brave spirit, Ratels Wallet is committed to becoming the most
            daring breakthrough and most innovative crypto wallet on the Internet Computer, creating a new gateway that
            makes your wallet management, asset management, exchange, safer and more convenient.
          </StyledBodySubText>
          <StyledItemRow>
            <StyledButton primary href="https://twitter.com/ratels_wallet?s=21" target="_blank">
              Twitter
            </StyledButton>
            <StyledButton target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/ratels-wallet/">
              Download
            </StyledButton>
          </StyledItemRow>
          <StyledDecr>
            <img src={require("../images/interface.png").default} />
            <img src={require("../images/decorate1.png").default} />
            <img src={require("../images/decorate2.png").default} />
            <img src={require("../images/decorate3.png").default} />
          </StyledDecr>
        </StyledTitle>
        <Wallet data={data} props={props} />
        <Feature data={data} props={props} />
      </StyledBody>
    </Layout>
  );
};

export default Index;
