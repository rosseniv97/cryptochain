import React from "react";

import CarItem from "../components/CarItem";

const CarsList = (props) => {
  const { carsList, customStyle } = props;

  return carsList
    ? carsList.map((car) => {
        const { status, fuelLevel, src, name, number, id } = car;

        return (
            <CarItem
              key={id}
              id={id}
              status={status}
              disabled={status === "taken"}
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
