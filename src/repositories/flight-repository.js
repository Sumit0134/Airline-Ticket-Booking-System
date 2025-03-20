// This is the file to handle the flight repository

// importing crud repository
const CrudRepository = require("./crud-repository");

// importing flight model
const { Flight } = require("../models");

// creating the flight repository
class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter) {
    const response = await Flight.findAll({
      where: filter,
    });
    return response;
  }
}

// exporting the flight repository
module.exports = FlightRepository;
