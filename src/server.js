import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
var morgan = require("morgan");

import viewEngine from "./config/viewEngine.js";
import initWebRoutes from "./routes/web.js";
import connectDB from "./config/connectDB";

dotenv.config();

let app = express();

// config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

viewEngine(app);
initWebRoutes(app);

connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("App is listening on port " + port);
});
