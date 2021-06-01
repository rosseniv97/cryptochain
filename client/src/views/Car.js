import React, { Component } from "react";
import { Layout, Row, Col, Form, Input, InputNumber, Button } from "antd";
import { Link } from "react-router-dom";
import CarItem from "../components/CarItem";
import "../../style/index.css";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const CarView = (props) => {
  return (
    <Layout className="layout">
      <Header></Header>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px 50px",
        }}
      >
        <CarItem
          status="available"
          fuelLevel={10}
          customStyle={{
            hoverable: false,
            style: { width: 540, margin: "10px" },
          }}
          image={{
            src: "images/chevy.jpg",
            name: "Chevrolet Volt",
            number: "CA1444HT",
          }}
        />

        <Form
          {...layout}
          name="nest-messages"
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "age"]}
            label="Age"
            rules={[{ type: "number", min: 0, max: 99 }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={["user", "website"]} label="Website">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
};

export default CarView;
