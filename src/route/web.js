import express from "express";
import { where } from "sequelize";
import UserController from "../Controllers/UserController";
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
  router.post("/api/login", UserController.handleLogin);
  router.get("/api/get-all-users", UserController.handleGetAllUsers);
  router.post("/api/create-new-user", UserController.handleCreateUser);
  router.put("/api/edit-user", UserController.handleEditUser);
  router.delete("/api/delete-user", UserController.handleDeleteUser);
  return app.use("/", router);
};
module.exports = initWebRoutes;
