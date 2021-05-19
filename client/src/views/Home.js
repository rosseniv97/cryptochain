import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import { Link } from "react-router-dom";
import CarItem from "../components/CarItem";
import "../../style/index.css";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

const HomeView = (props) => {
  return (
    <Layout className="layout">
      <Header></Header>
      <Content style={{ padding: "10px 50px" }}>
        <Row>
          <Col>
            <Link to="/viewcar">
              <CarItem
                status="available"
                fuelLevel={100}
                customStyle={{
                  hoverable: true,
                  style: { width: 240, margin: "10px" },
                }}
                image={{
                  src: "chevy.jpg",
                  name: "Chevrolet Volt",
                  number: "CA1444HT",
                }}
              />
            </Link>
          </Col>
          <Col>
            <CarItem
              status="available"
              fuelLevel={10}
              customStyle={{
                hoverable: true,
                style: { width: 240, margin: "10px" },
              }}
              image={{
                src: "chevy.jpg",
                name: "Chevrolet Volt",
                number: "CA1444HT",
              }}
            />
          </Col>
          <Col>
            <CarItem
              status="available"
              fuelLevel={10}
              customStyle={{
                hoverable: true,
                style: { width: 240, margin: "10px" },
              }}
              image={{
                src: "chevy.jpg",
                name: "Chevrolet Volt",
                number: "CA1444HT",
              }}
            />
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
};

export default HomeView;
