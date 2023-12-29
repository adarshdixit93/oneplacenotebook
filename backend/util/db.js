const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose.connect("mongodb://localhost:27017/").then(() => {    
    console.log("Connected to the database!");
  });
};

module.exports = connectToMongo;
