import React, { Component } from "react";
import { Card, Progress } from "antd";
import { withRouter } from "react-router";
import { useLastLocation } from 'react-router-last-location';

class CarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.status,
      fuelLevel: props.fuelLevel,
    };
  }

  handleCarSelection = () => {
    const { status, fuelLevel, src, name, number, history } = this.props;

    history.push({
      pathname: "/viewcar",
      state: {
        status,
        fuelLevel,
        src,
        name,
        number,
      },
    });
  };

  render() {

    return (
      <Card
        {...this.props.customStyle}
        onClick={ this.props.location.pathname === '/' ? this.state.status ==='available' ? this.handleCarSelection : null : this.handleCarSelection}
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
        {this.props.history.location.pathname !== "/" ? (
          ""
        ) : (
          <div
            style={{
              border: `2px solid ${this.state.status === "taken" ? "red" : "green"}`,
              borderRadius: "5px",
              textAlign: "center",
              fontFamily: "sans-serif",
              fontSize: "20px",
            }}
          >
            {this.state.status}
          </div>
        )}
        <div style={{ textAlign: "center" }}>{this.props.number}</div>

        <div style={{ textAlign: "center", marginTop: 10 }}>
          <Progress type="circle" percent={this.state.fuelLevel} />
        </div>
      </Card>
    );
  }
}

export default withRouter(CarItem);
