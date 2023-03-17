import express from "express";
import { where } from "sequelize";
import homeCotroller from "../Controllers/homeController";
let router = express.Router();
let initWebRoutes = (app) => {
  router.get("/", homeCotroller.getHomePage);
  router.get("/CRUD", homeCotroller.getCRUD);
  router.post("/post-crud", homeCotroller.postCRUD);
  router.get("/get-crud", homeCotroller.displayGetCRUD);
  router.get("/edit-crud", homeCotroller.getEditCRUD);
  router.post("/put-crud", homeCotroller.putCRUD);
  router.get("/delete-crud", homeCotroller.deleteCRUD);
  //rest api
  //rest api
  return app.use("/", router);
};
module.exports = initWebRoutes;
