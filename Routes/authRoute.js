import config from "../config.js";
import express from "express";
import User from "../Models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const routerAuth = express.Router();

routerAuth.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!(email && password && name)) {
      return res.status(400).json("All input is required.");
    }

    const oldUser = await User.findOne({ where: { email: email } });

    if (oldUser) {
      return res.status(409).json("User already exist. Please login.");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: name,
      email: email,
      password: encryptedPassword,
    });

    const token = jwt.sign(
      { user_id: user.user_id, email, name },
      config.tokenKey,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;

    return res.status(201).json(user);
  } catch (err) {
    return console.log(err);
  }
});

routerAuth.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).json("All input is required.");
    }

    const user = await User.findOne({ where: { email: email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user.user_id, email },
        config.tokenKey,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;

      return res.status(200).json(user);
    }
    return res.status(400).json("Invalid Credentials.");
  } catch (err) {
    return console.log(err);
  }
});

export { routerAuth as default };
