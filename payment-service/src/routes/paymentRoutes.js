const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.post("/wallet", paymentController.createWallet);
router.get("/wallet/:userId/balance", paymentController.getWalletBalance);

module.exports = router;
