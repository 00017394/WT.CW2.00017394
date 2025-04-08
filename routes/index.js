const express = require("express");
const homeController = require("../controllers/index");

const router = express.Router();

// Routes
router.get("/", homeController.home);

module.exports = router;
