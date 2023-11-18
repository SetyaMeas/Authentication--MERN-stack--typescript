import { Request, Response } from "express";
import { verifyToken } from "../../utilities/jwt";
import UserModel from "../../mongodb/models/UserModel";


async function deleteUser(req: Request, res: Response) {

  const accessToken: string | any = req.headers['accesstoken'];
  const isMatched: any = verifyToken(accessToken);
  
  if (isMatched) {
    try {
      await UserModel.deleteOne({ _id: isMatched._id });
      return res.json({ success: true, user: isMatched.username });

    } catch (error: unknown) {
      return res.json({ error: error });
    }
  }

  return res.json({ success: false, msg: "invalid token or expired token" });
}

export default deleteUser;