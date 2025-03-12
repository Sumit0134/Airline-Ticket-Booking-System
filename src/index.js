const express = require("express");

const app = express();

const { serverConfig, Logger } = require("./config");

const apiRoutes=require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Airline Ticket Booking System");
});

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on PORT: ${serverConfig.PORT}`);
  Logger.info(`Server is running on PORT: ${serverConfig.PORT}`, {});
});
