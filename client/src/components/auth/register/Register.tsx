import { useRef } from "react";
import { Link } from "react-router-dom";

import { registerFetching } from "./tools";
import { ApiResponse } from "../../../utilities/types";
import src from "../../../assets/defaultImg"; // default image src
import ImageFiled from "./ImageFiled";
import createCookies from "../../../utilities/createCookies";

const Register = () => {

  const username: any = useRef(null);
  const password: any  = useRef(null);
  const confirmPassword: any  = useRef(null);
  const image: any = useRef(null);

  // handle user submit register form
  async function handleSubmit(e: any): Promise<void> {
    e.preventDefault();

    const pwValue: string = password.current.value;
    const confirmPwValue: string = confirmPassword.current.value;
    const usernameValue: string = username.current.value;
    const imageValue: string = image.current.src;

    if (usernameValue.length < 3) {
      alert("Username must be atleast 3 letters");
    } else if (pwValue.length < 3) {
      alert("Password must be atleast 3 letters");
    } else if (pwValue === confirmPwValue) {
      
      const response: ApiResponse | undefined = await registerFetching(
        usernameValue,
        pwValue,
        imageValue
      );

      if (response) { // if no error
        if (response.success) {
          createCookies("token", response.accessToken);
          window.location.pathname = "/home";

        } else {
          alert(response.msg);
        }

      } else {
        alert(`Something went wrong`);
      }

    } else {
      alert("Password doesn't match");
    }
  }

  function clearTextInput() {
    image.current.src = src;
    username.current.value = "";
    password.current.value = "";
    confirmPassword.current.value = "";
  }

  return (
  <form onSubmit={(e) => handleSubmit(e)} className="flex items-center flex-col w-[360px] border gap-[15px] py-[30px] px-[45px]">
    <p className="text-[30px] font-bold">Register</p>

    <ImageFiled image={image} />

    <div className="w-full flex flex-col gap-[3px]">
      <p className="text-[18px] font-bold">Username:</p>
      <input ref={username} type="text" className="w-full h-[36px] border border-black rounded-md outline-none pl-[9px] text-[15px]" />
    </div>

    <div className="flex flex-col justify-center gap-[3px] w-full">
      <p className="text-[18px] font-bold">Password:</p>
      <input ref={password} type="password" className="w-full h-[36px] border border-black rounded-md outline-none pl-[9px] text-[15px]"/>
    </div>

    <div className="flex flex-col justify-center gap-[3px] w-full">
      <p className="text-[18px] font-bold">Confirm Password:</p>
      <input ref={confirmPassword} type="password" className="w-full h-[36px] border border-black rounded-md outline-none pl-[9px] text-[15px]" />
    </div>

    <div className="w-full flex items-center gap-[9px]">
      <button className="text-[16px] bg-[#355aff] text-white py-[6px] px-[9px] rounded-md" type="submit">Submit</button>
      <Link className="hover:underline text-[15px] text-[#1d2482] cursor-pointer" to="/auth/login">Already have account?</Link>
    </div>

    <button onClick={clearTextInput} type="button" className="bg-red-500 py-[3px] px-[6px] text-white rounded-sm">Clear Input</button>
  </form>
  );
}

export default Register;