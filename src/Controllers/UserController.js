import UserService from "../servers/UserService";
let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Miss input parameter!",
    });
  }
  let userData = await UserService.handleUserLogin(email, password);
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};
let handleGetAllUsers = async (req, res) => {
  let id = req.query.id; // all, id
  let users = await UserService.getAllUsers(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: "Ok",
    users,
  });
};
let handleCreateUser = async (req, res) => {
  let message = await UserService.createNewUser(req.body);
  console.log(message);
  return res.status(200).json(message);
};
let handleDeleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing requaied parameters",
    });
  }
  let message = await UserService.deleteUser(req.body.id);
  return res.status(200).json(message);
};
let handleEditUser = async (req, res) => {
  let data = req.body;

  let message = await UserService.updateUserData(data);
  return res.status(200).json(message);
};
module.exports = {
  handleLogin: handleLogin,
  handleGetAllUsers: handleGetAllUsers,
  handleCreateUser: handleCreateUser,
  handleEditUser: handleEditUser,
  handleDeleteUser: handleDeleteUser,
};
