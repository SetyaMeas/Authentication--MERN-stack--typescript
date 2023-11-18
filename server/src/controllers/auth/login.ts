import bcrypt from "bcryptjs";
import { Request, Response } from "express";

import UserModel from "../../mongodb/models/UserModel";
import { createToken } from "../../utilities/jwt";
import { UserData } from "../../utilities/types";

async function login(req: Request, res: Response) {

  const username: string = req.body.username;
  const password: string = req.body.password;
  
  try {
    const user: UserData | null = await UserModel.findOne({ username });

    if (user) {
      const isMatched: boolean = await bcrypt.compare(password, user.password);

      if (isMatched) {

        const accessToken: string = createToken(
          user.username,
          user.password,
          user._id,
        );

        return res.json({ 
          success: true, 
          user: user, 
          accessToken: accessToken
        });
      }
    } 

    return res.json({ 
      success: false, 
      msg: "username or password is incorrect" 
    });
 
  } catch (error: unknown) {
    console.error(`Error at login: ${error}`);
    return res.json({ error: error });
  }
}


export default login;