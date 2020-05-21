const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

// routers 
const communitiesRouter = require('../communities/communities-router.js');

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger);

// --- router paths --- //
server.use('/api/communities', communitiesRouter);

// --- logger middleware --- //
function logger(req, res, next) {
    const date = new Date(Date.now());
    console.log(`METHOD: ${req.method}`);
    console.log(`URL: ${req.originalUrl}`);
    console.log(`DATE: ${date.toDateString()}, ${date.toTimeString()}`);
    next();
}

server.get("/", (req, res) => {
    res.status(200).json({ api: "running" });
});

module.exports = server;