import moment from "moment";
import React from "react";
import { withRouter } from "react-router";
import { Layout, DatePicker } from "antd";

import CarItem from "../components/CarItem";
import PageLayout from "../components/PageLayout";
import CarForm from "../components/CarForm";

const CarView = (props) => {
  const { status, fuelLevel, name, number, src } = props.location.state;

  return (
    <PageLayout>
      <CarItem
        status={status}
        fuelLevel={fuelLevel}
        customStyle={{
          hoverable: false,
          style: { width: 540, margin: "10px" },
        }}
        src={src}
        name={name}
        number={number}
      />
      <CarForm {...props} />
    </PageLayout>
  );
};

export default withRouter(CarView);
