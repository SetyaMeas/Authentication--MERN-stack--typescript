import { useRef } from "react";
import { Link } from "react-router-dom";

import createCookies from "../../../utilities/createCookies";
import loginFetching from "./tools";
import { ApiResponse } from "../../../utilities/types";

const Login = () => {

  const username: any = useRef(null);
  const password: any = useRef(null);

  async function handleLogin(e: any) {
    e.preventDefault();

    const usernameValue: string = username.current.value;
    const pwValue: string = password.current.value;

    if (usernameValue.length < 3 && pwValue.length < 3) {
      alert("Username or password must be atleast 3 letters");
    } else {
      const res: ApiResponse | undefined = await loginFetching(
        usernameValue,
        pwValue
      );

      if (res) {
        if (res.success) {
          createCookies("token", res.accessToken);
          window.location.pathname = "/home";
        } else {
          alert(res.msg);
        }
      } else {
        alert("Something went wrong");
      }
    }
  }

  return (
    <>
    <form onSubmit={(e) => handleLogin(e)} className="flex items-center flex-col w-[360px] border gap-[15px] py-[30px] px-[45px]">
      <p className="text-[30px] font-bold">Login</p>

      <div className="flex flex-col justify-center gap-[3px] w-full">
        <p className="text-[18px] font-bold">Username:</p>
        <input ref={username} type="text" className="w-full h-[36px] border border-black rounded-md outline-none pl-[9px] text-[15px]" />
      </div>

      <div className="flex flex-col justify-center gap-[3px] w-full">
        <p className="text-[18px] font-bold">Password:</p>
        <input ref={password} type="password" className="w-full h-[36px] border border-black rounded-md outline-none pl-[9px] text-[15px]" />
      </div>

      <div className="w-full flex items-center gap-[9px]">
        <button className="text-[16px] bg-[#355aff] text-white py-[6px] px-[9px] rounded-md" type="submit">Login</button>
        <Link className="hover:underline text-[15px] text-[#1d2482] cursor-pointer" to="/auth/register">Don't have account?</Link>
      </div>
    </form>
    </>
  );
}

export default Login;