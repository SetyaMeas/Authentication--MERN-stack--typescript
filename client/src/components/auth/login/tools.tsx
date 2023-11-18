import axios from "axios";
import { ApiResponse } from "../../../utilities/types";

export default async function loginFetching(
  username: string, 
  password: string
  ): Promise<ApiResponse | undefined> {
  
  const api: string = import.meta.env.VITE_BASE_API as string;

  try {
    const response: any = await axios.post(`${api}/auth/login`, 
      {
        username,
        password
      }
    );

    const result: ApiResponse = response.data;
    return result;

  } catch (error: unknown) {
    console.error(`Error at login: ${error}`);
    return undefined;
  } 
}