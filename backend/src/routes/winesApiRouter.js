const express = require("express");
const router = express.Router();
const winesApiController = require("../controllers/winesApiController");
const uploadFile = require("../middlewares/multerProducts");
const formValidations = require("../middlewares/validations/formValidations.js");

// Gets all wines
router.get("/", winesApiController.getWines);
// Gets one wine
router.get("/:id", winesApiController.getWine);

// Adds a new wine to the db
router.post(
	"/add",
	uploadFile.single("imagen"),
	formValidations,
	winesApiController.addWine
);

// Updates a wine in db
router.put(
	"/update/:id",
	uploadFile.single("imagen"),
	formValidations,
	winesApiController.updateWine
);

// Deletes a wine in db
router.delete("/delete/:id", winesApiController.deleteWine);

module.exports = router;
