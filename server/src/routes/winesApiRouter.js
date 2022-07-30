const express = require("express");
const router = express.Router();
const winesApiController = require("../controllers/winesApiController");

router.get("/winecellar", winesApiController.wineCellar);

module.exports = router;
