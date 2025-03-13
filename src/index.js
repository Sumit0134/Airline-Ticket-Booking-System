// This is the file to handle the server

// importing express
const express = require("express");

// creating the express app
const app = express();

// importing serverConfig and Logger
const { serverConfig, Logger } = require("./config");

// importing api routes
const apiRoutes=require("./routes");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Airline Ticket Booking System");
});

// listening the server
app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on PORT: ${serverConfig.PORT}`);
  Logger.info(`Server is running on PORT: ${serverConfig.PORT}`, {});
});
