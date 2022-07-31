const express = require("express");
const router = express.Router();
const winesApiController = require("../controllers/winesApiController");

router.get("/winecellar", winesApiController.wineCellar);
router.post("/create", winesApiController.create);
router.put("/update/:id", winesApiController.update);

module.exports = router;
