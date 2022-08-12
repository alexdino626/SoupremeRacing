const express = require('express');
const morgan = require("morgan");

const {
    handleTeamStats,
    handleDriverStats,
    handleDriverRanks,
    handleTeamsRanks,
} = require("./handler");

const PORT = 8000

express()
.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Methods",
        "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
    .use(morgan("tiny"))
    .use(express.static("./server/assets"))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use("/", express.static(__dirname + "/"))

//Rest endpoints
//get team profile stats endpoint

.get("/teams/:teamId", handleTeamStats)

//get driver profile stats endpoint
.get("/drivers/:driverId", handleDriverStats)

//get driver rankings endpoint
.get("/rankings/drivers", handleDriverRanks)

//get teams rankings endpoint
.get("/rankings/teams", handleTeamsRanks)

    .get('/', (req, res) => {
        res.status(200).json({status: 200, message: "Hello!"})
    })

    .listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    });