import React from "react";

import PageLayout from "../client/src/components/PageLayout";
import CarsList from "../client/src/views/CarsList";

const HomeView = (props) => {
  //Here is the place to fetch cars' data

  return (
    <PageLayout>
      <CarsList
        carsList={props.cars}
        customStyle={{
          hoverable: true,
          style: { width: 240, margin: "10px" },
        }}
      />
    </PageLayout>
  );
};

export async function getStaticProps() {
  const cars = [
    {
      id: 1,
      status: "taken",
      fuelLevel: 100,
      src: "/images/chevy.jpg",
      name: "Chevrolet Volt",
      number: "CA1444HT",
    },
    {
      id: 2,
      status: "available",
      fuelLevel: 10,
      src: "/images/renault-captur.jpg",
      name: "Renault Capture",
      number: "CB2736PM",
    },
    {
      id: 3,
      status: "taken",
      fuelLevel: 50,
      src: "/images/mazdaCX-5.jpg",
      name: "Mazda CX-5",
      number: "CB2333PM",
    },
  ];

  return {
    props: {cars}
  }
}

export default HomeView;
