const express = require("express");
const router = express.Router();
/**
 *   Importing Controllers
 */
const userController = require("../controllers/UserController");
const friendController = require("../controllers/FriendController");
const playController = require("../controllers/PlayController");

/**
 *   Listen up API routes
 */
router.get("/users/:username", userController.userInfo);

router.get("/friends", friendController.friendsInfo);

router.get("/plays", playController.playsInfo);

module.exports = router;
