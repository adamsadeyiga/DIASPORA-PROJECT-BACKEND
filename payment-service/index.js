const express = require("express");
const mongoose = require("mongoose");
const paymentRoutes = require("./src/routes/paymentRoutes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", paymentRoutes);

mongoose
  .connect("mongodb://localhost/payment-service", {})
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.error("Error connecting to MongoDB:", error));
