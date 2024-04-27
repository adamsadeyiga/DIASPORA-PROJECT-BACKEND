const express = require("express");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const paymentRoutes = require("./src/routes/paymentRoutes");

const app = express();
const port = 3000;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Payment/Remittance Service API",
      version: "1.0.0",
      description: "API documentation for Payment/Remittance Service",
    },
  },
  apis: ["./src/routes/paymentRoutes.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
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
