import React from "react";

import PageLayout from "../components/PageLayout";
import CarsList from "./CarsList";

import "../../style/index.css";
import "antd/dist/antd.css";

const UserCarsView = (props) => {
  //Here is the place to fetch cars' data

  const cars = [
    {
      id: 1,
      status: "taken",
      fuelLevel: 100,
      src: "images/chevy.jpg",
      name: "Chevrolet Volt",
      number: "CA1444HT",
    },
    {
      id: 2,
      status: "taken",
      fuelLevel: 50,
      src: "images/mazdaCX-5.jpg",
      name: "Mazda CX-5",
      number: "CB2333PM",
    },
  ];
  return (
    <PageLayout>
      <CarsList
        carsList={cars}
        customStyle={{
          hoverable: true,
          style: { width: 240, margin: "10px" },
        }}
      />
    </PageLayout>
  );
};

export default UserCarsView;
