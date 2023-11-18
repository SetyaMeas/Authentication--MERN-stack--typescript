import axios from "axios";
import { ApiResponse } from "../../../utilities/types";

export async function userDataFetching(token: any): Promise<ApiResponse | undefined> {

  const api: string = import.meta.env.VITE_BASE_API as string;

  try {
    const res: any = await axios.get(`${api}/detail-user`, 
      { 
        headers: {
          accesstoken: token
        } 
      }
    );
    const result: ApiResponse = res.data;
    return result;

  } catch (error: unknown) {
    console.error(`Error at Home Page: ${error}`);
    return undefined;
  }
}