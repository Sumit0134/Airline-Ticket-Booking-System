// This is the file to configure the server

// importing dotenv
const dotenv = require("dotenv");

// loading the environment variables
dotenv.config();

// exporting the server configuration
module.exports = {
  PORT: process.env.PORT,
};
