const express = require("express");
const router = express.Router();
const varietalsApiController = require("../controllers/varietalsApiController");

router.get("/", varietalsApiController.getVarietals);

module.exports = router;
