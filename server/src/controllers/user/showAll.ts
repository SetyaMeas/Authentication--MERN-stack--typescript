import UserModel from "../../mongodb/models/UserModel";
import { Request, Response } from "express";
import { UserData } from "../../utilities/types";

async function showAll(req: Request, res: Response ) {
  
  try {
    const allUsers: UserData[] | undefined = await UserModel.find();
    return res.json({ success: true, data: allUsers });

  } catch (error: unknown) {
    console.error(`Error at showAll function: ${error}`);
    return res.status(502).json({ error: error });
  }  
}

export default showAll;