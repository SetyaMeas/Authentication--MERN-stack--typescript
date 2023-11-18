import { Request, Response } from "express";
import { verifyToken } from "../../utilities/jwt";
import UserModel from "../../mongodb/models/UserModel";
import { UserData } from "../../utilities/types";

async function detailUser(req: Request, res: Response) {

  const accessToken: any = req.headers['accesstoken'];
  const isMatched: any = verifyToken(accessToken);

  if (isMatched) {
    try {
      const userInfo: UserData | null = await UserModel.findOne({ _id: isMatched._id });

      if (userInfo) {
        return res.json({ success: true, user: userInfo });
      }
      return res.json({ success: false, msg: "user not found" });

    } catch (error: unknown) {
      console.error(`Error at verify token: ${error}`);
      return res.json({ error: error });
    }
  }

  return res.json({ success: false, msg: "invalid token or expired token" });
}

export default detailUser;