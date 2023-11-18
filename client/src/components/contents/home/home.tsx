import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import { userDataFetching } from "./tools";
import { ApiResponse } from "../../../utilities/types";
import Logout from "../../auth/logout/Logout";


const Home = () => {

  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");

  const token: string | undefined = Cookies.get("token");
  
  useEffect(() => {
    async function getData() {
      const data: ApiResponse | undefined = await userDataFetching(token);
      
      if (data?.success) {
        setImage(data.user.image);
        setUsername(data.user.username);
      }
    }

    getData();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col gap-[15px]">
      <div className="w-[120px] h-[120px] flex justify-center items-center rounded-full overflow-hidden">
        <img src={image} className="w-full" />
      </div>

      <p>Hello, {username}</p>

      <Logout />
    </div>
  )
}

export default Home;