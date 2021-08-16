const express = require("express");
const router = express.Router();

const authentication = require("../controllers/Authentication/auth");
router.use("/auth", authentication);

module.exports = router;
