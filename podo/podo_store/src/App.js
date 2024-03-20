import './App.css';
import mainSampleImg from './assets/image/mainsampleimg.png';
import instagram_Img from './assets/image/instagram.png';
import youtube_Img from './assets/image/youtube.png';
import x_Img from './assets/image/x.png';

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
      <div className="main_body">
        <img src={mainSampleImg} alt="Main Img"></img>
      </div>
      <div className="main_footer">
        <div className="social_link_text">
          SOCIAL LINK
          <img src={instagram_Img} alt="Instagram"></img>
          <img src={youtube_Img} alt="Youtube"></img>
          <img src={x_Img} alt="X"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
