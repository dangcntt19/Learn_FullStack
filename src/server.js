import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouter from "./route/web";
import connectDB from "./config/connectDB";

require("dotenv").config();
let app = express();
// const express = require("express");
// const cors = require("cors");

// const app = express();

// const corsMiddleware = cors({
//   origin: "*",
//   credentials: true,
// });

// app.use(corsMiddleware);
//const app = express();

// app.use(
//   cors({
//     origin: "*",
//   })
// );

app.use(
  cors({
    origin: ["http://localhost:3000", "http://172.17.169.49:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
// const allowedOrigins = ["http://localhost:3000", "http://localhost:4000"];
// app.use(function (req, res, next) {
//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//     res.setHeader("Access-Control-Allow-Origin", origin);
//   }
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, Content-Length, X-Requested-With"
//   );
//   next();
// });
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "null");
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
//   );

//   res.header("Access-Control-Allow-Credentials", "true"); // Đặt giá trị này thành true
//   next();
// });

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, Content-Length, X-Requested-With"
//   );
//   next();
// });

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
