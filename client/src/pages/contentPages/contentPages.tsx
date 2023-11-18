import { Routes, Route } from "react-router-dom"
import Home from "../../components/contents/home/home";

const ContentPages = () => {

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default ContentPages;