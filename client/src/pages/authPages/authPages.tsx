import { Routes, Route } from "react-router-dom";

import Login from "../../components/auth/login/Login";
import Register from "../../components/auth/register/Register";

const AuthPages = () => {

  return (
    <Routes>
      <Route path="/register" element={ <Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AuthPages;