import React from "react";
import { Layout } from "antd";
import NavBar from "./NavBar";

import "../../style/index.css";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

const PageLayout = (props) => {
  return (
    <Layout className="layout">
      <Header>
        <NavBar />
      </Header>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px 50px",
        }}
      >
        {props.children}
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
};

export default PageLayout;
