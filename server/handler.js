const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
// Get Teams Profile Stats by id
const handleTeamStats = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const {teamId} = req.params;

    await client.connect()

    const db = client.db("Formula-1");

    const team = await db.collection("Teams").findOne({id: teamId});

    if(!team) {
        res.status(404).json({ status: 404, message: "Team not found" });
    } else {
        res.status(200).json({ status: 200, data: team });
    };

    client.close();
};

//Get Drivers Profile Stats by id
const handleDriverStats = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const {driverId} = req.params;

    await client.connect()

    const db = client.db("Formula-1");

    const driver = await db.collection("Drivers").findOne({id: driverId});

    if(!driver) {
        res.status(404).json({ status: 404, message: "Driver not found" });
    } else {
        res.status(200).json({ status: 200, data: driver });
    };

    client.close();
};

//Get Drivers Rankings
const handleDriverRanks = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("Formula-1");

    const drivers = await db.collection("Drivers-Rankings").find().toArray();

    if(drivers.length === 0){
        res.status(404).json({ status: 404, message: "Rankings not found"})
    } else {
        res.status(200).json({ status: 200, data: drivers})
    };
};

//Get Teams Rankings
const handleTeamsRanks = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("Formula-1");

    const teams = await db.collection("Teams-Rankings").find().toArray();

    if(teams.length === 0){
        res.status(404).json({ status: 404, message: "Rankings not found"})
    } else{
        res.status(200).json({ status: 200, data: teams})
    };
};

const handleAddUser = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const {userName, email, password} = req.body
        await client.connect();
        const db= client.db();
        console.log("connect!");

        const user = await db.collection("Users").insertOne(req.body);
        if(
            req.body.userName.length <= 5 || req.body.password.length <= 5  ||
            req.body.email.includes("@") === false
            ) {
            res.status(500).json({ status: 500, data: user, message: "Sorry your registration could not be completed"})
        } else {
            res.status(201).json({ status: 201, data: user, message: "Your registration has been completed!!"})
        }
}

    //Get user by id
const handleGetUser = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const {userId} = req.params;

    await client.connect()

    const db = client.db("Formula-1");

    const user = await db.collection("Users").findOne({_id: userId});

    if(!user) {
        res.status(404).json({ status: 404, message: "User not found" });
    } else {
        res.status(200).json({ status: 200, data: user });
    };

    client.close();
};

const handleGetComments = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect()

    const db = client.db("Formula-1");

    const comment = await db.collection("Comments").find().toArray();

    if(comment.length === 0) {
        res.status(404).json({ status: 404, message: "No comments" });
    } else {
        res.status(200).json({ status: 200, data: comment });
    };

    client.close();
};

module.exports = {
    handleTeamStats,
    handleDriverStats,
    handleDriverRanks,
    handleTeamsRanks,
    handleAddUser,
    handleGetUser,
    handleGetComments,
}