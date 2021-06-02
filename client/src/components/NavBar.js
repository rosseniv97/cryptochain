import React from "react";
import { Menu } from "antd";
import { withRouter } from "react-router";

import "../../style/index.css";
import "antd/dist/antd.css";

const NavBar = (props) => {
  const handleTakenCarsView = (e) => {
    if (e.key == 2)
      props.history.push({
        pathname: "/view-taken-cars",
        search: `?userid=${1}`,
      });
    if (e.key == 1)
      props.history.push({
        pathname: "/",
      });
  };
  return (
    <Menu onClick={handleTakenCarsView} theme="dark" mode="horizontal" >
      <Menu.Item key="1">Cars</Menu.Item>
      <Menu.Item key="2">My Taken Cars</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
  );
};

export default withRouter(NavBar);
