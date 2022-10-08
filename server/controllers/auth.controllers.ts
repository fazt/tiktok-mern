import { Request, Response } from "express";
import userModel from "../models/user.model";
import { signupUserType } from "../schema/User.schema";
import jwt from "jsonwebtoken";

export const signupHandler = async (
  req: Request<unknown, unknown, signupUserType>,
  res: Response
) => {
  const { email, password } = req.body;

  const userFound = await userModel.findOne({ email });

  if (userFound)
    return res.status(400).json({ message: "User already exists" });

  const newUser = new userModel({
    email,
    password,
  });
  const savedUser = await newUser.save();

  // accesstoken
  // refresh token
  
  jwt.sign(
    {
      id: savedUser._id,
    },
    "mysecretkey",
    (err: any, token: any) => {
      if (err) throw err;
      res.status(200).json({ token });
    }
  );
};

export const signinHandler = (req: Request, res: Response) => {
  res.send("signin");
};
