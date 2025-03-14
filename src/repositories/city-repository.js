// This is the file to handle the city repository

// importing crud repository
const CrudRepository = require("./crud-repository");

// importing city model
const {City}=require("../models");

// creating the city repository
class CityRepository extends CrudRepository{
    constructor(){
        super(City);
    }
}

// exporting the city repository
module.exports=CityRepository;