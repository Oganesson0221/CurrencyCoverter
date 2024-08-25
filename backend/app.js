require("dotenv").config();
const axios = require("axios");
const cors = require("cors");
const express = require("express");
const rateLimit = require("express-rate-limit");

const PORT = process.env.PORT || 5050;

const app = express();

const API_URL = "https://v6.exchangerate-api.com/v6/";

//we are going to save the api key in our environment variable

const API_KEY = process.env.EXCHANGE_RATE_API_KEY;

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, //15 minutes
  max: 100,
});

//!Cors options

//Here we tell the server to trust our front end application
const corsOptions = {
  origin: ["http://localhost:5173"],
};

//! Middlewares

app.use(express.json()); //pass the incoming json data
app.use(apiLimiter);

//Also pass it as a middleware

app.use(cors(corsOptions));

//! Conversion

app.post("/api/convert", async (req, res) => {
  try {
    //Get the user data
    const { from, to, amount } = req.body;
    //Construct the api

    const url = `${API_URL}/${API_KEY}/pair/${from}/${to}/${amount}`;
    console.log(url);
    const response = await axios.get(url);
    if (response.data && response.data.result === "success") {
      res.json({
        base: from,
        target: to,
        conversionRate: response.data.conversion_rate,
        convertedAmount: response.data.conversion_result,
      });
    } else {
      res.json({
        message: "Error converting currency",
        details: response.data,
      });
    }
  } catch (error) {
    res.json({ message: "Error converting currency", details: error.message });
  }
});

//! Start the server

app.listen(PORT, console.log(`The PORT is running on PORT ${PORT}`));
