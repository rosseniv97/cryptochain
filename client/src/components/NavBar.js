import React from "react";
import Link from "next/link";
import { Menu } from "antd";

const NavBar = (props) => {
  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="1">
        <Link href="/home">Cars</Link>
      </Menu.Item>

      <Menu.Item key="2">
        <Link href="/user-cars">My Taken Cars</Link>
      </Menu.Item>

      <Menu.Item key="3">
        <Link href="/home">nav 3</Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
