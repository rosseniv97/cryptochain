import React, { Component } from "react";
import { Card, Progress } from "antd";
import Link from "next/link";

class CarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.status,
      fuelLevel: props.fuelLevel,
    };
  }

  // handleCarSelection = () => {
  //   const { status, fuelLevel, src, name, number, history } = this.props;

  //   history.push({
  //     pathname: "/viewcar",
  //     state: {
  //       status,
  //       fuelLevel,
  //       src,
  //       name,
  //       number,
  //     },
  //   });
  // };

  render() {
    return (
      <Link
        key={this.props.id}
        href={{
          pathname: `/car/${this.props.id}`,
          query: { ...this.props },
        }}
      >
        <Card
          key={this.props.id}
          {...this.props.customStyle}
          cover={<img alt={this.props.name} src={this.props.src} />}
        >
          <div
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              fontSize: "25px",
            }}
          >
            {this.props.name}
          </div>

          <div
            style={{
              border: `2px solid ${
                this.state.status === "taken" ? "red" : "green"
              }`,
              borderRadius: "5px",
              textAlign: "center",
              fontFamily: "sans-serif",
              fontSize: "20px",
            }}
          >
            {this.state.status}
          </div>

          <div style={{ textAlign: "center" }}>{this.props.number}</div>

          <div style={{ textAlign: "center", marginTop: 10 }}>
            <Progress type="circle" percent={this.state.fuelLevel} />
          </div>
        </Card>
      </Link>
    );
  }
}

export default CarItem;
