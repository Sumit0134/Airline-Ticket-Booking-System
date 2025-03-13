// This is the file to handle the airplane repository

// importing crud repository
const CrudRepository = require("./crud-repository");

// importing airplane model
const { Airplane } = require("../models");

// creating the airplane repository
class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}

// exporting the airplane repository
module.exports=AirplaneRepository;
