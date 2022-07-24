const express = require("express");
const router = express.Router();
const mainApiController = require("../apiControllers/mainApiController");

router.get("/home", mainApiController.home);

module.exports = router;
