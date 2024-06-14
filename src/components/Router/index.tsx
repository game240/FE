import Main from "@/pages/main";
import Liked from "@/pages/mypage/liked";
import Management from "@/pages/mypage/management";
import Purchase from "@/pages/mypage/purchase";
import QnA from "@/pages/mypage/qna";
import Review from "@/pages/mypage/review";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      {/* 마이페이지 */}
      <Route path="/mypage/liked" element={<Liked />} />
      <Route path="/mypage/purchase" element={<Purchase />} />
      <Route path="/mypage/purchase/:id" element={<Review />} />
      <Route path="/mypage/management" element={<Management />} />
      <Route path="/mypage/qna" element={<QnA />} />
    </Routes>
  );
};

export default Router;
