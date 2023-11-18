import Cookies from "js-cookie";
import { Routes, Route, Navigate } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import AuthPages from "./pages/authPages/authPages";
import ContentPages from "./pages/contentPages/contentPages";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={ Cookies.get("token") ? <Navigate to="/home"/> : <IndexPage /> } />
      <Route path="/auth/*" element={ Cookies.get("token") ? <Navigate to="/home"/> : <AuthPages /> } />
      
      <Route path="/*" element={ Cookies.get("token") ? <ContentPages /> : <Navigate to="/auth/login"/> } />
    </Routes>
  )
}

export default App;