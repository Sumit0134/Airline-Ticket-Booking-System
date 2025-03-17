// This is the file to handle the airport repository

// importing crud repository
const CrudRepository = require("./crud-repository");

// importing airport model
const { Airport } = require("../models");

// creating the airport repository
class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}

// exporting the airport repository
module.exports=AirportRepository;
