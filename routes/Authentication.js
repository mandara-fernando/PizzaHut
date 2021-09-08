const express = require("express");
const router = express.Router();

//Not working
const Authentication = require("../api/Authentication/Auth.api");
router.use("/auth-signup", Authentication);

module.exports = router;
