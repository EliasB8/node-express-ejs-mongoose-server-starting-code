//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


// Connect to db
mongoose.connect("mongodb://localhost/27017/<dbName>", {useNewUrlParser: true, useUnifiedTopology: true});

// Create a schema
const <SchemaName> = new mongoose.Schema({
  <fieldName>: // TODO
  //TODO
});

// Create a model
const <ModelName> = mongoose.model("<Singular Version of the collection Name>", <SchemaName>);

//TODO

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
