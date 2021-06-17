import React from "react";
import { dbConnect } from "../database/connect";
import PageLayout from "../client/src/components/PageLayout";
import CarsList from "../client/src/views/CarsList";

const UserCarsView = (props) => {
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

export async function getServerSideProps() {
  //Here is the place to fetch cars' data
  const client = await dbConnect();
  let carsTaken = [];
  await client.connect((err, client) => {
    const database = client.db("CarsChainInventory");
    database
      .collection("cars")
      .find({ status: "taken" })
      .toArray(function (err, result) {
        carsTaken = result;
        console.log(result);
        return {
          props: { carsTaken },
        };
      });
  });
  
}

export default UserCarsView;
