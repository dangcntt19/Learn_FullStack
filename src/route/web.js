import express from "express";
import homeCotroller from "../Controllers/homeController";
let router = express.Router();
let initWebRoutes = (app) => {
  router.get("/", homeCotroller.getHomePage);
  router.get("/dang", (req, res) => {
    return res.send("hihihhihi");
  });
  //rest api
  return app.use("/", router);
};
module.exports = initWebRoutes;
