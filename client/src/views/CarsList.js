import React from "react";

import { Link } from "react-router-dom";
import CarItem from "../components/CarItem";
import "../../style/index.css";
import "antd/dist/antd.css";

const CarsList = (props) => {
  const { carsList, customStyle } = props;

  return carsList
    ? carsList.map((car) => {
        const { status, fuelLevel, src, name, number, id } = car;

        return (
          <CarItem
            key={id}
            status={status}
            fuelLevel={fuelLevel}
            customStyle={customStyle}
            src={src}
            name={name}
            number={number}
          />
        );
      })
    : [];
};

export default CarsList;
