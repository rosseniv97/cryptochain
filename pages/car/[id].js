import React from "react";

import CarItem from "../../client/src/components/CarItem";
import PageLayout from "../../client/src/components/PageLayout";
import CarForm from "../../client/src/components/CarForm";
import { useRouter } from "next/router";

const CarView = (props) => {
  const router = useRouter();
  const { status, fuelLevel, name, number, src, id } = router.query;

  return (
    <PageLayout>
      <CarItem
        key={id}
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
      <CarForm {...router.query} />
    </PageLayout>
  );
};
export default CarView;