import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import UserModel from "../../mongodb/models/UserModel";
import { UserData } from "../../utilities/types";
import { createToken } from "../../utilities/jwt";

interface UserInfo {
  username: string,
  password: string,
  image: string,
}

async function register(req: Request, res: Response) {

  const {
    username,
    password,
    image
  }: UserInfo = req.body;

  try {

    // is username is already existed
    const existed: UserData | null = await UserModel.findOne({ username: username });
    
    if (existed) {
      return res.json({ 
        success: false, 
        msg: "username already existed" 
      });
    }
    
    // create new user
    const newUser: any = await UserModel.create({
      username: username,
      password: await bcrypt.hash(password, 9),
      image: image,
    });

    const token: string = createToken(
      newUser.username,
      newUser.password,
      newUser._id
    )
    
    return res.json({ 
      success: true, 
      user: newUser, 
      accessToken: token
    });

  } catch (error: unknown | any) {
    console.error(`Error at register: ${register}`);
    return res.json({ error: error.toString() });
  }
}


export default register;