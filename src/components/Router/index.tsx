import Main from "@/pages/main";
import Liked from "@/pages/mypage/liked";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/mypage/liked" element={<Liked />} />
    </Routes>
  );
};

export default Router;
