import React, { Component } from "react";
import { Card, Progress } from "antd";

class CarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.status,
      fuelLevel: props.fuelLevel,
    };
  }

  render() {
    return (
      <Card
        hoverable
        style={{ width: 240, margin: "10px" }}
        cover={<img alt={this.props.image.name} src={this.props.image.src} />}
      >
        <div
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            fontSize: "25px",
          }}
        >
          {this.props.image.name}
        </div>
        <div
          style={{
            border: "2px solid green",
            borderRadius: "5px",
            textAlign: "center",
            fontFamily: "sans-serif",
            fontSize: "20px",
          }}
        >
          {this.state.status}
        </div>
        <div style={{ textAlign: "center" }}>{this.props.image.number}</div>

        <div style={{ textAlign: "center", marginTop: 10 }}>
          <Progress type="circle" percent={this.state.fuelLevel} />
        </div>
      </Card>
    );
  }
}

export default CarItem;
