const express = require("express");
const router = express.Router();
const userApiController = require("../controllers/userApiController");

// SING UP
router.post("/register", userApiController.register);

// LOGIN
router.post("/login", userApiController.login);

// ACCOUNT DETAILS
router.get("/profile/:id", userApiController.details);

// UPDATE PROFILE - user va a poder cargar un avatar
router.put("/profile/:id", userApiController.update);

// DELETE PROFILE
router.delete("/delete/:id", userApiController.delete);

// LOGOUT
router.get("/logout", userApiController.logout);

module.exports = router;
