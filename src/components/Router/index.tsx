import Main from "@/pages/main";
import Liked from "@/pages/mypage/liked";
import Purchase from "@/pages/mypage/purchase";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/mypage/liked" element={<Liked />} />
      <Route path="/mypage/purchase" element={<Purchase />} />
    </Routes>
  );
};

export default Router;
