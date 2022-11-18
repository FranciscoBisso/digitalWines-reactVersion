const express = require("express");
const router = express.Router();
const userApiController = require("../controllers/userApiController");
const uploadFile = require("../middlewares/multerUsers");
const registerValidations = require("../middlewares/validations/registerValidations");
const loginValidations = require("../middlewares/validations/loginValidations");

// SING UP
router.post(
	"/register",
	uploadFile.single("image"),
	registerValidations,
	userApiController.register
);

// LOGIN
router.post("/login", loginValidations, userApiController.login);

// ACCOUNT DETAILS
router.get("/profile/:id", userApiController.details);

// UPDATE PROFILE - user va a poder cargar un avatar
router.put("/profile/:id", userApiController.update);

// DELETE PROFILE
router.delete("/delete/:id", userApiController.delete);

module.exports = router;
