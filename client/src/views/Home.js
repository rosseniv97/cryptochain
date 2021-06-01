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
            <Link
              to={{
                pathname: "/viewcar",
                state: {
                  status: "available",
                  fuelLevel: 100,
                  src: "images/chevy.jpg",
                  name: "Chevrolet Volt",
                  number: "CA1444HT",
                },
              }}
            >
              <CarItem
                status="available"
                fuelLevel={100}
                customStyle={{
                  hoverable: true,
                  style: { width: 240, margin: "10px" },
                }}
                image={{
                  src: "images/chevy.jpg",
                  name: "Chevrolet Volt",
                  number: "CA1444HT",
                }}
              />
            </Link>
          </Col>
          <Col>
            <Link to={{
                pathname: "/viewcar",
                state: {
                  status: "available",
                  fuelLevel: 10,
                  src: "images/renault-captur.jpg",
                  name: "Renault Capture",
                  number: "CB2736PM",
                },
              }}>
              <CarItem
                status="available"
                fuelLevel={10}
                customStyle={{
                  hoverable: true,
                  style: { width: 240, margin: "10px" },
                }}
                image={{
                  src: "images/renault-captur.jpg",
                  name: "Renault Captur",
                  number: "CB2736PM",
                }}
              />
            </Link>
          </Col>
          <Col>
            <Link to={{
                pathname: "/viewcar",
                state: {
                  status: "available",
                  fuelLevel: 50,
                  src: "images/mazdaCX-5.jpg",
                  name: "Mazda CX-5",
                  number: "CB2333PM",
                },
              }}>
              <CarItem
                status="available"
                fuelLevel={50}
                customStyle={{
                  hoverable: true,
                  style: { width: 240, margin: "10px", outerHeight: 600 },
                }}
                image={{
                  src: "images/mazdaCX-5.jpg",
                  name: "Mazda CX-5",
                  number: "CB2333PM",
                }}
              />
            </Link>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
};

export default HomeView;
