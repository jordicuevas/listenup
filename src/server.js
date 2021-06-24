// ./src/index.js

// importing the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const axios = require("axios");
const twilioRoutes = require("./routes/user");
const { port } = require("./config/config.system");

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [{ title: "Hello, world (again)!" }];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// defining an endpoint to return all ads
app.use("/api", twilioRoutes);
// this is default in case of unmatched routes
app.use((req, res) => {
  res.json({
    error: {
      name: "Error",
      status: 404,
      message: "Invalid Request",
      statusCode: 404,
    },
    message: "Listen up API!",
  });
});
module.exports = app;
