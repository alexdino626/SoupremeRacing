const express = require('express');
const morgan = require("morgan");
// const { auth } = require('express-openid-connect');
// const { requiresAuth } = require('express-openid-connect');
// const { SECRET } = process.env;

// app.get('/profile', requiresAuth(), (req, res) => {
//     res.send(JSON.stringify(req.oidc.user));
// });

// const config = {
//     authRequired: false,
//     auth0Logout: true,
//     secret: SECRET,
//     baseURL: 'http://localhost:3000',
//     clientID: '09P5v9epxG6HqIZL2RvDj0JUYo9PW1RA',
//     issuerBaseURL: 'https://dev-9z9st65m.us.auth0.com'
// };
// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// // req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

const {
    handleTeamStats,
    handleDriverStats,
    handleDriverRanks,
    handleTeamsRanks,
    handleAddUser,
    handleGetUser,
    handleGetComments,
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

//get user by id
.get("/user/:userId", handleGetUser)

//get comments
.get("/comments", handleGetComments)

//post new user to the database so no repeated users can exist
.post("/register", handleAddUser)

    .get('/', (req, res) => {
        res.status(200).json({status: 200, message: "Hello!"})
    })

    .listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    });