//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar_logo">
          <a href="">포도상점</a>
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
          <a href="">로그인</a>
        </div>
      </nav>
    </div>
  );
}

export default App;
