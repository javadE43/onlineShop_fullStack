import { createRequire } from "module";
import "dotenv/config";

import db from "../model/index.js";

const require = createRequire(import.meta.url);
const jwt = require("jsonwebtoken");

// createToken
export const generateToken = async (req, res, next) => {
  const username = req.body.username;

  const user = await db.user.findOne({ where: { userName: username } });
  jwt.sign(
    { username: username, admin: user.admin },
    process.env.JWT,
    { expiresIn: "1d" },
    (err, token) => {
      if (err) {
        res.status(500).send(err);
      } else {
        // generate refrash token
        jwt.sign({ id: user.id }, process.env.JWT, (err, refreshtoken) => {
          if (err) {
            res.status(500).send();
          } else {
            res.send({
              token,
              refreshtoken,
            });
          }
        });
      }
    }
  );
};

// verifyToken

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.send("There is no token");
  } else {
    jwt.verify(token, process.env.JWT, async (err, result) => {
      if (err) {
        res.send(err);
      } else {
        const username = result.username;
        const user = await db.user.findOne({ where: { userName: username } });
        req.user = user;
        next();
      }
    });
  }
};

// REFRESHtOKEN

export const refreshToken = (req, res, next) => {
  const { refreshtoken } = req.body;
  if (!refreshtoken) {
    return res.send("There is no refreshtoken");
  }
  jwt.verify(refreshtoken, process.env.JWT, async (err, result) => {
    if (err) {
      return res.status(400).send();
    }
    const { id } = result;
    const user = await db.user.findByPk(id);

    if (!user) {
      return res.status(404).send("this user does not exist");
    }

    req.body.username = user.userName;
    console.log(user);
    generateToken(req, res, next);
  });
};

// verifyTokenAndAuthorization

export const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.admin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

// verifyTokenAndAdmin

export const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.admin) {
      console.log(req.user);
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

// token cartShoping

export const tokenCartShoping = async (req, res) => {
  const { firstname, lastname, email } = req.body.cart;
  jwt.sign(
    { firstname: firstname, lastname: lastname, email: email },
    process.env.JWT,
    { expiresIn: "7d" },
    (err, token) => {
      if (err) {
        res.status(500).send(err);
      } else {
        req.tokenCart = token;
      }
    }
  );
};
