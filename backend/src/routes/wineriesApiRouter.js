const express = require("express");
const router = express.Router();
const wineriesApiController = require("../controllers/wineriesApiController");

router.get("/", wineriesApiController.getWineries);

module.exports = router;
