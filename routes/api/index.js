const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config({ path: `.env.local` });

router.get("/", async (req, res) => {
  try {
    let response = await axios(process.env.REACT_APP_URL, {
      params: {
        appid: process.env.REACT_APP_WEATHER_API_KEY,
        q: req.query.city,
      },
    });
    res.send(response.data);
  } catch (error) {
    // let errorCode = error.response.data.cod;
    // res.status(parseInt(errorCode)).json(error.response.data);
  }
});

module.exports = router;
