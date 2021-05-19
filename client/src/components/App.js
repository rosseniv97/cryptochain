import React, { Component } from "react";
import { Layout, Car, Row, Col } from "antd";
import CarItem from "./CarItem";
import "../../style/index.css";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;
class App extends Component {
  state = {
    userInfo: {
      id: "abcd123",
      name: "Rossen",
    },
  };

  render() {
    const { id, username } = this.state.userInfo;

    return (
      <Layout className="layout">
        <Header></Header>
        <Content style={{ padding: "10px 50px" }}>
          <Row>
            <Col>
              <CarItem
                status="available"
                fuelLevel={10}
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
  }
}

export default App;
