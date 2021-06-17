const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://rossen97:cska1948@cluster0.hly67.mongodb.net/test";

const client = new MongoClient(uri);

const dbConnect = async () => {
  try {
    await client.connect((err, client) => {
      const database = client.db("CarsChainInventory");
      database
        .collection("cars")
        .find({})
        .toArray(function (err, result) {
          if (result.length) {
            return client;
          } else {
            database.collection("cars").insertMany([
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
            ]);

            return client;
          }
        });
        return database;
    });
  } catch (e) {
    console.log(e);
  } finally {
    return client
  }
};

module.exports = { dbConnect };
