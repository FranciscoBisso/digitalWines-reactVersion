const express = require("express");
const router = express.Router();
const categoriesApiController = require("../controllers/categoriesApiController");

router.get("/", categoriesApiController.getCategories);

module.exports = router;
