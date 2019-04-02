import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import GlobalStyle from "../style/global";

const Layout = ({ children }) => (
  <>
    <Head siteTitle="Brain Arts Org" />
    <GlobalStyle />
    <Nav />
    <div>{children}</div>
    <Footer />
  </>
);

export default Layout;
