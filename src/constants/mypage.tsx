import COLOR from "@/styles/color";
import { AiFillHeart, AiFillNotification } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { TbPencilMinus } from "react-icons/tb";

// SubNav
export const NAV_LIST = [
  {
    name: "찜한 작품",
    element: <AiFillHeart color={COLOR.red} />,
    url: "/mypage/liked",
  },
  {
    name: "구매한 작품",
    element: <IoMdPaper color="#0094FF" />,
    url: "/mypage/purchase",
  },
  {
    name: "작품 관리",
    element: <TbPencilMinus color="#4CC602" />,
    url: "/mypage/management",
  },
  {
    name: "QnA",
    element: <FaQuestion color="#FF00E5" />,
    url: "/mypage/qna",
  },
  {
    name: "공연 소식 알려주기",
    element: <AiFillNotification color="#FFF500" />,
    url: "/mypage/liked",
  },
  {
    name: "회원 정보 수정",
    element: <IoSettingsOutline color={COLOR.grey7} />,
    url: "/mypage/profile-edit",
  },
];

// 찜한 작품 - DropDown
export const LIKED_DROPDOWN = ["최신순", "높은 가격순", "낮은 가격순"];
