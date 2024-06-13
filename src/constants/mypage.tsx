import COLOR from "@/styles/color";
import { AiFillHeart, AiFillNotification } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { TbPencilMinus } from "react-icons/tb";

// SubNav
export const NAV_LIST = [
  { name: "찜한 작품", element: <AiFillHeart color={COLOR.red} /> },
  { name: "구매한 작품", element: <IoMdPaper color="#0094FF" /> },
  { name: "작품 관리", element: <TbPencilMinus color="#4CC602" /> },
  { name: "QnA", element: <FaQuestion color="#FF00E5" /> },
  {
    name: "공연 소식 알려주기",
    element: <AiFillNotification color="#FFF500" />,
  },
  {
    name: "회원 정보 수정",
    element: <IoSettingsOutline color={COLOR.grey7} />,
  },
];

// 찜한 작품 - DropDown
export const LIKED_DROPDOWN = ["최신순", "높은 가격순", "낮은 가격순"];
