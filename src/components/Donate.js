import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { Copy as CopySvg, Check as CheckSvg } from "react-feather";
import Button from "./Button";
import { DONATE_ADDRESS, DONATE_LINK } from "../constants";
import Copy from "./Copy";

const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  color: #00a854;
`;

const Typography = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #a2a2a2;
  margin: ${({ sx }) => (sx?.margin ? sx?.margin : "")};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #001404;
`;

const Address = styled.div`
  width: 100%;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #a2a2a2;
  line-height: 24px;
  color: #00a854;
`;

const CopyIcon = styled.span`
  position: relative;
  top: 2px;
  margin-left: 4px;
  cursor: pointer;
`;

export default function Donate({ onClose, open }) {
  const [copied, setCopied] = useState(false);

  const handleCopySuccess = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <Modal onClose={onClose} open={open}>
      <Title>Donate</Title>
      <Typography
        sx={{
          margin: "28px 0 0 0 ",
        }}
      >
        Ratels is the first crypto wallet that integrates all addresses, tokens, and NFT standards on the IC.
      </Typography>
      <Typography>It will help the development of the IC make significant progress.</Typography>
      <Typography
        sx={{
          margin: "36px 0 17px 0",
        }}
      >
        The top 1000 who donate no less than 1 ICP using Ratels wallet will get a precious and unique NFT.
      </Typography>
      <Divider />
      <Address>
        {DONATE_ADDRESS}
        {copied ? (
          <CopyIcon>
            <CheckSvg color="#fff" size="14px" />
          </CopyIcon>
        ) : (
          <Copy content={DONATE_ADDRESS} onCopiedSuccess={handleCopySuccess}>
            <CopyIcon>
              <CopySvg color="#fff" size="14px" />
            </CopyIcon>
          </Copy>
        )}
      </Address>
      <div
        style={{
          marginTop: "38px",
        }}
      >
        <Button link={DONATE_LINK}>How to donate?</Button>
      </div>
    </Modal>
  );
}
