const Wallet = require("../models/walletModel");

// Create a new wallet
exports.createWallet = async (req, res) => {
  try {
    const { userId, balance, currency, isPrimary } = req.body;
    const wallet = await Wallet.create({
      userId,
      balance,
      currency,
      isPrimary,
    });
    res.status(201).json({ status: "success", data: wallet });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

// Get wallet balance
exports.getWalletBalance = async (req, res) => {
  try {
    const userId = req.params.userId;
    const wallet = await Wallet.findOne({ userId });
    if (!wallet) {
      throw new Error("Wallet not found");
    }
    res
      .status(200)
      .json({ status: "success", data: { balance: wallet.balance } });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};
