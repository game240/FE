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
            <a href="">작품 둘러보기</a>
          </li>
          <li>
            <a href="">지금 공연 중</a>
          </li>
          <li>
            <a href="">작품 등록하기</a>
          </li>
          <li>
            <a href="">포도상점 이야기</a>
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
