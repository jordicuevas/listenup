const dotenv = require("dotenv");
dotenv.config();
/**
 * List of variables for system usage
 */
module.exports = {
  listenUpApi: process.env.API_URL,
  port: process.env.PORT,
};
