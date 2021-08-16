const express = require("express");
var router = express.Router();
let payment = require("../models/payment");

router.route("/add").post((req, res) => {
  var Name = req.body.name;
  var MobileNumber = req.body.number;
  var Amount = req.body.amount;
  var OrderName = req.body.OrderName;


  const payments = new payment({
    Name,
    MobileNumber,
    OrderName,
    Amount,
  });

  payments
    .save()
    .then(() => {
      res.status(200).send({ status: "payment success" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "payment Error" });
    });
});

module.exports = router;
