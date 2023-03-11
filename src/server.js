import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouter from "./route/web";
import connectDB from "./config/connectDB";
require("dotenv").config();
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRouter(app);

connectDB();
let port = process.env.PORT || 8080;
//port undefine => 6969
app.listen(port, () => {
  console.log("backend" + port);
});
