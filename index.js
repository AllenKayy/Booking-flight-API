
//import express from 'express'
const express = require("express");
const {json} = require("express");
//const flights = require("./controllers/flightController");
//const models = require("./models/Flight");
const router = require("./routes/flightRoute");

const app = express();

app.use(json());

app.get("/", (req, res) => {
  res.send("Welcome to my Flight API");
});

app.use("/flight", router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
