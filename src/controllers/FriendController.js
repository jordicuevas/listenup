const axios = require("axios");
const { listenUpApi } = require("../config/config.system");

/**
 *   Friend Controller
 *   Returns a list of users with links to their respective user details:
 *   @returns {Object}
 */
friendsInfo = async (req, res, next) => {
  try {
    axios
      .get(`${listenUpApi}/friends`)
      .then((response) => {
        if (response.status === 200) {
          return res.status(200).send({
            friends: response.data.friends,
          });
        }
      })
      .catch((error) => {
        return res.status(error.respose.status).send({
          message: error.response.message,
        });
      });
  } catch (err) {
    return res.status(500).send({
      message: err.response.message,
    });

    next();
  }
};

module.exports = {
  friendsInfo,
};
