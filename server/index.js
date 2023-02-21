const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: require("find-config")(".env") });
const rateLimit = require("express-rate-limit");

const app = express();

const PORT = process.env.PORT || 5000;

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(cors());

app.use("/api", apiLimiter);
app.set("trust proxy", 1);

app.use(express.static("./frontend/build"));

app.use("/api", require("./routes/api/index"));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
