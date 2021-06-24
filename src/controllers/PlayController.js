const axios = require("axios");
const { listenUpApi } = require("../config/config.system");

/**
 *   Play Controller
 *   Lists all users who ever played a track and gives a detailed list of tracks played by a
 *   specific user (tracks are represented by a track ID).
 *   @returns {Object}
 */
playsInfo = async (req, res, next) => {
  try {
    axios
      .get(`${listenUpApi}/plays`)
      .then((response) => {
        if (response.status === 200) {
          return res.status(200).send({
            plays: response.data.plays,
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
  playsInfo,
};
