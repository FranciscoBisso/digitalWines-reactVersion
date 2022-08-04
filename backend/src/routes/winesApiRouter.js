const express = require("express");
const router = express.Router();
const winesApiController = require("../controllers/winesApiController");

router.get("/winecellar", winesApiController.findAll);

router.get("/details/:id", winesApiController.findOne);

router.post("/create", winesApiController.create);

router.get("/modify/:id", winesApiController.modify);
router.put("/update/:id", winesApiController.update);

router.get("/delete/:id", winesApiController.delete);
router.delete("/destroy/:id", winesApiController.destroy);

module.exports = router;
