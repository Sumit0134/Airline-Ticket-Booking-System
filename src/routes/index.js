// This is the file to handle the routes

// importing express
const express=require("express");

// creating the router
const router=express.Router();

// importing v1 routes
const v1Routes=require("./v1");

// /api
router.use("/v1", v1Routes);

// exporting the router
module.exports=router;