const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

/**
 * @swagger
 * tags:
 *   name: Wallet
 *   description: Wallet operations
 */

/**
 * @swagger
 * /api/wallet:
 *   post:
 *     summary: Create a new wallet
 *     tags: [Wallet]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *             example:
 *               userId: abc123
 *     responses:
 *       '200':
 *         description: Successfully created a wallet
 *       '400':
 *         description: Bad request
 */
router.post("/wallet", paymentController.createWallet);

/**
 * @swagger
 * /api/wallet/{userId}/balance:
 *   get:
 *     summary: Get wallet balance by user ID
 *     tags: [Wallet]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       '200':
 *         description: Successfully retrieved wallet balance
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 balance:
 *                   type: number
 *             example:
 *               balance: 100.50
 *       '404':
 *         description: Wallet not found
 */
router.get("/wallet/:userId/balance", paymentController.getWalletBalance);


module.exports = router;
