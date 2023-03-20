import db from "../models/index";
import bcrypt, { hash } from "bcryptjs";
let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExit = await checkUserEmail(email);
      if (isExit) {
        // user already exists
        // compare password
        let user = await db.User.findOne({
          attributes: ["email", "roleId", "password"],
          where: { email: email },
          raw: true,
          // include laf truong can lay exclude la truong k can lay
        });
        if (user) {
          let check = await bcrypt.compareSync(password, user.password); // false hash password
          if (check) {
            (userData.errCode = 0), (userData.errMessage = `OK`);
            console.log(user);
            delete user.password, (userData.user = user);
          } else {
            (userData.errCode = 3), (userData.errMessage = `Wrong password`);
          }
        } else {
          (userData.errCode = 2), (userData.errMessage = `User not found`);
        }
      } else {
        //return error
        (userData.errCode = 1),
          (userData.errMessage = `You's Email insn't exist in your system. Please try other email`);
      }

      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  handleUserLogin: handleUserLogin,
};
