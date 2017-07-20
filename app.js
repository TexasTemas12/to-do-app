const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mustache = require('mustache-express')
var models = require("./models")

app.listen(3000, function() {
  console.log("here I go!")
})
