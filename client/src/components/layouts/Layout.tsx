import React from "react";
import Menu from "components/layouts/Header";
import Footer from "components/layouts/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Menu></Menu>
      <main role="main">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
