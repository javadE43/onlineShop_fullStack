import db from "../model/index.js";
import { createRequire } from "module";
import "dotenv/config";

import { generateToken,verifyToken,refreshToken } from "../utils/jwt.js";

const require = createRequire(import.meta.url);
const bcrypt = require("bcrypt");
// require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

export class AuthController {
  async register(req, res) {
    const info = {
      firstName: req.body.firstname,
      userName: req.body.username,
      lastName: req.body.lastname,
      mobile: req.body.mobile,
      email: req.body.email,
      passwordHash: await bcrypt.hash(req.body.passwordHash, 10),
      admin: req.body.admin || false,
      vendor: req.body.vendor || false,
    };
    try {
      const user = await db.user.create(info);
      res.json(user);
    } catch (error) {
      res.send(error);
    }
  }

  async login(req, res) {
    const userName = req.body.username;
    const passwordHash = req.body.passwordHash;

    const user = await db.user.findOne({
      where: {
        userName: userName,
      },
    });

    if (!user) {
      res.status(400).send("there is no user");
    } else {
      if (await bcrypt.compare(passwordHash, user.passwordHash)) {
        generateToken(req, res);
      } else {
        res.status(400).send("password is wrong");
      }
    }
  }

  refreshToken(req,res,next){
    return refreshToken
  }
}
