import axios from "axios";
import { ApiResponse } from "../../../utilities/types";

export async function registerFetching(
  username: string, 
  password: string, 
  image: string
): Promise<ApiResponse | undefined> {
  
  const api: string = import.meta.env.VITE_BASE_API as string;

  try {
    const response: any = await axios.post(`${api}/auth/register`, {
      username,
      password,
      image
    });
    
    const result: ApiResponse = response.data;
    return result;
    
  } catch (error: unknown) {
    console.error(`Error at register: ${error}`);
    return undefined;
  }
}
