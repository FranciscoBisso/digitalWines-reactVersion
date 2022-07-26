const express = require("express");
const router = express.Router();
const winesApiController = require("../controllers/winesApiController");
const uploadFile = require("../middlewares/multerProducts");
const formValidations = require("../middlewares/validations/formValidations.js");

router.get("/winecellar", winesApiController.winecellar);

router.get("/details/:id", winesApiController.details);

router.get("/create", winesApiController.add);
router.post(
	"/create",
	uploadFile.single("imagen"),
	formValidations,
	winesApiController.create
);

router.get("/update/:id", winesApiController.modify);
router.put(
	"/update/:id",
	uploadFile.single("imagen"),
	formValidations,
	winesApiController.update
);

router.get("/delete/:id", winesApiController.delete);
router.delete("/delete/:id", winesApiController.destroy);

module.exports = router;
