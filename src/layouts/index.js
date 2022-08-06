import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import Footer from "../components/footer";

import { StyledThemeProvider } from "../styles/themeManager";

import "../styles/layout.css";
import "../styles/prism-github.css";
import "../styles/fonts.css";

const StyledMain = styled.main``;

const Layout = ({ path, children, nofooter, isDocs }) => {
  const data = {
    site: {
      siteMetadata: {
        title: "",
      },
    },
  };

  return (
    <StyledThemeProvider>
      <Header path={path} siteTitle={data.site.siteMetadata.title} />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledThemeProvider>
  );
};

export default Layout;
