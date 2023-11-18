import jwt from "jsonwebtoken";
import { secretToken } from "../secret/data";

export function createToken(username: string, password: string, _id: string): string {
  const accessToken: string = jwt.sign(
    {
      username,
      password,
      _id
    },
    secretToken,
    {
      expiresIn: '120s'
    }
  );
  return accessToken;
}


export function verifyToken(accessToken: any) {
  try {
    const isMatched = jwt.verify(accessToken, secretToken);
    return isMatched;
  } catch (error: unknown) {
    return undefined;
  }
}