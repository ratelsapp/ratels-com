import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { X } from "react-feather";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: ${({ open }) => (open ? "block" : "none")};
`;

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.8;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background: #000000;
  border-radius: 10px;
  padding: 40px 20px;
  border: 1px solid #00140b;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
`;

export default function Modal({ open, children, onClose, maskClickable }) {
  const wrapper = useRef();

  useEffect(() => {
    if (open) {
      wrapper.current.addEventListener("wheel", function (e) {
        e.preventDefault();
      });
    } else {
      wrapper.current.addEventListener("wheel", function (e) {});
    }

    return () => {
      wrapper.current.addEventListener("wheel", function (e) {});
    };
  }, [open]);

  return (
    <Wrapper open={open} ref={wrapper}>
      <Mask
        onClick={() => {
          if (maskClickable) onClose();
        }}
      />
      <Content>
        <CloseIcon onClick={onClose}>
          <X />
        </CloseIcon>
        {children}
      </Content>
    </Wrapper>
  );
}
