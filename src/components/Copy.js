import copyToClipboard from "copy-to-clipboard";
import React, { forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";

const Box = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const Copy = forwardRef(({ content, children, hide, onCopiedSuccess }, ref) => {
  const copy = () => {
    copyToClipboard(content);
    if (onCopiedSuccess) onCopiedSuccess();
  };

  useImperativeHandle(
    ref,
    () => ({
      copy: copy,
    }),
    [copy]
  );

  return !Boolean(hide) ? <Box onClick={copy}>{children}</Box> : null;
});

export default Copy;
