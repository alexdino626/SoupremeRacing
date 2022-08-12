const {drivers} = require("./data/driversData");
const {teams} = require ("./data/teamsData")
const {rankingsDrivers, rankingsTeams} = require("./data/rankingsData");
const { MongoClient} = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const batchImport = async() => {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("Formula-1");
    console.log("connected!");
    await db.collection("Drivers").insertMany(drivers);
    await db.collection("Teams").insertMany(teams);
    await db.collection("Drivers-Rankings").insertMany(rankingsDrivers);
    await db.collection("Teams-Rankings").insertMany(rankingsTeams);

    client.close();
    console.log("disconnected!");
}

batchImport();