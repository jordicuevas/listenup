const axios = require("axios");
const { listenUpApi } = require("../config/config.system");

/**
 *   User Controller
 *   Return detailed information about a user, including the number of unique tracks the user has played.
 *   @param {username} : username to query
 *   @returns {Object}
 */
userInfo = async (req, res, next) => {
  try {
    const UserFriends = `${listenUpApi}/friend-detail?username=${req.params.username}`;
    const UserPlays = `${listenUpApi}/plays-detail?username=${req.params.username}`;
    const getUserFriends = axios.get(UserFriends);
    const getUserPlays = axios.get(UserPlays);
    axios
      .all([getUserFriends, getUserPlays])
      .then(
        axios.spread((...responses) => {
          res.status(200).send({
            username: req.params.username,
            friends: responses[0].data.friends.length,
            plays: responses[1].data.plays.length,
            tracks: responses[1].data.plays,
            uri: `/users/${req.params.username}`,
          });
        })
      )
      .catch((errors) => {
        if (errors.response.status === 404) {
          return res.status(errors.response.status).send({
            message: errors,
            statusCode: errors.response.status,
          });
        } else {
          return res.status(errors.response.status).send({
            message: errors.response.message,
            statusCode: errors.response.status,
          });
        }
      });
  } catch (err) {
    return res.status(500).send({
      message: err.response.message,
    });

    next();
  }
};

module.exports = {
  userInfo,
};
