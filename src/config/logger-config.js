// This is the file to configure the logger

// importing winston
const { createLogger, format, transports } = require("winston");

const { combine, timestamp, label, printf } = format;

// creating a custom format
const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} : [${label}] : ${level} : ${message}`;
});

// creating a logger
const logger = createLogger({
  format: combine(
    label({ label: "Airline Ticket Booking System" }),
    timestamp("YYYY-MM-DD HH:mm:ss"),
    customFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "combined.log" }),
  ],
});

// export the logger
module.exports=logger;