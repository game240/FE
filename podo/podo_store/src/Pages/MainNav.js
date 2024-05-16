import { Link } from 'react-router-dom';

import './MainNav.css';

function MainNav() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar_logo">
          <Link to="/">포도상점</Link>
        </div>
        <ul className="navbar_menu">
          <li>
            <Link to="/storemain">작품 둘러보기</Link>
          </li>
          <li>
            <Link to="/nowplaying">지금 공연 중</Link>
          </li>
          <li>
            <Link to="/scriptregist">작품 등록하기</Link>
          </li>
          <li>
            <Link to="/applyscript">희망 대본 신청하기</Link>
          </li>
          <li>
            <Link to="/monthauthor">이달의 작가</Link>
          </li>
        </ul>
        <div className="navbar_login">
          <Link to="/signin">로그인</Link>
        </div>
      </nav>
    </div>
  );
}

export default MainNav;
